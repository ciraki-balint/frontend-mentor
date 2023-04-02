class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
      this.size = 0;
    }
  
    add(data) {
      const node = new Node(data);
  
      if (!this.head) {
        this.head = node;
      } else {
        let current = this.head;
        while (current.next) {
          current = current.next;
        }
        current.next = node;
      }
  
      this.size++;
    }
  
    remove(data) {
      let current = this.head;
      let prev = null;
  
      while (current) {
        if (current.data === data) {
          if (!prev) {
            this.head = current.next;
          } else {
            prev.next = current.next;
          }
  
          this.size--;
          return current.data;
        }
  
        prev = current;
        current = current.next;
      }
  
      return null;
    }
  
    getSize() {
      return this.size;
    }
  
    print() {
      let current = this.head;
      let str = "";
      while (current) {
        str += current.data + " ";
        current = current.next;
      }
      console.log(str);
    }
  }
  
  const linkedList = new LinkedList();
  linkedList.add(1);
  linkedList.add(2);
  linkedList.add(3);
  linkedList.print(); // output: "1 2 3"
  
  linkedList.remove(2);
  linkedList.print(); // output: "1 3"
  