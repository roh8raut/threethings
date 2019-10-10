let things= ["work", "exercise", "study"];
let order = []
while(order.length < 3){
    let choice = Math.floor(Math.random() * things.length);
    if(!order.includes(choice)){
        order.push(choice);
    }
}

  const firstStreak = new Streak("first",0);
  const secondStreak = new Streak("second",0);
  const thirdStreak = new Streak("third",0);


const currentTime = new Date();
const currentDate = parseInt("1" + currentTime.getDate().toString().padStart(2, '0') + (currentTime.getMonth() + 1).toString().padStart(2, '0') + currentTime.getFullYear().toString());

const timeStorage = new useLocalStorage('time');
const lastOpened = timeStorage.retrieve;
if(lastOpened.length > 0) {
  if(lastOpened[0] != currentDate) {
      timeStorage.delete(lastOpened[0]);
      timeStorage.add = currentDate;
      reset();
  }
} else {
timeStorage.add = currentDate;
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
        firstStreak.increase();
    }
    else if(el.id == "firstContainer" && firstComplete){
        markAs(first, firstCheck, "incomplete");
        firstComplete = false;
        firstStreak.decrease();
    }
    else if(el.id == "secondContainer" && !secondComplete){
        markAs(second, secondCheck, "complete");
        secondComplete = true;
        secondStreak.increase();
    }
    else if(el.id == "secondContainer" && secondComplete){
        markAs(second, secondCheck, "incomplete");
        secondComplete = false;
        secondStreak.decrease();
    }
    else if(el.id == "thirdContainer" && !thirdComplete){
        markAs(third, thirdCheck, "complete");
        thirdComplete = true;
        thirdStreak.increase();
    }
    else if(el.id == "thirdContainer" && thirdComplete){
        markAs(third, thirdCheck, "incomplete");
        thirdComplete = false;
        thirdStreak.decrease();
    }
}

function markAs(item, check, status) {
  item.className = `${status}`;
  check.className = `fas fa-check ${status}`;
}

function reset() {
  // TODO: Replace this with code that sets all tasks back to not completed (after saving is implemented)
firstStreak.resetDayStop();
secondStreak.resetDayStop();
thirdStreak.resetDayStop();
//location.reload();
}
