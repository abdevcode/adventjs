function createFrame(names: string[]): string {
  const maxLength = Math.max(...names.map(name => name.length), 0)
  const border = '*'.repeat(maxLength + 4)

  return [
    border,
    ...names.map(name => `* ${name}${' '.repeat(maxLength - name.length)} *`),
    border
  ].join('\n')
}

console.log(createFrame([]), '\n')
// Resultado esperado:
// *

console.log(createFrame(['midu', 'madeval', 'educalvolpz']), '\n')

// Resultado esperado:
// ***************
// * midu        *
// * madeval     *
// * educalvolpz *
// ***************

console.log(createFrame(['midu']), '\n')

// Resultado esperado:
// ********
// * midu *
// ********

console.log(createFrame(['a', 'bb', 'ccc']), '\n')

// Resultado esperado:
// *******
// * a   *
// * bb  *
// * ccc *
// *******

console.log(createFrame(['a', 'bb', 'ccc', 'dddd']), '\n')

// Resultado esperado:
// ********
// * a    *
// * bb   *
// * ccc  *
// * dddd *
// ********