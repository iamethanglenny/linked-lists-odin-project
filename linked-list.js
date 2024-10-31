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


    }   
    
}

