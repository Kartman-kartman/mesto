

const aboutButton = document.querySelector('.profile__button')
const popup = document.querySelector('.popup')
const popupoff = popup.querySelector('.popup__close')

const ButtonClick = () => {
    popup.classList.add('popup_opened');
}
const CloseButtonClick = () => {
    popup.classList.remove('popup_opened');
}

aboutButton.addEventListener('click', ButtonClick)
popupoff.addEventListener('click', CloseButtonClick)



let formElement = document.querySelector('form')
let input = document.getElementById('in_1')
let inputsecond = document.getElementById('in_2')
console.log(input.defaultValue);

let title = document.querySelector('.profile__title')
let subtitle = document.querySelector('.profile__subtitle')
input.defaultValue = title.textContent;
inputsecond.defaultValue = subtitle.textContent;
console.log(input.value)

function handleFormSubmit(evt) {
    evt.preventDefault();

}

formElement.addEventListener('submit', handleFormSubmit);
console.log(input)



