function organizeInventory(inventory) {
    return inventory.reduce(function (newInventory, _a) {
        var _b, _c;
        var name = _a.name, quantity = _a.quantity, category = _a.category;
        (_b = newInventory[category]) !== null && _b !== void 0 ? _b : (newInventory[category] = {});
        newInventory[category][name] = ((_c = newInventory[category][name]) !== null && _c !== void 0 ? _c : 0) + quantity;
        return newInventory;
    }, {});
}
var inventory = [
    { name: 'doll', quantity: 5, category: 'toys' },
    { name: 'car', quantity: 3, category: 'toys' },
    { name: 'ball', quantity: 2, category: 'sports' },
    { name: 'car', quantity: 2, category: 'toys' },
    { name: 'racket', quantity: 4, category: 'sports' }
];
console.log(organizeInventory(inventory));
// Resultado esperado:
// {
//   toys: {
//     doll: 5,
//     car: 5
//   },
//   sports: {
//     ball: 2,
//     racket: 4
//   }
var inventory2 = [
    { name: 'book', quantity: 10, category: 'education' },
    { name: 'book', quantity: 5, category: 'education' },
    { name: 'paint', quantity: 3, category: 'art' }
];
console.log(organizeInventory(inventory2));
// Resultado esperado:
// {
//   education: {
//     book: 15
//   },
//   art: {
//     paint: 3
//   }
// }
