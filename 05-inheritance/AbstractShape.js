"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbstractShape = void 0;
class AbstractShape {
    constructor(_x, _y) {
        this._x = _x;
        this._y = _y;
    }
    getInfo() {
        return `${this._x} ${this._y}`;
    }
}
exports.AbstractShape = AbstractShape;
