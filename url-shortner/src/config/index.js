const googleApi = 'AIzaSyAjepyTm3acxBfTh55eQdZisBWluQqKKkQ';

const shortenUrl = (url) => new Promise((resolve, reject) =>{
    fetch(`https://www.googleapis.com/urlshortener/v1/url?key=${googleApi}`, {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "longUrl": url
        })
    }).then(response => response.json())
    .then(res => {
        /* eslint-disable */
        res.error && reject(res) || resolve(res.id);
        /* eslint-enable */
    }).catch(err => reject(err))
});

export {
    shortenUrl
}