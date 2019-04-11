// There is an object/class already created called MrFreeze. Mark this object as frozen so that no other changes can be made to it.

let object1 = {
    name:'josh',
    age: 26,
}

Object.freeze(object1)

object1.stuff= 'whatever'

console.log(object1)

// Object.freeze(MrFreeze)