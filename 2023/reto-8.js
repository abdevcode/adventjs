function organizeGifts(gifts) {
  const letters = gifts.split(/[0-9]+/).filter(v => v)
  const occurrences = gifts.split(/[a-z]+/).filter(v => v)

  const boxSize = 10
  const palletSize = 5
  let result = ''

  for (const index in letters) {
    const letter = letters[index]
    const occurrence = occurrences[index]  

    const bags = occurrence % boxSize
    const boxes = parseInt((occurrence / boxSize) % palletSize)
    const pallets = parseInt((occurrence / boxSize) / palletSize)

    for (let index = 0; index < pallets; index++) {
      result += `[${letter}]`
    }

    for (let index = 0; index < boxes; index++) {
      result += `{${letter}}`
    }
     
    if (bags > 0) {
      result += '('
      for (let index = 0; index < bags; index++) {
        result += `${letter}`
      }
      result += ')'
    }
  }

  return result
}

const result1 = organizeGifts(`76a11b1c`)
console.log(result1)
// '[a]{a}{a}(aaaaaa){b}(b)'