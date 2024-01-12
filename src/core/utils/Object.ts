type PickProperties<T, K extends keyof T> = {
  [P in K]: T[P];
};

export function pick<T, K extends keyof T>(
  obj: T,
  keys: K[],
): PickProperties<T, K> {
  const picked: PickProperties<T, K> = {} as PickProperties<T, K>;

  keys.forEach(key => {
    if (obj[key]) {
      picked[key] = obj[key];
    }
  });

  return picked;
}
