/**
 * convert pure object
 * `proxy`, convert `observable` objects to pure objects.
 */
export function convertPureObject(src: object|Array<unknown>): unknown
{
  if (!src) return null;
  return JSON.parse(JSON.stringify(src));
}
