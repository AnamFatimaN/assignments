const a=parseFloat(process.argv[2])
const b=parseFloat(process.argv[3]);
function calc(x,y){
    const sum = x+y;
    const product = x*y;
    const remainder=x-y;
    console.log (`Sum: ${sum}, Product: ${product}, Remainder: ${remainder}`);
}
 calc(a,b);