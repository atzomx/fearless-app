type PickProperties<T, K extends keyof T> = {
  [P in K]: T[P];
};

export function pick<T, K extends keyof T>(
  obj: T,
  keys: K[],
): PickProperties<T, K> {
  const picked = {} as PickProperties<T, K>;

  keys.forEach(key => {
    if (obj[key]) {
      picked[key] = obj[key];
    }
  });

  return picked;
}

type OmitProperties<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export function omit<T, K extends keyof T>(
  obj: T,
  keys: K[],
): OmitProperties<T, K> {
  const omitted = { ...obj };
  keys.forEach(key => {
    delete omitted[key];
  });
  return omitted;
}
