// Shareable tool state: sync a field's value with a URL query param.
// On load, if `?param=…` is present, the value is applied and the field's
// existing `input` handler is triggered (so the tool recomputes with its
// already-tested logic). On edit, the URL is updated via replaceState so
// the address bar is always a shareable link — no history spam, no reload.

type Field = HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;

export function bindParam(el: Field | null, param: string): void {
  if (!el) return;
  const initial = new URL(location.href).searchParams.get(param);
  if (initial !== null) {
    el.value = initial;
    el.dispatchEvent(new Event('input', { bubbles: true }));
    el.dispatchEvent(new Event('change', { bubbles: true }));
  }
  const write = () => {
    const url = new URL(location.href);
    if (el.value) url.searchParams.set(param, el.value);
    else url.searchParams.delete(param);
    history.replaceState(null, '', url);
  };
  el.addEventListener('input', write);
  el.addEventListener('change', write);
}

/** Bind several fields at once: [element, paramName] pairs. */
export function bindParams(pairs: Array<[Field | null, string]>): void {
  for (const [el, param] of pairs) bindParam(el, param);
}
