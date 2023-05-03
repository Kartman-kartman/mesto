

const aboutButton = document.querySelector('.profile__button')
const popup = document.querySelector('.popup')
const popupoff = popup.querySelector('.popup__close')
const popupsave = popup.querySelector('.popup__save')
let title = document.querySelector('.profile__title')
let subtitle = document.querySelector('.profile__subtitle')
let formElement = document.querySelector('.popup__form')
let input = document.querySelector('.popup__input_text_name')
let inputsecond = document.querySelector('.popup__input_text_job')

const buttonClick = () => {
    popup.classList.add('popup_opened');
    input.defaultValue = title.textContent;
    inputsecond.defaultValue = subtitle.textContent;
}


const closeButtonClick = () => {
    popup.classList.remove('popup_opened');
}

aboutButton.addEventListener('click', buttonClick)
popupoff.addEventListener('click', closeButtonClick)

function handleFormSubmit(evt) {
    evt.preventDefault();
    title.textContent = input.value;
    subtitle.textContent = inputsecond.value;
    closeButtonClick('onClick')
}
formElement.addEventListener('submit', handleFormSubmit);



