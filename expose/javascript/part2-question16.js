let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2
}


function startsWithR(key){
    return key.startsWith('r')
}

for ( let key in statistics ) {
  if(startsWithR(key)){
    console.log(`${key}: ${statistics[key]}`);
  }
}
