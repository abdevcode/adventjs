function inBox(box) {
    var gift = box.join('').indexOf('*');
    var width = box[0].length;
    var height = box.length;
    var h = ~~(gift / width) + 1;
    var w = ~~(gift % width) + 1;
    return (h > 1 && h < height) && (w > 1 && w < width);
}
inBox([
    "#*#",
    "###",
    "###"
]); // ➞ true
inBox([
    "###",
    "#*#",
    "###"
]); // ➞ true
inBox([
    "####",
    "#* #",
    "#  #",
    "####"
]); // ➞ true
inBox([
    "#####",
    "#   #",
    "#  #*",
    "#####"
]); // ➞ false
inBox([
    "#####",
    "#   #",
    "#   #",
    "#   #",
    "#####"
]); // ➞ false
