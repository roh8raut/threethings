class useLocalStorage {

  constructor(name) {
	this.name = name;
	console.log("this.name>.>", this.name)
  }

  checkAvailability() {
    if (!"localStorage" in window)
      alert("localStorage not available");
  }

	get retrieve() {
		return JSON.parse(window.localStorage.getItem(this.name)) || []
	}

	set add(val) {
		if (!this.exists(val)) {
			var tmp = this.retrieve;
			console.log("tmp", tmp)
			tmp.push(val);
			window.localStorage.setItem(this.name, JSON.stringify(tmp));
      return true;
		} else return false;
	}

	delete(str) {
		if (this.exists(str)) {
			var tmp = this.retrieve.filter((value)=>value != str);
			window.localStorage.setItem(this.name, JSON.stringify(tmp));
      return true;
		} else return false;
	}

	exists(str) {
		if (this.retrieve.includes(str)) return true;
		else return false;
	}

}
