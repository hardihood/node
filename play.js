// const person = {
//     name: 'gaurav',
//     age: 31
// }

// var copyPerson = {...person}
// //console.log(copyPerson);


// const printName = ({name}) => {
//     console.log(name);
// }

// printName(person);

// const {age} = person;
// console.log(age);   
//------------------------------------ promise and wait--------------------

const fetchData = () => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(("Done"));
        }, 1500);
    });
    return promise;

};

setTimeout(() => {
    console.log("in timeout")
    fetchData().then(text => {
        console.log(text);
    });
}, 2000);

console.log("hi");
