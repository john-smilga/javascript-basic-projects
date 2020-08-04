//set initial count
let count = 0

//select value and buttons
const value = document.querySelector("#value")
const btns = document.querySelectorAll(".btn")

btns.forEach((btn) => {
    btn.addEventListener("click", (event) => {
        const styles = event.currentTarget.classList
        if(styles.contains("decrease")) {
            count--
        } 
        value.textContent = count 
    })
})