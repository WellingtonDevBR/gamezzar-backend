type AnyObject = { [k: string]: any };

function toSnakeCase(str: string): string {
  return str
    .replace(/\.?([A-Z]+)/g, (x, y) => "_" + y.toLowerCase())
    .replace(/^_/, "");
}

export function convertObjectToSnakeCase(
  obj: AnyObject | AnyObject[]
): AnyObject | AnyObject[] {
  if (Array.isArray(obj)) {
    return obj.map((v) => convertObjectToSnakeCase(v));
  } else if (
    obj !== null &&
    typeof obj === "object" &&
    !(obj instanceof Date) // <-- Add this line
  ) {
    return Object.fromEntries(
      Object.entries(obj).map(([key, value]) => [
        toSnakeCase(key),
        convertObjectToSnakeCase(value),
      ])
    );
  }
  return obj;
}

