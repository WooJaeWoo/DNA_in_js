function Node(element) {
    this.element = element;
    this.next = null;
}

function insert(item) {
	var newNode = new Node(item);
	if (!this.tail) {
		this.tail = newNode;
		newNode.next = newNode;
	} else {
		newNode.next = this.tail.next;
		this.tail.next = newNode;
	}
	this.length++;
}

function insertFront() {
	
}

function CLList() {
	this.tail;
	this.before;
	this.length = 0;
	this.insert = insert;
	this.insertFront = insertFront;
}

var cl = new CLList();
cl.insert("AAA");
cl.insert("BBB");
console.log(cl);
