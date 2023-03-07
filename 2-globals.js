const amount = 9;

if(amount < 10){
    console.log('small number');
} else {
    console.log('large number');
}

// __dirname - path to current directory
// __filename - file name
// require - funtion to use modules
// module - info about current module
// process - info about env where the program is being executed

console.log(__dirname)

setInterval(() => {
    console.log('hello world')
}, 1000)