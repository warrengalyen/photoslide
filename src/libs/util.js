/**
 * sleep (delay tool)
 *
 * @param {Number} ms
 * @return {Promise}
 */
export function sleep(ms = 1000)
{
  return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * convert pure object
 * `proxy`, convert `observable` objects to pure objects.
 *
 * @param {object|Array} src
 * @return {object|Array}
 */
export function convertPureObject(src)
{
  if (!src) return null;
  return JSON.parse(JSON.stringify(src));
}

/**
 * initial custom event
 * It is used when creating and using custom events to create events with unique names when you want to insert multiple
 * events into overlapping `dom` (especially window).
 */
export function initCustomEvent()
{
  const events = {
    on(event, cb, opts)
    {
      if (!this.namespaces) this.namespaces = {};
      this.namespaces[event] = cb;
      const options = opts || false;
      this.addEventListener(event.split('.')[0], cb, options);
      return this;
    },
    off(event)
    {
      if (!(this.namespaces && this.namespaces[event])) return;
      this.removeEventListener(event.split('.')[0], this.namespaces[event]);
      delete this.namespaces[event];
      return this;
    },
  };
  window.on = document.on = Element.prototype.on = events.on;
  window.off = document.off = Element.prototype.off = events.off;
}

/**
 * set area true
 *
 * @param {Array} src
 * @param {number} total
 * @param {number} current
 * @param {boolean} loop
 * @return {Array}
 */
export function setAreaTrue(src, total, current, loop)
{
  function setTrue(sw)
  {
    if (sw)
    {
      if (src[current + 1] !== undefined) src[current + 1] = true;
    }
    else
    {
      if (src[current - 1] !== undefined) src[current - 1] = true;
    }
  }
  src = convertPureObject(src);
  if (loop)
  {
    if (current === 0)
    {
      src[total - 1] = true;
      setTrue(true);
    }
    else if (current === total - 1)
    {
      src[0] = true;
      setTrue(false);
    }
    else
    {
      setTrue(true);
      setTrue(false);
    }
  }
  else
  {
    setTrue(true);
    setTrue(false);
  }
  return src;
}

/**
 * control fullscreen
 *
 * @param {boolean} sw
 */
export function fullscreen(sw)
{
  const doc = window.document;
  const docEl = doc.documentElement;
  // state.activeFullscreen = sw;
  if (sw)
  {
    const requestFullScreen = docEl.requestFullscreen || docEl.mozRequestFullScreen || docEl.webkitRequestFullScreen || docEl.msRequestFullscreen;
    requestFullScreen.call(docEl);
  }
  else
  {
    const cancelFullScreen = doc.exitFullscreen || doc.mozCancelFullScreen || doc.webkitExitFullscreen || doc.msExitFullscreen;
    cancelFullScreen.call(doc);
  }
}
