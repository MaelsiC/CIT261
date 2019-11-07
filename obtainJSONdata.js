//USE API JSON DATA
const baseUrl = 'URL';

// use data from baseUrl
function getJson(url) {
    //either `the URL` OR baseUrl + url
    return fetch(url)
    .then(res => {
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