const { readFile, writeFile, write} = require('fs') 

console.log('start')
readFile('./content/subfolder/first.txt','utf8', (err, result) => {
    if (err) {
        console.log(err)
        return
    }
    const first = result
    readFile('./content/subfolder/second.txt', 'utf8', (err,result) => {
        if (err)  {
            console.log(err)
            return
        }
        const second = result
        writeFile(
            './content/subfolder/result-async.txt',
            `Here is the result: ${first}, ${second}`,
            (err, result) => {
                if (err) {
                    console.log(err)
                    return
                }
                console.log('done with this task')
            }

        )
    
    }
    )
})
console.log('starting next task')
// this way when user 1 for example and want to get functionality
// offload that task and the application can serve the other users