// Cart model: line items with quantity rules.
export const MAX_QTY = 20;

export function addItem(cart, item, qty = 1) {
  const line = cart.find((l) => l.sku === item.sku);
  const next = Math.min((line?.qty ?? 0) + qty, MAX_QTY);
  return line ? cart.map((l) => (l.sku === item.sku ? { ...l, qty: next } : l)) : [...cart, { ...item, qty: next }];
}
