let a = 7, b;
let block = () => {
    b = a;
}
block();
a = 5;
console.log('a=', a, ',b=', b);

console.log('test');