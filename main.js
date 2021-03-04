const header = document.querySelector('.navItems');
const main = document.querySelector('main');
const footer = document.querySelector('.copyright');
const divBackground = document.createElement('div');
const divContainer = document.createElement('div');
const title = document.createElement('h1');
const subtitle = document.createElement('h2');
const text = document.createElement('p');
const secondSubtitle = document.createElement('h3');
const donate = document.createElement('button');
const deleteBtn = document.createElement('p');



divBackground.classList.add('modal');

divContainer.classList.add('divContainer');

deleteBtn.innerText = 'X';
deleteBtn.classList.add('deleteBtn');

title.innerText = 'giving tuesday';
title.classList.add('giving');

subtitle.innerText = 'your donation goes a long way.';
subtitle.classList.add('donation');

text.innerText = 'It will be used to feed communities, to give out school supplies, to create safer methods of public safety and to fight for black communities all over Greater NY. Your donation will serve as resounding voice for the underserved and disenfranchised.';
text.classList.add('donationText');

secondSubtitle.innerText = 'thank you.';
secondSubtitle.classList.add('thankYou');

donate.innerText = 'donate now';
donate.classList.add('donateBtn');
setTimeout(() => {

header.style.opacity = '0.2';
header.style.pointerEvents = 'none';
main.style.opacity = '0.2';
main.style.pointerEvents = 'none';
footer.style.opacity = '0.2';
footer.style.pointerEvents = 'none';

document.body.appendChild(divBackground);
divBackground.append(divContainer);
divContainer.append(deleteBtn);
divContainer.append(title);
divContainer.append(subtitle);
divContainer.append(text);
divContainer.append(secondSubtitle);
divContainer.append(donate);

},1000);

const closeModal = e => {
    if(e.target){
        divBackground.remove();
        header.style.opacity = '1';
        header.style.pointerEvents = 'auto';
        main.style.opacity = '1';
        main.style.pointerEvents = 'auto';
        footer.style.opacity = '1';
        footer.style.pointerEvents = 'auto';
    }
}

const hideModal = e => {
    if(e.target.class !== 'modal' && !e.target.closest('.modal')){
        header.style.opacity = '1';
        header.style.pointerEvents = 'auto';
        main.style.opacity = '1';
        main.style.pointerEvents = 'auto';
        footer.style.opacity = '1';
        footer.style.pointerEvents = 'auto';
        divBackground.remove();
    }
}

deleteBtn.addEventListener('click', closeModal);
document.addEventListener('click', hideModal);