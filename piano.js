const keys = document.querySelectorAll(".key");
keys.forEach(key => {
    key.addEventListener("click",()=>{playsound(key)});
});
document.addEventListener("keydown",(e)=> {
    const keyMap = {
        a:"A",s:"B",d:"C",f:"D",g:"E",h:"F",j:"G",w:"Asharp",e:"Csharp",r:"Dsharp",t:"Dsharp",y:"Fsharp",u:"Gsharp"
    };
    const note = keyMap[e.key];
    if (note) {
        const key = document.querySelector(`.key[data-note="${note}"]`);
        playsound(key);
        key.classList.add("active");
        setTimeout(()=>key.classList.remove("active"),150);
    }
    
});

function playsound(key){
    const note = key.dataset.note;
    const audio = new Audio(`tunes/${note}.wav`)
    audio.play();
}