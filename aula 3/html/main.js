function func() {
    console.log("click") 
    let style = document.getElementById('heading').style.display
    if(style === "none") {
        document.getElementById('heading').style.display = "block"
    } else {
        document.getElementById('heading').style.display = "none"
    }
}

function getName() {
    let value = document.getElementById('inp ut').value
    document
    .getElementById('heading-input')
    .innerText = `Hello there: ${value}`
}