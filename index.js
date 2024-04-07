var obj = {num:2}

var addToThis = function (...args) {
    console.log(this)
    const arrTotal = args.reduce((acc,curr)=>acc+curr,0);
    return this.num + arrTotal
}
const x = addToThis.bind(obj,[3,4,5])
console.log(x())