function Node(element) {
    this.element = element;
    this.next = null;
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

function findPrev(item) {
    var currentNode = this.head;
    while (currentNode.next && currentNode.next.element !== item) {
        currentNode = currentNode.next;
    }
    if (!currentNode.next) {
        return null;
    }
    return currentNode;
}

function insert(newElement, item) {
    var newNode = new Node(newElement);
    var current = this.find(item);
    if (current) {
        newNode.next = current.next;
        current.next = newNode;
    } else {
        console.log("[ERR] Insert Fail - No Item(" + item + ")");
        return;
    }
}

function remove(item) {
    var prev = this.findPrev(item);
    if (prev) {
        prev.next = prev.next.next;
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
    
    while(currentNode.next) {
        console.log(currentNode.next.element);
        currentNode = currentNode.next;
    }
}

function LList() {
    this.head = new Node("head");
    this.find = find;
    this.findPrev = findPrev;
    this.insert = insert;
    this.display = display;
    this.remove = remove;
}

var ll = new LList();
ll.insert("a", "head");
ll.insert("b", "a");
ll.insert("c", "b");
ll.insert("d", "c");
ll.display();
ll.remove("a");
ll.remove("b");
ll.remove("c");
ll.remove("d");
ll.display();
// ll.insert("a", "head");

// ll.display();