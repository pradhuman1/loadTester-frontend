
document.querySelector('.test-btn').addEventListener('click', getUrl);

async function getUrl() {
    var url = document.querySelector('.url-input').value;
    console.log(url);
    var data = { "testUrl": url }
    var options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }
    try {
        const res = await fetch('http://localhost:4000/url', options);
        const data = await res.json();
        console.log(data);
    } catch (error) {
        console.log(error)
    }

}