// document.getElementById("grandparent").addEventListener("click", () => {
//     console.log("Grandparent");
// },false);

// document.getElementById("parent").addEventListener("click", () => {
//     console.log("Parent");
// },false);

// document.getElementById("child").addEventListener("click", () => {
//     console.log("Button");
// },false);

// document.getElementById("grandparent").addEventListener("click", () => {
//     console.log("Grandparent");
// },true);

// document.getElementById("parent").addEventListener("click", () => {
//     console.log("Parent");
// },true);

// document.getElementById("child").addEventListener("click", () => {
//     console.log("Button");
// },true);



document.getElementById("child").addEventListener("click", function(e) {
    console.log("Button");
    e.stopPropagation()
},false);

document.getElementById("grandparent").addEventListener("click", () => {
    console.log("Grandparent");
},false);

document.getElementById("parent").addEventListener("click", () => {
    console.log("Parent");
},false);