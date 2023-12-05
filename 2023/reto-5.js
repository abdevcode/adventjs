function cyberReindeer(road, time) {
    const roadBlock = '.'
    const sledBlock = 'S'
    const openBarrierBlock = '*'
    const closedBarrierBlock = '|'

    const canMove = (index, road) => {
        return road.at(index) === roadBlock || road.at(index) === openBarrierBlock
    }

    const openBarriers = (road) => {
        return road.replaceAll(closedBarrierBlock, openBarrierBlock)
    }

    const replaceAt = (text, index, char) => {
        return text.substring(0, index) + char + text.substring(index + char.length);
    }

    let sledPosition = road.indexOf(sledBlock)
    let actRoadBlock = roadBlock
    let roadStates = []

    roadStates.push(road)

    for (let i = 1; i < time; i++) {
        if (i === 5) {
            road = openBarriers(road)
        }

        if (canMove(sledPosition + 1, road)) {
            road = replaceAt(road, sledPosition, actRoadBlock)
            actRoadBlock = road.at(++sledPosition)
            road = replaceAt(road, sledPosition, sledBlock)
        }

        roadStates.push(road)
    }

    return roadStates
}

const road = 'S..|...|..'
const time = 10 // unidades de tiempo
const result = cyberReindeer(road, time)
console.log(result)
/* -> result:
[
  'S..|...|..', // estado inicial
  '.S.|...|..', // avanza el trineo la carretera
  '..S|...|..', // avanza el trineo la carretera
  '..S|...|..', // el trineo para en la barrera
  '..S|...|..', // el trineo para en la barrera
  '...S...*..', // se abre la barrera, el trineo avanza
  '...*S..*..', // avanza el trineo la carretera
  '...*.S.*..', // avanza el trineo la carretera
  '...*..S*..', // avanza el trineo la carretera
  '...*...S..', // avanza por la barrera abierta
]
*/
