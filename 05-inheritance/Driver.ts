import { Shape } from "./Shape";
import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle";
import { AbstractShape } from "./AbstractShape";
import { AnotherCircle } from "./AnotherCircle";

let myShape = new Shape(10,15);
console.log(myShape.getInfo());

let myCircle = new Circle(5,10,20);
console.log(myCircle.getInfo());

let theShapes:Shape[] = [];
theShapes.push(myShape);
theShapes.push(myCircle);

for (let tempShape of theShapes){
    console.log(tempShape.getInfo());
}

let myRectangle = new Rectangle(8,8,3,3);
console.log(myRectangle.getInfo());

let myOtherCircle = new AnotherCircle(5,10,20);


let abstractShape:AbstractShape[] = [];
abstractShape.push(myRectangle);
abstractShape.push(myOtherCircle);

for (let tempAbsShape of abstractShape){
    console.log(tempAbsShape.calculateArea());
}