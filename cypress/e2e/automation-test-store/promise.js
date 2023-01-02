let promise = new Promise((resolve, reject) => {
    let a = 1+2 ;
    if( a== 2) {
        resolve( 'Promise Fulfiled')
    } else {
        reject( 'Promise  Not Fulfilled')
    }
})

promise.then((message) => {
    console.log(message +  ', promise Fulfilled!')
}).catch((message) => {
    console.log(message + ', promise  not Fulfilled')
})