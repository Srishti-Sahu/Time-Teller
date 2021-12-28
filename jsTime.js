const d = document.querySelector("#demo");
setInterval(() => {
    const date = new Date();
    let time = ` ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
d.innerText=time}, 1000);

