const popupUser = document.querySelector("#popup_off"); 
const popupShare = document.querySelector("#popup_on"); 
const popupContainer = document.querySelector(".card__social"); 
const btnFloat = document.querySelector(".btnFloat"); 
const btn = document.querySelector("#btn"); 

let popupOff = true;

const init = () => {
    btn.addEventListener('click', toggle); 
    btnFloat.addEventListener('click', toggle); 
}

window.onload = init(); 

function toggle() {
    if(window.screen.width < 1200) {
        btnFloat.style.display = 'none';

        if(popupOff) {
            modifyDOM({
                element: popupUser,
                toAdd: ['hidden'],
                toRemove: ['fadeIn']
            }); 

            modifyDOM({
                element: popupShare,
                toAdd: ['fadeIn'],
                toRemove: ['hidden']
            });
            modifyDOM({
                element: popupContainer,
                toAdd: ['fadeIn'],
                toRemove: ['hidden'], 
                color: 'hsl(217, 19%, 35%)'
            });

            btn.style.color = 'white';
        
        } else {
            modifyDOM({
                element: popupShare,
                toAdd: ['hidden'],
                toRemove: ['fadeIn']
            }); 
            modifyDOM({
                element: popupContainer,
                toAdd: [],
                toRemove: ['fadeIn'],
            }); 
            modifyDOM({
                element: popupUser,
                toAdd: ['fadeIn'],
                toRemove: ['hidden'], 
                color: 'white'
            });

            btn.style.color = 'hsl(217, 19%, 35%)';
            
        }

    } else {
        
        if(popupOff) {
            btnFloat.style.display = 'flex';
            
            modifyDOM({
                element: btnFloat,
                toAdd: ['fadeIn'],
                toRemove: ['hidden'], 
                color: 'hsl(217, 19%, 35%)'
            });
        } else {
            btnFloat.style.display = 'none';
            
            modifyDOM({
                element: btnFloat,
                toAdd: ['hidden'],
                toRemove: ['fadeIn']
            }); 
        }

    }


    popupOff = !popupOff; 
}

function modifyDOM({element, toAdd = [], toRemove = [], color = 'inherit'}) {
    toAdd.forEach(cls => element.classList.add(cls)); 
    toRemove.forEach(cls => element.classList.remove(cls)); 
    element.style.backgroundColor = color; 
}
