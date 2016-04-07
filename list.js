function sleep(num){
	var now = new Date();
	var stop = now.getTime() + num;
	while(true){
		now = new Date();
		if(now.getTime() > stop) return;
	}
}

function List() {
	this.listSize = 0;
	this.pos = 0;
	this.dataStore = [];
	this.append = append;
	this.find = find;
	this.remove = remove;
	this.length = length;
	this.toString = toString;
	this.clear = clear;
	this.front = front;
	this.end = end;
	this.prev = prev;
	this.next = next;
	this.currPos = currPos;
	this.getElement = getElement;
}

function append(element) {
	this.dataStore[this.listSize++] = element;
}

function find(element) {
	for (var i = 0; i < this.listSize; ++i) {
		if (this.dataStore[i] === element) {
			return i;
		}
	}
	return -1;
}

function remove(element) {
	var foundAt = this.find(element);
	if (foundAt > -1) {
		this.dataStore.splice(foundAt, 1);
		--this.listSize;
		return true;
	}
	return false;
}

function length() {
	return this.listSize;
}

function toString() {
	return this.dataStore;
}

function clear() {
	delete this.dataStore;
	this.dataStore.length = 0;
	this.listSize = 0;
	this.pos = 0;
}

function front() {
	this.pos = 0;
}

function end() {
	this.pos = this.listSize - 1;
}

function prev() {
	if (this.pos > 0) {
		--this.pos;
	}
}

function next() {
	if (this.pos < this.listSize - 1) {
		++this.pos;
	}
}

function currPos() {
	return this.pos;
}

function getElement() {
	return this.dataStore[this.pos];
}

var nums = new List();
nums.append(3);
nums.append(6);

nums.front();
nums.next();
nums.next();
nums.next();
nums.next();
nums.next();
console.log(nums.currPos());

//search
// 책이 잘못 되어 있어서 예제 완성 안 됨
for (nums.front(); nums.currPos() < nums.length() - 1; nums.next()) {
	console.log(nums.currPos());
	console.log(nums.length());
	console.log(nums.getElement());
	sleep(500);
}