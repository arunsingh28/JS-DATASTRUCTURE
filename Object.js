exports.Object = () => {

    // Object function 


    const person = [{
        name: 'Arun',
        age: '',
        sex: '',
        height: {
            feet: '',
            inch: '',
            other: {
                cm: ''
            }
        },
        nataionlity: '',
        display() {
            console.log('name is Arun')
        },
        displaySides() {
            console.log("Square has 4 sides")
        },
        displayName() {
            console.log("Shape is Square")
        }
    }]

    const person1 = {
        name: 'Arun',
        age: '',
        sex: '',
        height: {
            feet: '',
            inch: '',
            other: {
                cm: ''
            }
        },
        nataionlity: '',
        display() {
            console.log('name is Arun')
        },
        displaySides() {
            console.log("Square has 4 sides")
        },
        displayName() {
            console.log("Shape is Square")
        }
    }

    // fetch value from this kind of format
    //    use ::::Object.values(object_name)[index_number]::::  // 

    // [
    //     {
    //       name: 'Arun',
    //       age: '',
    //       sex: '',
    //       height: { feet: '', inch: '', other: [Object] },
    //       nataionlity: ''
    //     }
    //   ]


    // console.log(Object.values(person)[0].display())

    // const i = Object.values(person)[0]
    // console.log(i) 
    // console.log(Object.values(i)[0])



    var newPerson = new Object()

    newPerson = {
        name: ''
    }

    console.log()


    // two way of calling function in object
    person1.displayName()
    person1['displayName']()

    person1['salary'] = 21000

    console.log('salary is',person1['salary'])

    console.log(person1)

    // deleting salary item
    delete person1['salary']
    delete person1.age

    console.log(person1)
    // console.log(person)
}