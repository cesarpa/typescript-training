"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Shape_1 = require("./Shape");
const Circle_1 = require("./Circle");
const Rectangle_1 = require("./Rectangle");
const AnotherCircle_1 = require("./AnotherCircle");
let myShape = new Shape_1.Shape(10, 15);
console.log(myShape.getInfo());
let myCircle = new Circle_1.Circle(5, 10, 20);
console.log(myCircle.getInfo());
let theShapes = [];
theShapes.push(myShape);
theShapes.push(myCircle);
for (let tempShape of theShapes) {
    console.log(tempShape.getInfo());
}
let myRectangle = new Rectangle_1.Rectangle(8, 8, 3, 3);
console.log(myRectangle.getInfo());
let myOtherCircle = new AnotherCircle_1.AnotherCircle(5, 10, 20);
let abstractShape = [];
abstractShape.push(myRectangle);
abstractShape.push(myOtherCircle);
for (let tempAbsShape of abstractShape) {
    console.log(tempAbsShape.calculateArea());
}
