declare global {
  interface Window {
    on: any;
    off: any;
  }
  interface Document {
    on: any;
    off: any;
  }
  interface Element {
    on: any;
    off: any;
  }
}

/**
 * initial custom event
 * It is used when creating and using custom events to create events with unique names when you want to insert multiple
 * events into overlapping `dom` (especially window).
 */
export default function initCustomEvent(): void
{
  const events: any = {
    on(event: string, cb: Function, opts: any)
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

  window.on = document.on = Element.prototype.on = events.on;
  window.off = document.off = Element.prototype.off = events.off;
}
