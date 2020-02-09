function makeGender(target: typeof Person) {
  console.log("hello");
  return class extends target {
    gender = "male";
  };
}

function readonly(target: any, key: any, descriptor: PropertyDescriptor) {
  console.log(target, key, descriptor);
  descriptor.writable = false;
}

@makeGender
class Person {
  title: string;
  age = 27;

  constructor(title: string) {
    this.title = name;
  }
  setTitle(title: string) {
    this.title = title;
  }
  @readonly sayTitle(): any {
    return this.title;
  }
}
const emsbn = new Person("emsbn");
console.log("sayTitle", emsbn.sayTitle());
emsbn.sayTitle = () => {
  return "changed";
};
console.log("sayTitle", emsbn.sayTitle());

@makeGender
class Person2 {
  title: string;
  age = 27;

  constructor(title: string) {
    this.title = name;
  }
  setTitle(title: string) {}
  sayTitle(): any {
    return this.title;
  }
}
