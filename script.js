const utterance = new SpeechSynthesisUtterance();


// utterance.lang = "pt-BR";
// utterance.rate = 2;
// utterance.text = "Victor Westmann";

// function defineLanguage(){
//     utterance.lang = document.getElementById("idioma").value;
// }

function defineLanguage(){
    utterance.lang = document.querySelector("#idioma").value;
}

function speak(){
    defineLanguage();
    speechSynthesis.speak(utterance);
}

function stop(){
    speechSynthesis.cancel();
}

function setRate(){
    utterance.rate = document.body.querySelector("#utteranceRate");
}

function setText(event){
    utterance.text = document.body.querySelector('#mensagemDeTexto').innerText;
}

/* Sincronizar os 2 controles de utterance.rate */
var range = document.querySelector('#utteranceRate-range');
var field = document.querySelector('#utteranceRate-field');

range.addEventListener('input', function (e) {
  field.value = e.target.value;
});

field.addEventListener('input', function (e) {
  range.value = e.target.value;
});