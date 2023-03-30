var httpRequest = new XMLHttpRequest();

function makeRequest() { 
    httpRequest.onreadystatechange = getResponse; 
    httpRequest.open("GET", "http://localhost:8080/v1/products")
    httpRequest.send(); 
}

function getResponse() {
    if(httpRequest.readyState === 4) {
        if(httpRequest.status === 200) {
            let body = JSON.parse(httpRequest.responseText); 
            console.log(body)
            
            let table = document.getElementById('table');
            body.forEach(element => {
            
                let row = table.insertRow(-1); 
    
                let c1 = row.insertCell(0);
                let c2 = row.insertCell(1); 
                let c3 = row.insertCell(2); 

                c1.innerText = element.product_id;
                c2.innerText = element.stock;
                c3.innerText = element.status; 
            });
 


        }
    }
}