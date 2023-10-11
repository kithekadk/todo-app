let names = ["Emmanuel", "Sharon", "Crispin", "Mercy", "Caleb", ["Sylvia", "Michael"]];

let names2 = ["Jennifer", "Robin", "Joshua", "Annan"]

// console.log(names2.indexOf("Annan"));

let combined_names = names.concat(names2)

// names.fill("Daniel")

// names = names.slice(1, -1)
console.log(combined_names);
let filtered_names = combined_names.findIndex(el=>{

    if(el[0] == "J"){
        return el
    }
    
})

console.log(filtered_names)

// let mapped_names = combined_names.map((el,i)=>{
//     console.log(el , i);
// })

// console.log(names.flat());

// console.log(names.length)


let namesform = document.querySelector('.names-form');
let username = document.querySelector('.txtname')
let deletebtn = document.querySelector('.btndelete')


deletebtn.addEventListener('click', ()=>{
    console.log(names);

    // names.pop()

    // names.shift()

    names.splice(1, 3, "Robin", "Jennifer")

    console.log(names);
})

namesform.addEventListener('submit', (e)=>{
    e.preventDefault()

    console.log(names);

    // names.push(username.value)
    // names.unshift(username.value)


    username.value ="";

    console.log(names);
})




















let car = {
    brand: "Audi",
    color: "Black",
    manufacture: 2022
}

const prop = "Age"

let person = {
    name: "Sylvia",
    nationality: "Kenyan",
    residence: "Nyeri",
    [prop] : 23
}

let person2 = new Object();

person2.name = "Nelson"
person2.age = 50
person2.height = 5.6

// console.log(person.residence);
// console.log(car['brand']);

car.color = "White"
car.manufacture = 2023

car.fuel = "Petrol"
car.isNew = true



delete car.manufacture

// console.log(car);

// console.log(person.age == undefined);

// console.log(person);
// console.log(person2);

const combined = Object.assign({}, person, person2)

// console.log(person);