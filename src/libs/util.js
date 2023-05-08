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
 * change screen mode
 *
 * @param {String} theme
 */
export function changeScreenMode(theme)
{
  if (!theme) return;
  const $html = document.querySelector('html');
  $html.dataset['color-mode'] = theme;
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
