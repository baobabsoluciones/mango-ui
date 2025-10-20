/* With jest-dom the resizeObserver seems to not be included, it is used by Vuetify so we have
   to include it somehow for tests.
*/
(global as any).ResizeObserver = class ResizeObserver {
  constructor(callback: (entries: any[]) => void) {
    (this as any).callback = callback
  }
  disconnect() {}
  observe(element: any) {
    (this as any).callback([
      {
        target: element,
        contentRect: {
          bottom: 0,
          height: 0,
          left: 0,
          right: 0,
          top: 0,
          width: 0,
          x: 0,
          y: 0,
        },
      },
    ])
  }
  unobserve() {}
}

// Polyfill for visualViewport API used by Vuetify
Object.defineProperty(window, 'visualViewport', {
  writable: true,
  value: {
    width: 1920,
    height: 1080,
    scale: 1,
    offsetLeft: 0,
    offsetTop: 0,
    pageLeft: 0,
    pageTop: 0,
    addEventListener: () => {},
    removeEventListener: () => {},
  },
})