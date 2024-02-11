// Async Await Fetch Promise OOPs
console.log("Rishabh Mittal")
setTimeout(()=>{
    console.log("Hello Hello")
},0 )
console.log("Rishabh Mittal")
const reviewName = ()=>{
    document.querySelector("h2").innerHTML = "Mittal, Rishabh"
    document.querySelector("button").style.backgroundColor="Red";
}
const stopping = setTimeout(reviewName,4000)
document.querySelector("button").addEventListener("click", () => {
        clearTimeout(stopping)
        console.log("Stopped")
    })