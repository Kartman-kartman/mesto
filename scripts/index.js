

const aboutButton = document.querySelector('.profile__button')
const popup = document.querySelector('.popup')
const popupoff = popup.querySelector('.popup__close')
const popupsave = popup.querySelector('.popup__save')

const ButtonClick = () => {
    popup.classList.add('popup_opened');
}
const CloseButtonClick = () => {
    popup.classList.remove('popup_opened');
}


aboutButton.addEventListener('click', ButtonClick)
popupoff.addEventListener('click', CloseButtonClick)
popupsave.addEventListener('click', CloseButtonClick)



let formElement = document.querySelector('.popup__form')
let input = document.querySelector('.popup__inputname')
let inputsecond = document.querySelector('.popup__inputjob')


let title = document.querySelector('.profile__title')
let subtitle = document.querySelector('.profile__subtitle')
input.defaultValue = title.textContent;
inputsecond.defaultValue = subtitle.textContent;

function handleFormSubmit(evt) {
    evt.preventDefault();
    title.textContent = input.value;
    subtitle.textContent = inputsecond.value;
}
formElement.addEventListener('submit', handleFormSubmit);

const last = document.querySelector('#lasttext')
const screenWidth = window.screen.width
if (screenWidth <= 371) {
    last.textContent = "Карачаевск";
}




