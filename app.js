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
async function main() {
const response = await fetch("https://jsonplaceholder.typicode.com/users/1")
const data = await response.json()
console.log(data)
emailRef.innerHTML = data.email
}
main()
//TIME STAMP: 17:55