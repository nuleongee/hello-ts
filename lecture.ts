let num: number;
num = 3;
const str = "hello";

const arr = [true, 2, "3"] as const; // Tuple

const obj: { a: string; b?: number } = { a: "b" };

enum Color {
  Red,
  Green,
  Blue
}
let c: Color = Color.Green;

function add(a: number, b: number): (c: string) => (b: string) => boolean {
  return (c: string) => {
    return (d: string) => {
      return false;
    };
  };
}

const obj2: { a: (b: number, c?: string) => string } = {
  a(b: number, c?: string) {
    return "hello";
  }
};
// obj2.a();
obj2.a(3);
obj2.a(3, "hello");
