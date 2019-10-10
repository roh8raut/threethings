class Streak {
  //create a new Streak with a name and a start start (0 by default)
  constructor(name,start = 0) {
    this.name = name;
    this.store = new useLocalStorage(name);
    this.start = start;
    if(window.localStorage[name] == undefined) {
      this.store.add = this.start;
    }
  }
  //get the current value the streak is at
  get value() {
    return this.store.retrieve;

  }
  //increase the current streak by one
  increase() {
    let currentValue = this.store.retrieve[0];
    if(this.store.retrieve[1] != "setToday") {
      this.store.delete(currentValue);
      currentValue++;
      this.store.add = currentValue;
      this.store.add = "setToday";
    }
  }
  //decrease the current streak by one
  decrease() {
    let currentValue = this.store.retrieve[0];
    this.store.delete(currentValue);
    currentValue--;
    this.store.add = currentValue;
    this.store.delete("setToday");
  }
  //set the streak back to the start start (default 0)
  fullReset() {
    let currentValue = this.store.retrieve[0];
    this.store.delete(currentValue);
    this.store.add = this.start;
    this.store.delete("setToday");
  }
  //enable the streak to be set again (e.g. on the next day);
  resetDayStop() {
    this.store.delete("setToday");
  }


}
