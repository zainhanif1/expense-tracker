let promise = new Promise(function (resolve, reject){
    setTimeout(function () {
        console.log("new Promise")
        resolve()
    }, 1000)
}) 
promise.then(function(){
    console.log("sucessfull")
})

promise.catch(function() {
    console.log("unsucessful")
})

async fucntion