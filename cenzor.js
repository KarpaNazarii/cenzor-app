let addBtn = document.querySelector('#add-btn');
let resetBtn = document.querySelector('#reset-btn');
let cenzorBtn = document.querySelector('#cenzor')

let badWordsArray = [];

addBtn.addEventListener('click', () => {
    let inputTaker = document.getElementById("bad-words-input").value;
    document.getElementById('bad-words-container').innerHTML += "<li>" + inputTaker + "</li>";
    badWordsArray.push(inputTaker)
    return (
        document.getElementById("bad-words-input").value = ""
    )
});

cenzorBtn.addEventListener('click', function () {
    let input = document.querySelector('#textarea')
    let text = input.value
    badWordsArray.map((e) => {
        const changedWord = blurWord(e)
        text = text.replaceAll(e, changedWord)
    })
    document.querySelector('#textarea').value = text
})

resetBtn.addEventListener('click', () => {
    let badWords = document.querySelectorAll("li");
    badWords.forEach(e => e.remove());
    badWordsArray.length = 0;
});

function blurWord(word) {
    let newWord = ''
    for (let i = 0; i < word.length; i++) {
        newWord += '*'
    }
    return newWord
}








