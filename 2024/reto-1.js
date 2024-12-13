function prepareGifts(gifts) {
    // Remove duplicates and sort gifts in ascending order
    return Array.from(new Set(gifts)).sort(function (a, b) { return a - b; });
}
var gifts1 = [3, 1, 2, 3, 4, 2, 5];
var preparedGifts1 = prepareGifts(gifts1);
console.log(preparedGifts1); // [1, 2, 3, 4, 5]
var gifts2 = [6, 5, 5, 5, 5];
var preparedGifts2 = prepareGifts(gifts2);
console.log(preparedGifts2); // [5, 6]
var gifts3 = [];
var preparedGifts3 = prepareGifts(gifts3);
console.log(preparedGifts3); // []
// No hay regalos, la lista queda vacía
var gifts3 = [23, 4, 4, 5345, 345, 35, 34534, 234, 24, 234, 214, 2341, 12, 23, 324, 4, 5, 4];
var preparedGifts3 = prepareGifts(gifts3);
console.log(preparedGifts3); // []
