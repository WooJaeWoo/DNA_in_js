function Stack() {
	this.dataStore = [];
	this.top = 0;
	this.push = push;
	this.pop = pop;
	this.peek = peek;
	this.clear = clear;
	this.length = length;
	this.toString = toString;
}

function push(element) {
	this.dataStore[this.top++] = element;
}

function pop() {
	return this.dataStore[--this.top];
}

function peek() {
	return this.dataStore[this.top - 1];
}

function clear() {
	this.top = 0;
}

function length() {
	return this.top;
}

function toString() {
	return this.dataStore;
}

var s = new Stack();
s.push("hello");
s.push("world");
s.push("why?");
console.log(s.peek());
console.log(s.toString());
s.pop();
s.push("wrong");
console.log(s.toString());
