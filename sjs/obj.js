const mysym = Symbol("key1")

const intro = {
    name :"shruti",
    email : "shrutigajera@gmail.com",
    [mysym]: "key1",
    age : 21,
    gender : "female"
}
console.log(intro)
console.log(intro[mysym])
console.log(intro.email)

