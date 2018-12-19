class BinarySearchTree {
    constructor(key = null, value = null, parent = null) {
        this.key = key;
        this.value = value;
        this.parent = parent;
        this.left = null;
        this.right = null;
    }

    insert(key, value) {
        if (this.key === null) {
            this.key = key;
            this.value = value;
        }
        else if (key < this.key) {
            if (this.left === null) {
                this.left = new BinarySearchTree(key, value, this);
            }
            else {
                this.left.insert(key, value);
            }
        }
        else {
            if (this.right === null) {
                this.right = new BinarySearchTree(key, value, this);
            }
            else {
                this.right.insert(key, value);
            }
        }
    }

    find(key) {
        if (this.key === key) {
            return this.value;
        }

        else if (key < this.key && this.left) {
            return this.left.find(key);
        }
        else if (key > this.key && this.right) {
            return this.right.find(key);
        }
        else {
            throw new Error('Key Error');
        }
    }

    remove(key) {
        if (this.key === key) {
            if (this.left && this.right) {
                const successor = this.right._findMin();
                this.key = successor.key;
                this.value = successor.value;
                successor.remove(successor.key);
            }
            //If the node only has a left child, 
            //then you replace the node with its left child.  
            else if (this.left) {
                this._replaceWith(this.left);
            }
            //And similarly if the node only has a right child 
            //then you replace it with its right child.
            else if (this.right) {
                this._replaceWith(this.right);
            }
            //If the node has no children then
            //simply remove it and any references to it 
            //by calling "this._replaceWith(null)".
            else {
                this._replaceWith(null);
            }
        }
        else if (key < this.key && this.left) {
            this.left.remove(key);
        }
        else if (key > this.key && this.right) {
            this.right.remove(key);
        }
        else {
            throw new Error('Key Error');
        }
    }

    _replaceWith(node) {
        if (this.parent) {
            if (this === this.parent.left) {
                this.parent.left = node;
            }
            else if (this === this.parent.right) {
                this.parent.right = node;
            }

            if (node) {
                node.parent = this.parent;
            }
        }
        else {
            if (node) {
                this.key = node.key;
                this.value = node.value;
                this.left = node.left;
                this.right = node.right;
            }
            else {
                this.key = null;
                this.value = null;
                this.left = null;
                this.right = null;
            }
        }
    }
    _findMin() {
        if (!this.left) {
            return this;
        }
        return this.left._findMin();
    }

    preOrder() {
        console.log(this.key)
        if (this.left) {
            this.left.preOrder()
        }
        if (this.right) {
            this.right.preOrder()
        }
    }

    inOrder() {
        if (this.left) {
            this.left.inOrder()
        }
        console.log(this.key)
        if (this.right) {
            this.right.inOrder()
        }
    }

    postOrder() {
        if (this.left) {
            this.left.postOrder()
        }
        if (this.right) {
            this.right.postOrder()
        }
        console.log(this.key)
    }
}

const BST = new BinarySearchTree();

const arr = [25, 15, 50, 10, 24, 35, 70, 4, 12, 18, 31, 44, 66, 90, 22]

arr.forEach(element => {
    BST.insert(element)
})

// BST.preOrder() //25, 15, 10, 4, 12, 24, 18, 22, 50, 35, 31, 44, 70, 66, 90
// BST.inOrder() //4, 10, 12, 15, 18, 22, 24, 25, 31, 35, 44, 50, 66, 70, 90
BST.postOrder() //4, 12, 10, 22, 18, 24, 15, 31, 44, 35, 66, 90, 70, 50, 25