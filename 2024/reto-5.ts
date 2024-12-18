type Shoe = {
  type: 'I' | 'R'
  size: number
}

function organizeShoes(shoes: Shoe[]): number[] {
  const pairs: number[] = []
  const counter: Map<number, number> = new Map()

  for (const { type, size } of shoes) {
    const position: number = 1 - (+('R' === type) * 2)
    const count: number = (counter.get(size) ?? 0) - position
    counter.set(size, count)

    if (type === 'R' && count <= 0 || type === 'I' && count >= 0) {
      pairs.push(size)
    }
  }

  return pairs
}

const shoes: Shoe[] = [
  { type: 'I', size: 38 },
  { type: 'R', size: 38 },
  { type: 'R', size: 42 },
  { type: 'I', size: 41 },
  { type: 'I', size: 42 }
]

console.log(organizeShoes(shoes))
// [38, 42]

const shoes2: Shoe[] = [
  { type: 'I', size: 38 },
  { type: 'R', size: 38 },
  { type: 'I', size: 38 },
  { type: 'I', size: 38 },
  { type: 'R', size: 38 }
]

console.log(organizeShoes(shoes2))
// [38, 38]

const shoes3: Shoe[] = [
  { type: 'I', size: 38 },
  { type: 'R', size: 36 },
  { type: 'R', size: 42 },
  { type: 'I', size: 41 },
  { type: 'I', size: 43 }
]

console.log(organizeShoes(shoes3))
// []