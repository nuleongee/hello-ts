import canUseDom from "can-use-dom";

console.log(canUseDom);

window.hello = "a";
const error = new Error("");
error.code;

const result = Array.prototype.map.call<
  number[],
  [(item: number) => string],
  string[]
>([1, 2, 3], item => {
  return item.toFixed(1);
});
