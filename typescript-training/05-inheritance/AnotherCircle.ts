import { AbstractShape } from "./AbstractShape";

export class AnotherCircle extends AbstractShape {
    constructor(theX:number,theY:number,
        private _radius:number){
        super(theX,theY);
    }

    getInfo():string{
        return super.getInfo() + `, radius=${this._radius}`
    }

    calculateArea(): number {
        return Math.PI* Math.pow(this._radius, 2);
    }
}