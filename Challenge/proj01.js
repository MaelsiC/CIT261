const JSONDATA = "proj01.json";
let jsonData;
getData(JSONDATA);

function getData(data) {

    fetch(data)
        .then(response => response.json())
        .then(function (data) {
        console.log('Json object from getData function:');
        console.log(data);
        jsonData = data;
        processJSON(data);
    })
        .catch(error => console.log('There was an error: ', error))
} // End of getData function

// processJSON function
function processJSON(data) {
    // console.log(data);

    

}