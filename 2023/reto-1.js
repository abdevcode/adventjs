function findFirstRepeated(gifts) {
    let dictionary = new Set()

    for (let gift of gifts) {
        if ( dictionary.size === dictionary.add(gift).size ) return gift
    }

    return -1
}