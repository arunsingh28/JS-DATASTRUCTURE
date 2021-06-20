exports.Map = () => {
    // array function 



    console.log('Map file')


}
const person = ['Arun', 'Varun', 'Tarun', 'Garima', 'Shivangi', 'Shalini', 'Annu', 'Riya', 'Tanmay']


// map
// console.log(person.map(i => i))



// filter
console.log(person.filter((i, index) => {
    console.log('index:',index)
    return i === 'Arun'
}))