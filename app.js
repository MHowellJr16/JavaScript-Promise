/**
 * PROMISE: Something that gives you VALUE some time in the FUTURE
 */
const statusRef = document.querySelector('.status')
const videoRef = document.querySelector()
console.log(fetch("https://jsonplaceholder.typicode.com/users/1"))
// 2 ways to use FETCH
const emailRef = (document.querySelector('.email'))
console.log(emailRef)
// THEN METHOD: 1st way
/**  fetch("https://jsonplaceholder.typicode.com/users/1").then((response) => (
    response.json().then(data => {
        console.log(data)
        emailRef.innerHTML = data.name
    })
))
*/
// THEN METHOD: 2nd way
/** fetch("https://jsonplaceholder.typicode.com/users/1")
    .then((response) => {
    return response.json()
    })
    .then(data => {
    console.log(data)
    })
*/
// Async/Await Method:
/**async function main() {
const response = await fetch("https://jsonplaceholder.typicode.com/users/1")
const data = await response.json()
console.log(data)
emailRef.innerHTML = data.email
}
main()
*/
//TIME STAMP: 17:55
// Creating NEW PROMISE
function getSubsriptionStatus() { 
    return new Promise((resolve, reject) => {
        resolve("VIP")
    })
}
// METHOD 1: Then
// getSubsriptionStatus().then(response => console.log(response))
// METHOD 2: Async/Await 
/** 
async function main() {
    const status = (await getSubsriptionStatus()) 
    statusRef.innerHTML = status
}
main()
*/
function getVideo(subscriptionStatus) {
    return new Promise((resolve, reject) => {
        if(subscriptionStatus === 'VIP') {
            resolve("show video")
        }
        else if(subscriptionStatus === 'FREE') {
            resolve("show trailer")
        }
        else {
            reject('no video')
        }
    })
}
async function main() {
    const status = (await getSubsriptionStatus()) 
    statusRef.innerHTML = status
    console.log(await getVideo(status))
}
main()