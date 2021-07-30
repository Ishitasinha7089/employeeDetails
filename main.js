const textInputs = document.querySelectorAll('.empInputs1518 input[type="text"]')
const textlabels = document.querySelectorAll('.empInputs1518 label')
textInputs.forEach(element => {
    element.addEventListener('focus', () =>{
        element.nextElementSibling.classList.add('empLabelFocused1518')
    })

    element.addEventListener('blur', (event) =>{
        if(event.target.value===''){
            element.nextElementSibling.classList.remove('empLabelFocused1518')
            return;
        }
    })
     element.addEventListener('keyup', (event) =>showError(event.srcElement));
});

showError = (event) =>{
    const value = event.value;
    const inputLabel = event.nextElementSibling.innerHTML
    if(value==='' || value.trim().length===0){
        console.log(value, inputLabel, event.parentElement.nextElementSibling.innerHTML);
        event.parentElement.nextElementSibling.innerHTML= "Please provide your "+ inputLabel.toLowerCase()

    }
     else{
        event.parentElement.nextElementSibling.innerHTML=""
     }
}

const textArea = document.getElementById('empOtherDetails1518')
const tandcCheckbox = document.getElementById('empTandC1518');
textArea.addEventListener('focus',() =>{
    textArea.nextElementSibling.classList.add('empLabelFocused1518')
})
textArea.addEventListener('blur',(event) =>{
    if(event.target.value===''){
        textArea.nextElementSibling.classList.remove('empLabelFocused1518')
        return;
    }
})





changeTheme = (e) =>{
    var logo = document.querySelector('.empHeader1518 .logo1518')
    if(e.srcElement.src.includes('sun')){
        e.srcElement.src = 'assets/moon.svg'
        logo.src = 'assets/groww-light.png'
        document.documentElement.setAttribute('data-theme', 'dark')
        return;
    }
    e.srcElement.src='assets/sun.svg'
    logo.src = 'assets/groww-dark.png'
    document.documentElement.removeAttribute('data-theme')
}
toggleModal = () =>{
    document.getElementsByClassName('empThankyouModal1518')[0].classList.toggle('empThankyouModalOpen1518')
}


toggleSpouseNameField = () =>{
    const element = document.getElementsByClassName('empSpouseName1518')[0];
    element.classList.toggle('disableSpouseInput');
    if(element.classList.contains('disableSpouseInput')){
        element.parentElement.nextElementSibling.classList.remove('empShowError1518');
        element.value='';
        element.nextElementSibling.classList.remove('empLabelFocused1518');
        // element.disabled=true;
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
            noErrors=false;
        } 
        else if(!/^[a-zA-Z]+$/.test(element.value)){
            element.parentElement.nextElementSibling.innerHTML = 'Please use only alphabets';
            noErrors=false;
        }
    }
    if(!tandcCheckbox.checked){
        tandcCheckbox.parentElement.parentElement.nextElementSibling.innerHTML="Please check this";
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
    document.getElementsByClassName('empSpouseName1518')[0].classList.toggle('disableSpouseInput');
}

toggleTooltip = () =>{
    document.getElementsByClassName('empTooltip1518')[0].classList.toggle('empShowTooltip1518')
}




document.getElementById('married').addEventListener('click', toggleSpouseNameField)
document.getElementById('unmarried').addEventListener('click', toggleSpouseNameField)
document.getElementById('empSubmitBtn1518').addEventListener('click', submitForm)
document.getElementById('empResetBtn1518').addEventListener('click', resetForm)
document.getElementsByClassName('empSpouseName1518')[0].addEventListener('mouseover',toggleTooltip)
document.getElementsByClassName('empSpouseName1518')[0].addEventListener('mouseleave',toggleTooltip)
document.getElementsByClassName('icon1518')[0].addEventListener('click', (event) =>{changeTheme(event)})
document.querySelector('.empThankyouModalBody1518 span').addEventListener('click', toggleModal)
