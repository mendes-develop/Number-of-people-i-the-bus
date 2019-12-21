var number = function(busStops){
  let number = 0
  busStops.forEach(stop => number += stop[0] - stop[1])
  return number
}

number([[10,0],[3,5],[5,8]])