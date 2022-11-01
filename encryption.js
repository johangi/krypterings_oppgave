const form = document.querySelector('form');
const outputField = document.getElementById('output');
const clearBtn = document.getElementById('clearOutput')

function ceasarCipher(string, shift) {
    let resultArray = [];
    for(let i = 0; i < string.length; i++){
        let code = string.charCodeAt(i) + shift;
        while(code > 122){
            code = (code - 122) + 96;
        };
        resultArray.push(String.fromCharCode(code));
    };
    outputField.innerText = resultArray.join('');
    return resultArray.join('');
};

form.addEventListener('submit', e => {
    e.preventDefault();
    textInput = inputText.value.split(' ').join('').trim();
    number = numberInput.value;
    number = Number(number);
    ceasarCipher(textInput, number);
    inputText.value = '';
    numberInput.value = '';
});

clearBtn.addEventListener('click', e => {
    outputField.innerText = 'output';
    inputText.value = '';
    numberInput.value = '';
})