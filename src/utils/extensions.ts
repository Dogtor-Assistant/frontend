import type { Rect } from './types';

declare global {
    interface HTMLElement {
        getRect(): Rect
    }
}

HTMLElement.prototype.getRect = function<T extends HTMLElement>(this: T): Rect {
    return {
        height: this.clientHeight,
        offsetLeft: this.offsetLeft,
        offsetTop: this.offsetTop,
        parent: this.parentElement?.getRect() ?? null,
        width: this.clientWidth,
    };
};

export {};
