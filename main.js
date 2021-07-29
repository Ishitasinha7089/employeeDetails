
changeTheme = (e) =>{
    var logo = document.querySelector('.header .logo')
    if(e.src.includes('sun')){
        e.src = 'assets/moon.svg'
        logo.src = 'assets/groww-light.png'
        localStorage.setItem('theme','dark')
        document.body.classList.add('dark')
        return;
    }
    e.src='assets/sun.svg'
    logo.src = 'assets/groww-dark.png'
    localStorage.setItem('theme','light')
    document.body.classList.remove('dark')
}

enableSpouseNameField = () =>{
    document.getElementById('spouseName').disabled = false
}

disableSpouseNameField = () =>{
    document.getElementById('spouseName').disabled = true
    document.getElementById('spouseName').value=''
}
submitForm = () =>{
    alert('Thank you!')
}


document.getElementById('married').addEventListener('click', enableSpouseNameField)
document.getElementById('unmarried').addEventListener('click', disableSpouseNameField)

