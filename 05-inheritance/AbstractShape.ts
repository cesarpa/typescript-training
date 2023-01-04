export abstract class AbstractShape {

    constructor(private _x:number, private _y:number){

    }
    
    abstract calculateArea(): number;

    getInfo():string {
        return `${this._x} ${this._y}`;
    }

}