module.exports = class EventEmitter {
    listeners = {};

    addListener(eventName, fn) {
        this.listeners[eventName] = this.listeners[eventName] || [];
        this.listeners[eventName].push(fn);
        return this;
    }
    removeListener(eventName, fn) {
        let lis = this.listeners[eventName];
        if (!lis) return this;
        for (let i = lis.length - 1; i > 0; i--) {
            if (lis[i].toString() === fn.toString()) {
                lis.splice(i, 1);
                break;
            }
        }
        return this;
    }
    on(eventName, fn) {
        return this.addListener(eventName, fn);
    }
    once(eventName, fn) {
        this.listeners[eventName] = this.listeners[eventName] || [];
        const onceWrapper = () => {
            fn();
            this.off(eventName, onceWrapper);
        };
        this.listeners[eventName].push(onceWrapper);
        return this;
    }
    off(eventName, fn) {
        return this.removeListener(eventName, fn);
    }
    emit(eventName, ...args) {
        let fns = this.listeners[eventName];
        if (!fns) return false;
        fns.forEach((f) => {
            f(...args);
        });
        return true;
    }
};
