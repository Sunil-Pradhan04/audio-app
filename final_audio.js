let img = document.querySelector(".img");
let tests = document.querySelectorAll(".test");

let main = document.querySelector(".main");
let taudio = document.querySelector(".text");
let range = document.querySelector(".timer");
let current = null;
function play(div) {
    
    taudio.innerText = div.innerText;
    img.innerHTML = "";
    let aexist = main.querySelector("audio");
    if (aexist) {
        aexist.remove();
    }
    let audio = div.querySelector("audio");
    let clone = div.cloneNode(true);
    let aclone = audio.cloneNode(true);
    refer = div.querySelector(".audio_logo");

    // Styling for clone
    clone.style.height = "250px";
    clone.style.width = "250px";
    clone.style.marginLeft = "10px";
    clone.style.marginRight = "10px"; // Fixed missing value
    clone.style.backgroundSize = "cover";
    clone.style.borderRadius = "10px";
    clone.style.innerText = "";

    // Display main container and set current playing audio
    main.style.display = "block";
    current = aclone;

    img.appendChild(clone);
    main.appendChild(aclone);
    aclone.play();
    play1.innerHTML = "<i class=\"fa-solid fa-pause\"></i>";
    // Update range slider with audio progress
    aclone.addEventListener("timeupdate", () => {
        range.value = aclone.currentTime;
    });

    aclone.addEventListener("loadedmetadata", () => {
        range.max = aclone.duration;
    });

    range.addEventListener("input", () => {
        aclone.currentTime = range.value;
    });

    // Buttons for seeking and stopping
    let bef = document.querySelector(".bef");
    bef.addEventListener("click", () => {
        aclone.currentTime -= 10;
    });

    let aft = document.querySelector(".aft");
    aft.addEventListener("click", () => {
        aclone.currentTime += 10;
    });

    let back_btn = document.querySelector(".back_btn");
    back_btn.addEventListener("click", () => {
        main.style.display = "none";
        aclone.pause();
    });
}

// event listener
tests.forEach((div) => {
    div.addEventListener("click", () => play(div));
});



// play pause button
let play1 = document.querySelector(".play");
let ref = 2;
play1.addEventListener("click" , () =>{
    if(ref === 1){
 
        ref = 2;
        current .play();
        play1.innerHTML = "<i class=\"fa-solid fa-pause\"></i>";
    }
    else{
        ref = 1;
        current.pause();
        play1.innerHTML = "<i class=\"fa-solid fa-play\"></i>";

    }

})
let three = document.querySelector(".three");
let catagory = document.querySelector(".catagory1");
let cross = document.querySelector(".cross");

three.addEventListener("click" , () =>{
    catagory.style.display = "block";
})
cross.addEventListener("click" , () =>{
    catagory.style.display = "none";
})
let text = "";
let temp = "";
function play_next(div) {
    text.innerHTML = "";
    text.innerText = temp;
    taudio.innerText = div.innerText;
    img.innerHTML = "";
    let aexist = main.querySelector("audio");
    if (aexist) {
        aexist.remove();
    }
     text = div.querySelector(".song_text");
    temp = text.innerText;
    text.innerText = "";
    let audio = div.querySelector("audio");
    let clone = div.cloneNode(true);
    let aclone = audio.cloneNode(true);
    // let text = div.querySelector(".song_text");
    // div.removeChild(text);
    text.innerHTML = "<i class=\"fa-solid fa-chart-simple\"></i>"

    // Styling for clone
    clone.style.height = "250px";
    clone.style.width = "250px";
    clone.style.marginLeft = "10px";
    clone.style.marginRight = "10px"; // Fixed missing value
    clone.style.backgroundSize = "cover";
    clone.style.borderRadius = "10px";
    clone.style.innerText = "";

    // Display main container and set current playing audio
    main.style.display = "block";
    current = aclone;

    img.appendChild(clone);
    main.appendChild(aclone);
    aclone.play();
    play1.innerHTML = "<i class=\"fa-solid fa-pause\"></i>";
    aclone.addEventListener("timeupdate", () => {
        range.value = aclone.currentTime;
    });

    aclone.addEventListener("loadedmetadata", () => {
        range.max = aclone.duration;
    });

    range.addEventListener("input", () => {
        aclone.currentTime = range.value;
    });
    let bef = document.querySelector(".bef");
    bef.addEventListener("click", () => {
        aclone.currentTime -= 10;
    });

    let aft = document.querySelector(".aft");
    aft.addEventListener("click", () => {
        aclone.currentTime += 10;
    });

    let back_btn = document.querySelector(".back_btn");
    back_btn.addEventListener("click", () => {
        main.style.display = "none";
        aclone.pause();
    });
}

let songs = document.querySelectorAll(".songs");
songs.forEach((div) => {
    div.addEventListener("click", () => play_next(div));
});