exports.Map = () => {
    // array function 



    console.log('Map file')


}
const person = ['Arun', 'Varun', 'Tarun', 'Garima', 'Shivangi', 'Shalini', 'Annu', 'Riya', 'Tanmay']


// it will arange data in alphabetically 
const sort = person.sort()
console.log('sorting', sort)
// map

// console.log(person.map(i => i))



// filter

/* 
console.log(person.filter((i, index) => {
     console.log('index:',index)
     return i === 'Arun'
})) 
*/

// reduce

const number = [1, 2, 3, 4, 5]

console.log(number.reduce((i, u) => {
    return i + 1
}, 0))