// local
const secret = 'Super SECRET'
// share
const john = 'john'
const peter = 'peter'

//console.log(module)
//exports object is empty like this


module.exports = {john, peter}
// now john and peter are shared
console.log(module)