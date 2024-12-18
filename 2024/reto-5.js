function organizeShoes(shoes) {
    var _a;
    var pairs = [];
    var map = new Map();
    for (var _i = 0, shoes_1 = shoes; _i < shoes_1.length; _i++) {
        var _b = shoes_1[_i], type = _b.type, size = _b.size;
        var count = (_a = map.get(size)) !== null && _a !== void 0 ? _a : 0;
        type === 'R' ? count++ : count--;
        map.set(size, count);
        if (type === 'R' && count <= 0 || type === 'I' && count >= 0)
            pairs.push(size);
    }
    return pairs;
}
var shoes = [
    { type: 'I', size: 38 },
    { type: 'R', size: 38 },
    { type: 'R', size: 42 },
    { type: 'I', size: 41 },
    { type: 'I', size: 42 }
];
console.log(organizeShoes(shoes));
// [38, 42]
var shoes2 = [
    { type: 'I', size: 38 },
    { type: 'R', size: 38 },
    { type: 'I', size: 38 },
    { type: 'I', size: 38 },
    { type: 'R', size: 38 }
];
console.log(organizeShoes(shoes2));
// [38, 38]
var shoes3 = [
    { type: 'I', size: 38 },
    { type: 'R', size: 36 },
    { type: 'R', size: 42 },
    { type: 'I', size: 41 },
    { type: 'I', size: 43 }
];
console.log(organizeShoes(shoes3));
// []
