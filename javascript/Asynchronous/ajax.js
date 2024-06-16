// Ajax / XHR object   GET, POST, PUT/PATCH, DELETE (CRUD) Operation
const xhr = new XMLHttpRequest();
xhr.open('GET', './employee.json');
// readyState has 5 values
// 0 - request is not initiated
// 1 - server connection established
// 2 - request received
// 3 - request processing
// 4 - request finished and response is ready
xhr.onreadystatechange = function(){
    console.log(this.readyState);
    console.log(this.status);
    if(this.readyState === 4 && this.status === 200){ 
        console.log(JSON.parse(this.response));
        console.log(JSON.parse(this.responseText));
        const data = JSON.parse(this.responseText);
        data.forEach(element => {
            const li = document.createElement('li');
            li.innerHTML = `<p><strong>${element.name}</strong> - ${element.city}</p>`
            document.querySelector('#showResponse').appendChild(li);
        });
    }
};
xhr.send();


// fetch API call
fetch('./employee.json').then(response => 
    response.json())
    .then(data => {
        console.log('Data:', data);
    })
    .catch(error => {
        console.error('Fetching data error:', error);
    })