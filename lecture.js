"use strict";
let num;
num = 3;
const str = "hello";
const arr = [true, 2, "3"]; // Tuple
const obj = { a: "b" };
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
let c = Color.Green;
