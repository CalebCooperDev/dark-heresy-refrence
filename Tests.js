/**
 * used to test the random number generator rollEm() to make sure the numbers returned are reasonably random.
 */
function testRand() {
    let randArray = [];
    for (let i = 0; i < 1000; i++) {
        randArray[i] = rollEm(1, 10)
    }
    console.log(randArray)
}