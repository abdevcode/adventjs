function createXmasTree(height, ornament) {
    var tree = '';
    for (var i = 1; i <= height; i++) {
        var spaces_1 = '_'.repeat(height - i);
        tree += "".concat(spaces_1).concat(ornament.repeat((i * 2) - 1)).concat(spaces_1, "\n");
    }
    var spaces = '_'.repeat(height - 1);
    tree += "".concat(spaces, "#").concat(spaces, "\n").repeat(2);
    return tree.trim();
}
var tree = createXmasTree(5, '*');
console.log(tree);
/*
____*____
___***___
__*****__
_*******_
*********
____#____
____#____
*/
var tree2 = createXmasTree(3, '+');
console.log(tree2);
/*
__+__
_+++_
+++++
__#__
__#__
*/
var tree3 = createXmasTree(6, '@');
console.log(tree3);
/*
_____@_____
____@@@____
___@@@@@___
__@@@@@@@__
_@@@@@@@@@_
@@@@@@@@@@@
_____#_____
_____#_____
*/ 
