//USE LOCAL JSON DATA
// use of fetch
const data = fetch('data.json');
// then method call. Only gets call in the result
data.then(response => {
    //get a response from json file
        return response.json();
    console.log('response', response)
    //get data from json file
}).then(stuff => {
    console.log(stuff);
});
console.log(data);

function longProcess() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(1) {
            resolve(42);
        } else reject('error');
        }, 200);
    })
}
longProcess().then((results) => {
    console.log('total:', 10 + results);
});



//USE API JSON DATA
const baseUrl = 'https://pokeapi.co/api/v2/';

// use data from baseUrl
function getJson(url) {
    //either `https://pokeapi.co/api/v2/${url}` OR baseUrl + url
    return fetch(`https://pokeapi.co/api/v2/${url}`).then(res => {
        if(res.ok) {
            return res.json();
        } else {
            // console.log before the throw so that it is shown
            console.log('error!');
            throw new Error('response not ok');
        }
    }).catch(err => {
        console.log('getJSON', err);
    });
}

// get element frmo HTML file
const myList = document.getElementById('list');
getJson('type/3').then(data => {
    console.log(data);
    const newArray = data.pokemon.map(item => {
        return `<li>${item.pokemon.name}</li>`;
    }).join('');
    console.log(newArray);
    //Display data from API on screen for user
    myList.innerHTML = newArray;
});