let img = document.querySelector(".img");
let tests = document.querySelectorAll(".test");

let main = document.querySelector(".main");
let taudio = document.querySelector(".text");
// let sorce = document.querySelectorAll(".text1");
let range = document.querySelector(".timer");
let current = null;
function updateTime() {
    let now = new Date(); // Get current time
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // Format time to always have two digits (e.g., 09:05:03)
    let formattedTime = 
        (hours < 10 ? "0" : "") + hours + ":" + 
        (minutes < 10 ? "0" : "") + minutes + ":" + 
        (seconds < 10 ? "0" : "") + seconds;

    // document.querySelector(".nav").innerText = formattedTime; // Update div
}

// Update time every second
setInterval(updateTime, 1000);

// Call once immediately to avoid 1-second delay
updateTime();
tests.forEach((div) =>{div.addEventListener("click", 
function (){
    taudio.innerText = div.innerText;
    img.innerHTML = "";
    let aexist = main.querySelector("audio");
    if(aexist){
        aexist.remove();
    }
    let audio = div.querySelector("audio");
    let clone = div.cloneNode(true);
    let aclone = audio.cloneNode(true);
    clone.style.height = "250px";
    clone.style.width = "250px";
    clone.style.marginLeft = "10px"
    clone.style.marginRight =
    clone.style.backgroundSize ="cover";
    clone.style.borderRadius = "10px";
    main.style.display = "block";
    current = aclone;
    img.appendChild(clone);
    main.appendChild(aclone);
    aclone.play();
aclone.addEventListener("timeupdate" , () =>{
    range.value = aclone.currentTime;
})
aclone.addEventListener("loadedmetadata" , () =>{
    range.max = aclone.duration;
})
range.addEventListener("input" , () =>{
    aclone.currentTime = range.value;
})
// let ref = 2;
// play.addEventListener("click" , () =>{
//     if(ref === 1){
 
//         ref = 2;
//         current .play();
//         play.innerHTML = "<i class=\"fa-solid fa-pause\"></i>";
//     }
//     else{
//         ref = 1;
//         current.pause();
//         play.innerHTML = "<i class=\"fa-solid fa-play\"></i>";

//     }

// })
let bef = document.querySelector(".bef");
bef.addEventListener("click", () =>{
    aclone.currentTime -= 10;
})
let aft = document.querySelector(".aft");
aft.addEventListener("click", () =>{
    aclone.currentTime += 10;
})
let back_btn = document.querySelector(".back_btn");
back_btn.addEventListener("click" ,()=>{
    main.style.display = "none";
    aclone.pause();
})

});
});
let parent2 = document.querySelectorAll(".parent2");
let parent3 = document.querySelectorAll(".parent3");
let r = 0;

// parent3.forEach((div) =>{
//     div.addEventListener("click" , () =>{
//         parent2.forEach((div) =>{
//             div.click();
//         });
//     },{once: true});
//     });
// parent2.forEach((div) =>{
//     div.addEventListener("click" , () =>{
//         parent3.forEach((div) =>{
//             div.click();
//         });
              
//     });
//     });

// parent3.forEach((div) => {
//     div.addEventListener("click", () => {
//         parent2.forEach((div) => {
//             div.click();
//         });
//     }, { once: true });
// });

parent2.forEach((div) =>{div.addEventListener("click", 
    function (){
        taudio.innerText = div.innerText;
        img.innerHTML = "";
        // aclone.innerHTML = "";
        let aexist = main.querySelector("aclone");
        if(aexist){
            aexist.remove();
        };
        let audio = div.querySelector("audio");
        let clone = div.cloneNode(true);
        let aclone = audio.cloneNode(true);
        aclone.classList.add("aclone");
        clone.style.height = "250px";
        clone.style.width = "250px";
        clone.style.marginLeft = "10px"
        clone.style.marginRight =
        clone.style.backgroundSize ="cover";
        clone.style.borderRadius = "10px";
        main.style.display = "block";
        current = aclone;
        img.appendChild(clone);
        main.appendChild(aclone);
        aclone.play();
    aclone.addEventListener("timeupdate" , () =>{
        range.value = aclone.currentTime;
    })
    aclone.addEventListener("loadedmetadata" , () =>{
        range.max = aclone.duration;
    })
    range.addEventListener("input" , () =>{
        aclone.currentTime = range.value;
    })
    let play = document.querySelector(".play");
    let ref = 2;
  
    let bef = document.querySelector(".bef");
    bef.addEventListener("click", () =>{
        aclone.currentTime -= 10;
    })
    let aft = document.querySelector(".aft");
    aft.addEventListener("click", () =>{
        aclone.currentTime += 10;
    })
    let back_btn = document.querySelector(".back_btn");
    back_btn.addEventListener("click" ,()=>{
        main.style.display = "none";
        aclone.pause();
        
    })
    
    });
    });
    let play = document.querySelector(".play");
    play.addEventListener("mouseenter" , () =>{
        // play.style.boxShadow = "0px 2px 2px 2px red";
    })
    play.addEventListener("mouseleave" , () =>{
        play.style.boxShadow = "none";
    })
    let ref = 2;
play.addEventListener("click" , () =>{
    if(ref === 1){
 
        ref = 2;
        current .play();
        play.innerHTML = "<i class=\"fa-solid fa-pause\"></i>";
    }
    else{
        ref = 1;
        current.pause();
        play.innerHTML = "<i class=\"fa-solid fa-play\"></i>";

    }

})
let mode = document.querySelector(".mod");
let body = document.querySelector("body");
let nav = document.querySelector(".nav");

let ref2 = 0;
mode.addEventListener("click" , () =>{
    if(ref2 === 0){
        body.style.background = "white";
        ref2 = 1;
        mode.innerHTML = "<i class=\"fa-solid fa-moon\"></i>"
        nav.style.background = "black";
    }
    else{
        body.style.background = "black";
        ref2 = 0;
        mode.innerHTML = "<i class=\"fa-solid fa-sun\"></i>"
        // mode.style.fontSize = "20px";

    }
})
