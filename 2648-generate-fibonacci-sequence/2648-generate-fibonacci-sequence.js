/**
 * @return {Generator<number>}
 */
var fibGenerator = function*() {
  let a = 0;
  let b = 1;
  let temp = [0,1]

  yield a
  yield b

  while(true){
    let n = temp.length
    let c = temp[n-2] + temp[n-1]
    temp.push(c)
    yield c
  }
};

/**
 * const gen = fibGenerator();
 * gen.next().value; // 0
 * gen.next().value; // 1
 */