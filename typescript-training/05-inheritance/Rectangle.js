"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rectangle = void 0;
const AbstractShape_1 = require("./AbstractShape");
class Rectangle extends AbstractShape_1.AbstractShape {
    constructor(theX, theY, _width, _length) {
        super(theX, theY);
        this._width = _width;
        this._length = _length;
    }
    getInfo() {
        return `, width=${this._width}, length=${this._length}`;
    }
    calculateArea() {
        return this._length * this._width;
    }
}
exports.Rectangle = Rectangle;
