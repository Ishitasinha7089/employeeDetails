const textInputs = document.querySelectorAll('.empInputs1518 input[type="text"]');
const textlabels = document.querySelectorAll('.empInputs1518 label');
const textArea = document.getElementById('empOtherDetails1518');
const tandcCheckbox = document.getElementById('empTandC1518');
const radioBtns = document.querySelectorAll('.empRadioWrapper1519 label');
const radioBtnsLength = radioBtns.length;
const unMarriedradio = document.getElementById('unmarried');
const marriedRadio = document.getElementById('married');


textInputs.forEach(element => {
    element.addEventListener('focus', () =>{
        element.nextElementSibling.classList.add('empLabelFocused1518');
    })

    element.addEventListener('blur', (event) =>{
        if(event.target.value===''){
            element.nextElementSibling.classList.remove('empLabelFocused1518');
            return;
        }
    })
     element.addEventListener('keyup', (event) =>showError(event.target));
});

showError = (event) =>{
    const value = event.value;
    const inputLabel = event.nextElementSibling.innerText.replace('*','');
    if(value==='' || value.trim().length===0){
        console.log(value, inputLabel, event.parentElement.nextElementSibling.innerHTML);
        event.parentElement.nextElementSibling.innerHTML= "Please provide your "+ inputLabel.toLowerCase();

    }
     else{
        event.parentElement.nextElementSibling.innerHTML="";
     }
}


textArea.addEventListener('focus',() =>{
    textArea.nextElementSibling.classList.add('empLabelFocused1518');
})
textArea.addEventListener('blur',(event) =>{
    if(event.target.value===''){
        textArea.nextElementSibling.classList.remove('empLabelFocused1518');
        return;
    }
})

for (let index = 0; index < radioBtnsLength; index++) {
    const element = radioBtns[index];
    element.addEventListener('click', () =>radioBtnCheck(element));
}





changeTheme = (e) =>{
    let logo = document.querySelector('.empHeader1518 .logo1518');
    if(e.srcElement.src.includes('sun')){
        e.srcElement.src = 'assets/moon.svg';
        logo.src = 'assets/groww-light.png';
        document.documentElement.setAttribute('data-theme', 'dark');
        return;
    }
    e.srcElement.src='assets/sun.svg';
    logo.src = 'assets/groww-dark.png';
    document.documentElement.removeAttribute('data-theme');
}
toggleModal = () =>{
    document.getElementsByClassName('empThankyouModal1518')[0].classList.toggle('empThankyouModalOpen1518');
    resetForm();
}


toggleSpouseNameField = () =>{
    const element = document.getElementsByClassName('empSpouseName1518')[0];
    if(unMarriedradio.checked){
        element.classList.add('disableSpouseInput');
        element.parentElement.nextElementSibling.innerHTML="";
        element.value='';
        element.nextElementSibling.classList.remove('empLabelFocused1518');
        element.disabled=true;
    } else{
        element.classList.remove('disableSpouseInput');
        element.disabled=false;
    }
}

submitForm = () =>{
    let noErrors =true;
    console.log('entered in form');
    
    const textInputsLength = textInputs.length;
    for(let cur = 0; cur<textInputsLength; cur++){
        const element = textInputs[cur];
        if(element.value==='' || element.value.trim().length==0){
            showError(element);
            noErrors = false;
            if(unMarriedradio.checked){
                textInputs[2].parentElement.nextElementSibling.innerHTML=""
            }
        }
        else if(!/^[a-zA-Z\s]*$/.test(element.value)){
            element.parentElement.nextElementSibling.innerHTML = 'Please use only alphabets and';
            noErrors=false;
        }
    }
    if(!tandcCheckbox.checked){
        tandcCheckbox.parentElement.parentElement.nextElementSibling.innerHTML="Please check this box";
        return;
    } 
    
    tandcCheckbox.parentElement.parentElement.nextElementSibling.innerHTML="";
    if(noErrors){
        toggleModal();
    }
    
}

resetForm = () =>{
    textInputs.forEach(element =>{
        element.value=""
        element.parentElement.nextElementSibling.innerHTML =""
    })
    textlabels.forEach(element =>{
        element.classList.remove('empLabelFocused1518')
    })
    textArea.value=''
    tandcCheckbox.checked=false;
    tandcCheckbox.parentElement.parentElement.nextElementSibling.innerHTML="";
    document.getElementById('married').checked=true;
    document.getElementById('male').checked=true;
    document.getElementsByClassName('empSpouseName1518')[0].classList.remove('disableSpouseInput');
}

toggleTooltip = () =>{
    document.getElementsByClassName('empTooltip1518')[0].classList.toggle('empShowTooltip1518')
}
radioBtnCheck = (element) =>{
    element.parentNode.childNodes[1].childNodes[1].checked=true
    toggleSpouseNameField()
}




marriedRadio.addEventListener('click', toggleSpouseNameField)
unMarriedradio.addEventListener('click', toggleSpouseNameField)
document.getElementById('empSubmitBtn1518').addEventListener('click', submitForm)
document.getElementById('empResetBtn1518').addEventListener('click', resetForm)
document.getElementsByClassName('empSpouseNameDiv1518')[0].addEventListener('mouseover',toggleTooltip)
document.getElementsByClassName('empSpouseNameDiv1518')[0].addEventListener('mouseleave',toggleTooltip)
document.getElementsByClassName('icon1518')[0].addEventListener('click', (event) =>{changeTheme(event)})
document.querySelector('.empThankyouModal1518').addEventListener('click', toggleModal)
