function inBox(box: string[]): boolean {
  const gift: number = box.join('').indexOf('*')


  const width: number = box[0].length
  const height: number = box.length

  const h = ~~(gift / width) + 1
  const w = ~~(gift % width) + 1

  return (h > 1 && h < height) && (w > 1 && w < width)
}

inBox([
  "#*#",
  "###",
  "###"
]) // ➞ true

inBox([
  "###",
  "#*#",
  "###"
]) // ➞ true

inBox([
  "####",
  "#* #",
  "#  #",
  "####"
]) // ➞ true

inBox([
  "#####",
  "#   #",
  "#  #*",
  "#####"
]) // ➞ false

inBox([
  "#####",
  "#   #",
  "#   #",
  "#   #",
  "#####"
]) // ➞ false