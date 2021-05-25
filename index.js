const { Array } = require('./Array')
const { Object } = require('./Object')
const { Map } = require('./Map')




const main = async () => {
    console.log('\n\n')
    await Array()
    console.log('\n\n')
    await Object()
    console.log('\n\n')
    await Map()
}


main()