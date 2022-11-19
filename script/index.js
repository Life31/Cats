const cardContainer = document.querySelector('.cards');
const btnAddCat = document.querySelector('#add')
const formCatAdd = document.querySelector('#popup-form-cat')

function serializeForm(elements){
    const formData = {};
    elements.forEach( input => {
        if(input.type === 'submit') return;
        
        if(input.type !== 'checkbox') {
            formData[input.name] = input.value;
        };
        if(input.type === 'checkbox') {
            formData[input.name] = input.checked;
        };
        
    })
    return formData
}

function handelFormAddCat(e) {
    e.preventDefault()

    const elementsFormCat = [...formCatAdd.elements];
    const dataFromForm = serializeForm(elementsFormCat) 
    
    console.log(dataFromForm)
    cats.push(dataFromForm)
          
    const cardInstans = new Card(dataFromForm, '#card-template')
    const newCardElement = cardInstans.getElement();
    cardContainer.append(newCardElement)

    popupAddCat.close()
}

cats.forEach(function(catData) {
    
     const cardInstans = new Card(catData, '#card-template')
     const newCardElement = cardInstans.getElement();
     cardContainer.append(newCardElement)
});

const popupAddCat = new Popup('popup-add-cats')
popupAddCat.setEventListener();

btnAddCat.addEventListener('click', ()=> popupAddCat.open())
formCatAdd.addEventListener('submit', handelFormAddCat)

logoLink.addEventListener('mouseover',() => changeOver())
logoLink.addEventListener('mouseleave',() => changeLiave())