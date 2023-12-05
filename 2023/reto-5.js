function cyberReindeer(road, time) {
    const roadBlock = '.'
    const sledBlock = 'S'
    const openBarrierBlock = '*'
    const closedBarrierBlock = '|'

    const canMove = (position, road) => {
        return road[position] === roadBlock || road[position] === openBarrierBlock
    }

    const openBarriers = (road) => {
        return road
            .join('')
            .replaceAll(closedBarrierBlock, openBarrierBlock)
            .split('')
    }

    let sledPosition = road.indexOf(sledBlock)
    let actRoadBlock = roadBlock
    let roadArr = road.split('')
    let roadStates = []

    roadStates.push(road)

    for (let i = 1; i < time; i++) {
        if (i === 5) {
            roadArr = openBarriers(roadArr)
        }

        if (canMove(sledPosition + 1, roadArr)) {
            roadArr[sledPosition] = actRoadBlock
            actRoadBlock = roadArr[++sledPosition]
            roadArr[sledPosition] = sledBlock
        }

        roadStates.push(roadArr.join(''))
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
