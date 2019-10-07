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

let firstCheck = getEl("firstCheck");
let secondCheck = getEl("secondCheck");
let thirdCheck = getEl("thirdCheck");

first.innerText = things[order[0]];
first.dataset.objective = things[order[0]];
second.innerText = things[order[1]];
second.dataset.objective = things[order[1]];
third.innerText = things[order[2]];
third.dataset.objective = things[order[2]];

let firstComplete= false, secondComplete= false, thirdComplete = false;

function toggleComplete(el){
    if(el.id == "firstContainer" && !firstComplete){
        //user clicked first container, change the check to green and the text to strike-through
        markAs(first, firstCheck, "complete");
        firstComplete = true;
    }
    else if(el.id == "firstContainer" && firstComplete){
        markAs(first, firstCheck, "incomplete");
        firstComplete = false;
    }
    else if(el.id == "secondContainer" && !secondComplete){
        markAs(second, secondCheck, "complete");
        secondComplete = true;
    }
    else if(el.id == "secondContainer" && secondComplete){
        markAs(second, secondCheck, "incomplete");
        secondComplete = false;
    }
    else if(el.id == "thirdContainer" && !thirdComplete){
        markAs(third, thirdCheck, "complete");
        thirdComplete = true;
    }
    else if(el.id == "thirdContainer" && thirdComplete){
        markAs(third, thirdCheck, "incomplete");
        thirdComplete = false;
    }
}

function markAs(item, check, status) {
  item.className = `${status}`;
  check.className = `fas fa-check ${status}`;
}
