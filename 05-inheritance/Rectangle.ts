import { AbstractShape } from "./AbstractShape";


export class Rectangle extends AbstractShape {
    constructor(theX:number,theY:number,
        private _width:number, private _length:number){
          super(theX,theY);
    }

    getInfo():string{
        return  `, width=${this._width}, length=${this._length}`;
    }

    calculateArea(): number {
        return this._length * this._width;
    }
}