class EventEmitter {
  constructor() {
    this.events = {};
  }

  subscribe(name, fn) {
    if (!this.events[name]) {
      this.events[name] = [];
    }
    this.events[name].push(fn);

    return () => {
      this.events[name] = this.events[name].filter(eventFn => fn !== eventFn);
    }
  }

  emit(name, data) {
    const event = this.events[name];
    if (event) {
      event.forEach(fn => {
        fn.call(null, data);
      })
    }
  }
}

export const emitter = new EventEmitter();