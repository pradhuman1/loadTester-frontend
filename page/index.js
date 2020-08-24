
document.querySelector('.test-btn').addEventListener('click',getUrl);

function getUrl(){
    var url = document.querySelector('.url-input').value;
    console.log(url);
    var options={
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(url)
    }
    fetch('http://localhost:4000',options);
}