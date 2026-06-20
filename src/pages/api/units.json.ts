import type { APIRoute } from 'astro';
import { categories } from '../../lib/units';

export const GET: APIRoute = () => {
  const data = {
    categories: categories.map(cat => ({
      id:          cat.id,
      name:        cat.name,
      description: cat.description,
      defaultFrom: cat.defaultFrom,
      defaultTo:   cat.defaultTo,
      units: cat.units.map(u => ({
        id:     u.id,
        name:   u.name,
        symbol: u.symbol,
        ...(u.info ? { description: u.info } : {}),
      })),
    })),
  };
  return new Response(JSON.stringify(data, null, 2), {
    headers: {
      'Content-Type':                'application/json',
      'Access-Control-Allow-Origin': '*',
    },
  });
};
