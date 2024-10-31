const Node = (value = null) => ({
    value,
    nextNode: null,
  });


const LinkedList = () => {
    let head = null;

    return {
        append: function (value) {
            const newNode = Node(value);
            if (head === null) {
                head = newNode;
            } else {
                let current = head;
                while (current.nextNode !== null) {
                    current = current.nextNode;
                }
                current.nextNode = newNode;
            }
        },

        prepend: function (value) {
            const newNode = Node(value);
            if (head === null) {
                head = newNode;
            } else {
                newNode.nextNode = head;
                head = newNode;
            }
        }, 

        size: function () {
            let count = 0;
            let current = head;
            while (current != null) {
                count++;
                current = current.nextNode;
            } 
            return count;
        },

        head: function () {
            return head;
        },

        tail: function () {
            if (head === null) return null;

            let current = head;
            while (current.nextNode !== null) {
                current = current.nextNode;
            }
            return current;
        },

        at: function (index) {
            if (index < 0) return null;

            let current = head;
            let currentIndex = 0;

            while (current !== null) {
                if (currentIndex === index) {
                    return current;
                }
                current = current.nextNode;
                currentIndex++;
            }
            return null;
        },

        pop: function () {
            if (head === null) return null;

            if (head.nextNode === null) {
                const nodeToRemove = head;
                head = null;
                return nodeToRemove;
            }

            let current = head;
            while (current.nextNode.nextNode !== null) {
                current = current.nextNode;
            }

            const nodeToRemove = current.nextNode;
            current.nextNode = null;
            return nodeToRemove;
        },

        contains: function (value) {
            let current = head;
            while (current !== null) {
                if (current.value === value) {
                    return true;
                }
                current = current.nextNode;
            }
            return false;
        },

        find: function (value) {
            let current = head;
            let index = 0;

            while (current !== null) {
                if (current.value === value) {
                    return index;
                }
                current = current.nextNode;
                index++;
            }
            return null;
        },

        toString: function () {
            let current = head;
            let result = '';

            while (current !== null) {
                result += `(${current.value}) -> `;
                current = current.nextNode;
            }

            result += 'null';
            return result;
        },

        insertAt: function (value, index) {
            const newNode = Node(value);

            if (index < 0) return;
            if (index === 0) {
                this.prepend(value);
                return;
            }

            let current = head;
            let currentIndex = 0;

            while (current !== null && currentIndex < index - 1) {
                current = current.nextNode;
                currentIndex++;
            }

            newNode.nextNode = current.nextNode;
            current.nextNode = newNode;
        },

        removeAt: function (index) {
            if (index < 0 || head === null) return;

            if (index === 0) {
                head = head.nextNode;
                return;
            }

            let current = head;
            let currentIndex = 0;

            while (current !== null && currentIndex < index -1) {
                current = current.nextNode;
                currentIndex++;
            }
            if (current === null || current.nextNode === null) return;

            current.nextNode = current.nextNode.nextNode;
        },
    };
    
};

