const BASE_SPACING = 8;

export const spacing = (...spaces: number[]) =>
  spaces
    .slice(0, 4)
    .map(space => `${space * BASE_SPACING}px`)
    .join(' ');

export const spacingSingle = (space: number) => space * BASE_SPACING;

export const fade = (hex: string, alpha = 1) => {
  if (!/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) throw new Error('Bad Hex Color');
  const r = parseInt(hex.slice(1, 3), 16),
    g = parseInt(hex.slice(3, 5), 16),
    b = parseInt(hex.slice(5, 7), 16);

  return 'rgba(' + r + ', ' + g + ', ' + b + ', ' + alpha + ')';
};
