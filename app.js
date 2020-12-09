var btnTranslate = document.querySelector("#btn-translate")
var txtInput = document.querySelector("#txt-input")
var output =  document.querySelector("#output")

var serverURL = "https://api.funtranslations.com/translate/chef.json"

function getTranslation(text) {
    return serverURL + "?" + "text=" + text
}

function errorHandler(error) {
    alert('Limit exceeded! Try again after sometime')
}


function clickHandler() {
    var inputText = txtInput.value;
    fetch(getTranslation(inputText))
    .then(response => response.json())
    .then(json => {
        output.innerText = json.contents.translated
    })
    .catch(errorHandler)
}

btnTranslate.addEventListener("click", clickHandler)

/**var btnTranslate = document.querySelector("#btn-translate")
var txtInput = document.querySelector("#txt-input")
var output = document.querySelector("#output")

var serverURL = "https://api.funtranslations.com/translate/chef.json"

function getTranslationURL(text) {
    return serverURL + "?" + "text=" + text
}

function errorHandler(error) {
    console.log("error occured", error)
    alert('Limit exceeded! Try again after sometime')
}

function clickHandler() {
    var inputText = txtInput.value
    fetch(getTranslationURL(inputText))
        .then(response => response.json())
        .then(json => {
            output.innerText = json.contents.translated
        })
        .catch(errorHandler)
}


btnTranslate.addEventListener("click", clickHandler)**/