function decode(message) {
    const trimPar = (text) => {
        return text.substring(1, text.length - 1)
    }

    const reverse = (text) => {
        return text.split('').reverse().join('')
    }

    const peel = (onion) => {
        let parOpen = 0
        let parClose = 0
        let chunk = ''
        let peeledOnion = ''

        for (let char of onion) {
            if (char === '(') parOpen++
            if (char === ')') parClose++

            if (parOpen) {
                chunk += char
            } else {
                peeledOnion += char
            }

            if (parOpen && parOpen === parClose) {
                peeledOnion += reverse(peel(trimPar(chunk)))
                chunk = ''
            }
        }

        return peeledOnion
    }

    const result = peel(message)
    return result
}

const a = decode('hola (odnum)')
console.log(a) // hola mundo

const b = decode('(olleh) (dlrow)!')
console.log(b) // hello world!

const c = decode('sa(u(cla)atn)s')
console.log(c) // santaclaus

const d = decode('sa(u(cl a)atn)s   (olleh) ((((d)(l)(r)ow)))!   hola (odnum)')
console.log(d) // santaclaus