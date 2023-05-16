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

/**
 * check slide items
 *
 * @param {array} items
 * @return {boolean}
 */
export function checkSlideItems(items)
{
  try
  {
    if (!(items && Array.isArray(items) && items.length > 0))
    {
      throw new Error('Invalid file');
    }
    items.forEach(item => {
      if (typeof item !== 'object') throw 'not object item';
      if (!(item.src && item.title && item.description)) throw 'not property in item';
    });
    return true;
  }
  catch(e)
  {
    return false;
  }
}
