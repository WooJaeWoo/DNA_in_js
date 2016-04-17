function Node(element) {
    this.element = element;
    this.next = null;
    this.prev = null;
}

function find(item) {
    var currentNode = this.head;
    while (currentNode.element !== item) {
        currentNode = currentNode.next;
        if (!currentNode) {
            break;
        }
    }
    return currentNode;
}

function findLast() {
    var currentNode = this.head;
    while (currentNode.next) {
        currentNode = currentNode.next;
    }
    return currentNode;
}

function insert(newElement, item) {
    var newNode = new Node(newElement);
    var current = this.find(item);
    if (current) {
        newNode.prev = current;
        newNode.next = current.next;
        current.next = newNode;
    } else {
        console.log("[ERR] Insert Fail - No Item(" + item + ")");
        return;
    }
}

function remove(item) {
    var target = this.find(item);
    if (target) {
        if (target.next) {
            target.next.prev = target.prev;
        }
        target.prev.next = target.next;
        target.next = null;
        target.prev = null;
    } else {
        console.log("[ERR] Remove Fail - No Item(" + item + ")");
        return;
    }
}

function display() {
    var currentNode = this.head;
    if (!currentNode.next) {
        console.log("[ERR] Display Fail - No Node");
        return;
    }
    
    while (currentNode.next) {
        console.log(currentNode.next.element);
        currentNode = currentNode.next;
    }
}

function displayReverse() {
    var currentNode = this.findLast();
    if (!currentNode.prev) {
        console.log("[ERR] Display Fail - No Node");
        return;
    }
    
    while (currentNode.prev) {
        console.log(currentNode.element);
        currentNode = currentNode.prev;
    }
}

function DLList() {
    this.head = new Node("head");
    this.find = find;
    this.findLast = findLast;
    this.insert = insert;
    this.display = display;
    this.displayReverse = displayReverse;
    this.remove = remove;
}

var dll = new DLList();
dll.insert("a", "head");
dll.insert("b", "a");
dll.insert("c", "b");
dll.insert("d", "c");
dll.remove("b");
dll.display();
dll.displayReverse();