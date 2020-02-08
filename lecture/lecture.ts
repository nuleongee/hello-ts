interface A {
  a: "b";
  b: true;
  c: 123;
}

const a: A = {
  a: "b",
  b: true,
  c: 123
};

const b: Partial<A> = {
  a: "b"
};

const c: Readonly<A> = {
  // a,b,c 앞에 readonly 붙인 효과
  a: "b",
  b: true,
  c: 123
};

interface B {
  readonly a: "b";
  readonly b: true;
  readonly c: 123;
}
