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
