// Order totals with VAT per country.
const VAT = { DE: 0.19, FR: 0.2, GB: 0.2, CH: 0.081 };

export function totals(cart, country = "DE") {
  const net = cart.reduce((s, l) => s + l.price * l.qty, 0);
  const vat = Math.round(net * (VAT[country] ?? 0) * 100) / 100;
  return { net, vat, gross: Math.round((net + vat) * 100) / 100 };
}
