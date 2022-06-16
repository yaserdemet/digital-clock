const container = document.querySelector('#container');
const text = document.querySelector('#text');

function clockJs () {
    const date = new Date();
     const all = date.toLocaleTimeString()
    // const hours = date.getHours();

    // const minutes = date.getMinutes();
    // if(minutes < 10) {
        
    // }
    // const seconds = date.getSeconds();
    // text.innerText  = `${hours}:${minutes}:${seconds}`;
    text.innerText = all;
}
setInterval(clockJs, 1000);