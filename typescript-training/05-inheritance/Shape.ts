export class Shape {
    
    constructor(private _x:number, private _y:number){

    }

    getInfo():string {
        return `${this._x} ${this._y}`;
    }

}