
// async / await keywords used with fetch()
console.log('======================== Response with async and await keyword ==============================');
async function getUser1(){
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json();
    console.log('async and await', data);
}
getUser1();


function getUser2(){
    fetch('https://jsonplaceholder.typicode.com/users').then(response => 
        response.json())
        .then(data => {
            console.log('========================== Response with fetch.then ==============================');
            console.log('fetch.then', data);
        })
        .catch(error => {
            console.error('Fetching data error:', error);
        })
}
getUser2();

