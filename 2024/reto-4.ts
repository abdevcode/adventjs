function createXmasTree(height: number, ornament: string): string {
  let tree: string = ''

  for (let i = 1; i <= height; i++) {
    const spaces: string = '_'.repeat(height - i)
    tree += `${spaces}${ornament.repeat((i * 2) - 1)}${spaces}\n`
  }

  const spaces: string = '_'.repeat(height - 1)
  tree += `${spaces}#${spaces}\n`.repeat(2)

  return tree.trim()
}

const tree = createXmasTree(5, '*')
console.log(tree)
/*
____*____
___***___
__*****__
_*******_
*********
____#____
____#____
*/

const tree2 = createXmasTree(3, '+')
console.log(tree2)
/*
__+__
_+++_
+++++
__#__
__#__
*/

const tree3 = createXmasTree(6, '@')
console.log(tree3)
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