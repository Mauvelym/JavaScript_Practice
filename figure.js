for (var star=1; star<=5; star+= 1) {
  console.log('*'.repeat(star))
}

for (var star=5; star>=1; star-= 1) {
  console.log('*'.repeat(star))
}

for (var star=1; star <16; star *=2) {
  console.log('*'.repeat(star))
}

for (var star=5; star >= 1; star -=1) {
  console.log(' '.repeat(5  -star) + '*'.repeat(star))
}

for (var star = 9; star >=1; star -= 2) {
  console.log(' '.repeat((9 - star)/2) + '*'.repeat(star))
}

for (var star = 1; star <= 5; star += 2) {
  console.log(' '.repeat((5-star)/2) + '*'.repeat(star))
}

for (var star = 3; star >= 1; star -= 2) {
  console.log(' '.repeat((5-star)/2) + '*'.repeat(star)) 
}
