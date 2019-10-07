let things= ["work", "exercise", "study"];
let order = []
while(order.length < 3){ 
    let choice = Math.floor(Math.random() * things.length);
    if(!order.includes(choice)){
        order.push(choice);
        console.log(choice);
    }
}

function getEl(el){
    return document.getElementById(el);
}

let first = getEl("first");
let second = getEl("second");
let third = getEl("third");

first.innerText = things[order[0]];
second.innerText = things[order[1]];
third.innerText = things[order[2]];