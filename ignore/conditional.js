let name = "Caleb";


// if (name == "Daniel"){
//     console.log("You are genious");
// }else if(name == "Clare"){
//     console.log("Yes, that's my name");
// }else if(name == "Caleb"){
//     console.log("Perfect guess");
// }else{
//     console.log("Go sleep");
// }


// let isMale =  "Yes I am a man"

// let value = isMale ==  "Yes i am a man" ? true : false

let team = "ManU"
// let value = (team  == "Arsenal") ? "Think, again" : (team == "Chelsea") ? "Buy a bike" : (team == "ManCity") ? "You are a legend" : "Get a life"

// console.log(value);
team = "Newcastle"

if(team == "Arsenal"){
    console.log("Think, agani")
}else if(team == "Chelsea"){
    console.log("Buy a bike");
}else if(team == "ManCity"){
    console.log("You are a legend");
}else{
    console.log("Get a life");
}

let hour = 10

let minute = 45

// if (hour > 8 && minute == 45){
//     console.log(`The time is ${hour}:45`);
// }else{
//     console.log("Something else");
// }

let isMale = true;

// console.log(!isMale);

let middle_name;
let last_name = "Baraka";

// console.log(middle_name ?? last_name ?? "Kellah");

let names = ["Emmanuel", "Sharon", "Crispin", "Mercy", "Caleb", "Sylvia", "Michael"];

let array = []
names.map((el , index)=>{

    // console.log(el , i);
    if(el == "Caleb"){
        let newarray = names.splice(index, 1)
        array = names;
        return names
    }
})

console.log(array);