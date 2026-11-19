/** Calculate the weighted input and sigmoid from the specified query format. */
export function calculate(search) {
  const fields = Object.fromEntries(search.slice(1).split('&').map(part => {
    const [name, value] = part.split('=');
    return [name, decodeURIComponent(value)];
  }));
  const inputs = fields.A.split(',').map(Number);
  const weights = fields.B.split(',').map(Number);
  const z = inputs.reduce((sum, value, index) => sum + value * weights[index], Number(fields.C));
  return { z, y: 1 / (1 + Math.exp(-z)) };
}

/** Format three decimals by truncation, with the required special case for one. */
export function formatTitle(y) {
  return y === 1 ? '1' : '0.' + String(Math.trunc(y * 1000)).padStart(3, '0');
}
