export function f() {
  g()
}

function g() {
  global.console.log(1);
}
