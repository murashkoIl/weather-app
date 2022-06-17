export class Observer {
	constructor() {
		this.observers = [];
	}

	subscribe(fn) {
		this.observers.push(fn);
	}

	unsubscribe(fnToRemove) {
		this.observers = this.observers.filter(fn => {
			return fn !== fnToRemove;
		});
	}

	trigger() {
		this.observers.forEach(fn => {
			fn.call();
		});
	}
}
