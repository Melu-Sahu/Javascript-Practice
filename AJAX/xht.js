

// AJAX call  is ascyncrons 



// We can use axios library to fetch data from api.
function myAxios(method, url, body = null) {                 // body is data what we have to send and it should be null by default so that if data is not given, then it should be null by default.

    let xhr = new XMLHttpRequest();

    xhr.open(method, url);             // starting the request with GET method.

    xhr.responseType = 'json';

    xhr.setRequestHeader('Content-Type', 'application/json');   // tells that data we want to upload is json type.

    xhr.onload = () => {
        // console.log(JSON.parse(xhr.response)); 

        if (xhr.status >= 400) {                           // status code 400 or above 400 is used for errors. Below 400 is used for fetching data successfully or something else.
            console.log("Something wents wrong.");
        } else {
            console.log(xhr.response);
        }

    }


    xhr.onerror = () => {
        console.log("Error", xhr.status);
    }

    xhr.send(JSON.stringify(body));             // this method must send in the last. Otherwise other operatiosn will not be performed.
                                            // server wants json data. so that we have to convert it to JSON formate.
}



let url = 'https://jsonplaceholder.typicode.com/users';



// myAxios('Get', url);            // for GET 


myAxios('POST', url, {"Name": "Meluram Sahu", "Job": "Software Engeenear"});

