/**
 * convert pure object
 * `proxy`, convert `observable` objects to pure objects.
 *  *
 *  * @param {Object|Array} src
 *  * @return
 */
export function convertPureObject(src)
{
  if (!src) return null;
  return JSON.parse(JSON.stringify(src));
}
