function maxDistance(movements) {
    let right = 0
    let left = 0
    let wildCard = 0

    for (const movement of movements) {
        if (movement === '>') ++right
        else if (movement === '<') ++left
        else ++wildCard
    }

    return right > left ? right + wildCard - left : left + wildCard - right
}

const movements = '>>*<'
const result = maxDistance(movements)
console.log(result) // -> 2

const movements2 = '<<<>'
const result2 = maxDistance(movements2)
console.log(result2) // -> 2

const movements3 = '>***>'
const result3 = maxDistance(movements3)
console.log(result3) // -> 5