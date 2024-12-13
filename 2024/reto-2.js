var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function createFrame(names) {
    var maxLength = Math.max.apply(Math, __spreadArray(__spreadArray([], names.map(function (name) { return name.length; }), false), [0], false));
    var border = '*'.repeat(maxLength + 4);
    return maxLength ? __spreadArray(__spreadArray([
        border
    ], names.map(function (name) { return "* ".concat(name).concat(' '.repeat(maxLength - name.length), " *"); }), true), [
        border
    ], false).join('\n') : '*';
}
console.log(createFrame([]), '\n');
// Resultado esperado:
// *
console.log(createFrame(['midu', 'madeval', 'educalvolpz']), '\n');
// Resultado esperado:
// ***************
// * midu        *
// * madeval     *
// * educalvolpz *
// ***************
console.log(createFrame(['midu']), '\n');
// Resultado esperado:
// ********
// * midu *
// ********
console.log(createFrame(['a', 'bb', 'ccc']), '\n');
// Resultado esperado:
// *******
// * a   *
// * bb  *
// * ccc *
// *******
console.log(createFrame(['a', 'bb', 'ccc', 'dddd']), '\n');
// Resultado esperado:
// ********
// * a    *
// * bb   *
// * ccc  *
// * dddd *
// ********
