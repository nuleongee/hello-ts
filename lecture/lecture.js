"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function makeGender(target) {
    console.log("hello");
    return class extends target {
        constructor() {
            super(...arguments);
            this.gender = "male";
        }
    };
}
function readonly(target, key, descriptor) {
    console.log(target, key, descriptor);
    descriptor.writable = false;
}
let Person = class Person {
    constructor(title) {
        this.age = 27;
        this.title = name;
    }
    setTitle(title) {
        this.title = title;
    }
    sayTitle() {
        return this.title;
    }
};
__decorate([
    readonly
], Person.prototype, "sayTitle", null);
Person = __decorate([
    makeGender
], Person);
const emsbn = new Person("emsbn");
console.log("sayTitle", emsbn.sayTitle());
emsbn.sayTitle = () => {
    return "changed";
};
console.log("sayTitle", emsbn.sayTitle());
let Person2 = class Person2 {
    constructor(title) {
        this.age = 27;
        this.title = name;
    }
    setTitle(title) { }
    sayTitle() {
        return this.title;
    }
};
Person2 = __decorate([
    makeGender
], Person2);
