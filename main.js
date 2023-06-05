
// PROMISE THEN/CATCH

function mySetTimeOut(delay){
        return new Promise((resolve,reject)=>{
            if(typeof delay === 'number'){
                setTimeout(()=>{
                    resolve(delay)
                },delay)
            }else{
                reject("rejected")
      }
    })
}

function createToy(time){
    return new Promise((resolve,reject)=>{
        if(time === 3000){
            resolve("toy has been created")
        }else{
            reject("toy failed")
        }
    })
}

function deliverToys(time){
    return new Promise((resolve,reject)=>{
        if(time === 2000){
            resolve("the toy has been delivered")
        }else{
            reject("deliver failed")
        }
    })
}

function sellToy(time){
    return new Promise((resolve,reject)=>{
        if(time === 1000){
            resolve("the toy has been sold")
        }else{
            reject("toy cant sold")
        }
    })
}



mySetTimeOut(3000).then((res)=> createToy(res))
                .then((res) => console.log(res))
                .catch((er) => console.log(er))


 mySetTimeOut(2000).then((res)=> deliverToys(res))
                .then((res) => console.log(res))
                .catch((er) => console.log(er))              


mySetTimeOut(1000).then((res)=> sellToy(res))
                .then((res) => console.log(res))
                .catch((er) => console.log(er))                 



                
// ase mgonia, didi sisulele davwere :((( ))) imedia davamugameb ;dd

// ASYNC AWAIT      

// async function mySetTimeOut(delay){

//     if(typeof delay === 'number'){
//         setTimeout(()=>{
//             return delay
//         },delay)
//     }else{
//         return 'rejected'
// }
// }

// async function createToy(time){    
//         if(time === 3000){
//             return "toy has been created"
//         }else{
//             return "toy failed"
//         }
//     }


// async function foo(){
//     try {
//         const status = await mySetTimeOut(3000)
//         const result = await createToy(status)
//         console.log(result)
//     } catch (error) {
//         console.log(error) 
//     }
// }
