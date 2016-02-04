/*

        1
      /   \
     2     3
    /
   5

Output: ['1->2->5','1->3'"]

 */

//Setup : Object
var TreeNode = function (val) {
    this.val = val;
    this.left = this.right = null;
};

//Setup : Test Tree
var root = new TreeNode(1);
root.left = new TreeNode(2);
root.left.left = new TreeNode(5);
root.right = new TreeNode(3);

//Implementation : 1

var paths = [];
var helper = function(root, path)
{
    if(!root){
        return;
    }

    path = path ? (path += '->' + root.val) : root.val;

    if(!root.left && !root.right){
        paths.push(path);
        return;
    }

    helper(root.left, path);
    helper(root.right, path);
};

helper(root, '');
console.log(paths);

/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    var paths = [];
    var helper = function(root, path)
    {
        if(!root){
            return;
        }

        path = path ? (path += '->' + root.val) : root.val.toString();

        if(!root.left && !root.right){
            paths.push(path);
            return;
        }

        helper(root.left, path);
        helper(root.right, path);
    };

    helper(root);
    return paths;
};