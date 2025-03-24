let main = document.querySelector(".main");
let main2 = document.querySelector(".main2");
let abc = document.querySelector(".abc");
let abc2 = document.querySelector(".abc2");
let but1 = document.querySelector(".but1");

main2.style.display = "none";
abc.addEventListener("click", () => {
    main2.style.display = "block";
    main.style.display = "none";

});
abc2.addEventListener("click", () => {
    main2.style.display = "none";
    main.style.display = "block";

});
but1.addEventListener("click", () => {
    main2.style.display = "none";
    main.style.display = "block";

});
