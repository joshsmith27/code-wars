const arrayThing = {
    value:[1,2,3,4,5],
    map:function(cb){
        const answer = [];
        for(let i = 0; i<this.value.length; i++){
            console.log(cb(this.value[i]))
            answer.push(cb(this.value[i]))
        }
        return answer
    },
    reduce:function(cb, startingValue){
        let answer = startingValue;
        for(let i = 0; i < this.value.length; i++){
            switch(typeof startingValue){
                case 'number' :
                case 'string' :
                    console.log('string or number')
                    answer+= cb(this.value[i])
                    break;
                case Array.isArray(startingValue) ? 'object' : false:
                    console.log('arr')
                    answer.push(cb(this.value[i]))
                    break;
                case 'object':
                    console.log('object')
                    answer = Object.assign(startingValue, cb(this.value[i]))
                    break;
            }
            
        }
        return answer;
    }
}


const add2 = (val) => {

    return val + 2;
}

const arr = [1,2,3,4,5];

// console.log(arr.map(add2))
console.log(arrayThing.reduce(add2, {}))