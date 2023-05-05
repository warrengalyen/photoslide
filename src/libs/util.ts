/**
 * sleep (delay tool)
 */
export function sleep(ms: number = 1000)
{
  return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * initial custom event
 * It is used when creating and using custom events to create events with unique names when you want to insert multiple
 * events into overlapping `dom` (especially window).
 */
export function initCustomEvent(): void
{
  const events: any = {
    on(event: string, cb: Function, opts: object)
    {
      if (!this.namespaces) this.namespaces = {};
      this.namespaces[event] = cb;
      const options = opts || false;
      this.addEventListener(event.split('.')[0], cb, options);
      return this;
    },
    off(event: string)
    {
      if (!(this.namespaces && this.namespaces[event])) return;
      this.removeEventListener(event.split('.')[0], this.namespaces[event]);
      delete this.namespaces[event];
      return this;
    },
  };
  (window as any).on = (document as any).on = (Element.prototype as any).on = events.on;
  (window as any).off = (document as any).off = (Element.prototype as any).off = events.off;
}

/**
 * change screen mode
 */
export function changeScreenMode(theme: string): void
{
  if (!theme) return;
  const $html = document.querySelector('html') as HTMLElement;
  $html.dataset['color-mode'] = theme;
}
