function drawGift(size, symbol) {
    const BORDER = '#'
    const SPACE = ' '
    const EOL = "\n"

    let gift3D = []

    if (size === 1) return BORDER + EOL

    for (let i = 0; i < size; i++) {
        if (i % (size - 1) === 0) {
            let line = SPACE.repeat(size - i - 1) +
                              BORDER.repeat(size)

            if ( i - 1 >= 0 ) {
                line += symbol.repeat(i - 1) + BORDER
            }

            gift3D.push(line)
        } else {
            let line = SPACE.repeat(size - i - 1) +
                              BORDER + symbol.repeat(size - 2) +
                              BORDER

            if ( i - 1 >= 0 ) {
                line += symbol.repeat(i - 1)
            }

            line += BORDER

            gift3D.push(line)
        }
    }

    // Jump last position
    for (let i = (gift3D.length - 1) -1; i >= 0; i--) {
        const row = gift3D[i]
        gift3D.push(row.trim())
    }

    return gift3D.join(EOL) + EOL
}

console.log(drawGift(10, '-'))

/*
   ####
  #++##
 #++#+#
####++#
#++#+#
#++##
####
*/

// console.log(drawGift(5, '*'))
/*
    #####
   #***##
  #***#*#
 #***#**#
#####***#
#***#**#
#***#*#
#***##
#####
*/

// console.log(drawGift(1, '^'))
/*
#
*/







