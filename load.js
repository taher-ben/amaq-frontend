window.addEventListener('load',()=>{
    const load = document.querySelector(".load");
    console.log(load);
    load.classList.add("load-hedden");

    load.addEventListener("transitioend",() => {
        document.body.removeChild('load');
    })
})