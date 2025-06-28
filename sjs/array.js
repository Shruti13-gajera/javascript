const arr = new Array(1,2,3,4,5)
console.log(arr);
const arr1 = [9,7,9,7,6]
console.log(arr1[1]);

arr1.push(6)
arr1.push(14)
arr1.pop()


arr1.unshift(9)
arr1.shift()
console.log(arr1);

const money = ["ruppies","dollor","inr"]
const name = ["shruti","shruta","shruu"]
//money.push(name)
//console.log(money);
all = money.concat(name)
//console.log(all);
const all1 = [...money,...name]
console.log(all1);
const arrf = [1,2,3,[4,7],9,[4,6,7,[2,4]]]
const r_arrf = arrf.flat(Infinity)
console.log(r_arrf);

console.log(Array.isArray("shruti"));
console.log(Array.from("shruti"));
console.log(Array.from({name:"shruti"}));

let s1 = 100
let s2 = 200
let s3 = 300
console.log(Array.of(s1,s2,s3));




