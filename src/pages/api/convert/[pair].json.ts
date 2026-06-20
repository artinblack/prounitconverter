import type { GetStaticPaths, APIRoute } from 'astro';
import { categories, convert, convertFuel, formatResult } from '../../../lib/units';

export const getStaticPaths: GetStaticPaths = () => {
  const paths: Array<{ params: { pair: string } }> = [];
  const seen = new Set<string>();

  for (const cat of categories) {
    if (cat.id === 'numbase') continue; // string-based conversion, not factor-based
    for (const [fromId, toId] of cat.commonPairs) {
      const key = `${fromId}-to-${toId}`;
      if (seen.has(key)) continue;
      seen.add(key);
      paths.push({ params: { pair: key } });
    }
  }
  return paths;
};

export const GET: APIRoute = ({ params }) => {
  const pair = params.pair as string;
  const match = pair.match(/^(.+)-to-(.+)$/);
  if (!match) {
    return new Response(JSON.stringify({ error: 'Invalid pair format. Use from-to-to.' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
    });
  }

  const [, fromId, toId] = match;

  for (const cat of categories) {
    const fromU = cat.units.find(u => u.id === fromId);
    const toU   = cat.units.find(u => u.id === toId);
    if (!fromU || !toU) continue;

    // Compute example conversions for common values
    const sampleValues = [1, 5, 10, 25, 50, 100, 500, 1000];
    const examples = sampleValues.map(v => {
      const result = cat.id === 'fuel'
        ? convertFuel(v, fromId, toId)
        : convert(v, fromU, toU, cat.id);
      return { input: v, output: Number(formatResult(result)) };
    });

    // Factor for direct computation (not available for temp/fuel/currency)
    const factor = (cat.id !== 'temperature' && cat.id !== 'fuel' && cat.id !== 'currency')
      ? fromU.factor / toU.factor
      : null;

    const data = {
      from:     { id: fromU.id, name: fromU.name, symbol: fromU.symbol },
      to:       { id: toU.id,   name: toU.name,   symbol: toU.symbol   },
      category: { id: cat.id,   name: cat.name   },
      ...(factor !== null ? { factor: Number(formatResult(factor)) } : {}),
      note: factor !== null
        ? `Multiply the input value by ${formatResult(factor)} to convert ${fromU.symbol} → ${toU.symbol}.`
        : `Conversion requires special formula — see examples.`,
      examples,
    };

    return new Response(JSON.stringify(data, null, 2), {
      headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
    });
  }

  return new Response(JSON.stringify({ error: `Unit pair "${fromId}" to "${toId}" not found.` }), {
    status: 404,
    headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
  });
};
