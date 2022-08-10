const adviceId = document.querySelector(".advice-num");
const advice = document.querySelector(".para");
const btn = document.querySelector(".btn");
const img = document.querySelector(".img");


function callApi(){
    let myReq = new XMLHttpRequest();
    myReq.open("GET","https://api.adviceslip.com/advice");
    myReq.send();
    myReq.onreadystatechange = function(){
        if(this.readyState === 4 && this.status === 200){
            let jsData = JSON.parse(this.responseText);
            adviceId.innerHTML = `#${jsData.slip.id}`
            advice.innerHTML = `${jsData.slip.advice}`
        }
    }
}
btn.addEventListener("click",()=>{
    callApi();
    img.classList.add("transition");
    setTimeout(()=>{
        img.classList.remove("transition");
    },"400");
});

