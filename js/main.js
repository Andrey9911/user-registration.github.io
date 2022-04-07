// import {Cleave} from "../../module/node_modules/cleave.js/dist/cleave.min.js"
let add_newUser = document.querySelector('#add_new-user'),
    show_users = document.querySelector('#show_users_ico'),
    night_theme = document.querySelector('#night_theme_ico'),
    eye = document.getElementById('eye'),
    eye2 = document.getElementById('eye2'),
    choose = document.getElementById('choose').children

let form = document.querySelector('#form'),
    user_catalog = document.getElementById('user_catalog')
let sub = document.querySelector('#sub')
let input = document.querySelectorAll('#form input')
let pass1 = document.getElementById('pass1'),
    pass2 = document.getElementById('pass2')
let file_img = document.getElementById('image_file')
let new_person = document.querySelector('#new_ready')  
let dsc = document.getElementById('dsc')

let array_users = []

for(btn of choose){
    btn.addEventListener('click', chooseUserBut)
}
night_theme.addEventListener('click', nightAndSunTheme)
eye.addEventListener('click', eyeActive)
eye2.addEventListener('click', eye2Active)
sub.addEventListener('click', submit)


function chooseUserBut(){
    for(btn of choose){
        btn.classList.remove('active-block_menu')
    }
    if(form.classList.contains('active-block')){
        form.classList.remove('active-block')
        user_catalog.classList.add('active-block')
    }else{
        form.classList.add('active-block')
        user_catalog.classList.remove('active-block')
    }
    this.classList.add('active-block_menu')

}
function nightAndSunTheme(){
    console.log(night_theme.children)
    if(night_theme.children[0].classList.contains('ico_active')){
        for(n_t of night_theme.children){n_t.classList.remove('ico_active')}
        night_theme.children[1].classList.add('ico_active')
        document.body.classList.remove('dark')
    }else if(night_theme.children[1].classList.contains('ico_active')){
        for(n_t of night_theme.children){n_t.classList.remove('ico_active')}
        night_theme.children[0].classList.add('ico_active')
        document.body.classList.add('dark')
    }
}
function eyeActive(){
    console.log(pass1.attributesg)
    // for(e of eye.children){e.classList.remove('ico_active')}
    if(eye.children[0].classList.contains('ico_active')){

        eye.children[0].classList.toggle('ico_active')
        eye.children[1].classList.toggle('ico_active')
        pass1.type = 'text'
    }else{
        eye.children[0].classList.toggle('ico_active')
        eye.children[1].classList.toggle('ico_active')
        pass1.type = 'password'
    }
}
function eye2Active(){
    if(eye2.children[0].classList.contains('ico_active')){

        eye2.children[0].classList.toggle('ico_active')
        eye2.children[1].classList.toggle('ico_active')
        pass2.type = 'text'
    }else{
        eye2.children[0].classList.toggle('ico_active')
        eye2.children[1].classList.toggle('ico_active')
        pass2.type = 'password'
    }
}

function checkPass(){
    if(pass1.value !== '' && pass2 !== ''){
        if(pass1.value !== pass2.value) return false
        else return true
    }else return false
}

function checkValid(){
    let i = 0
    for(inp of input){
        if(inp.value == ''){
            if(inp.id == 'image_file' && inp.value == ''){
                document.querySelector('#dsc').classList.add('is-invalid')
            }

            
            i++
            inp.classList.add('is-invalid')
            

            // console.log('j')
        }else{
            if(inp.id == 'image_file' && inp.value != ''){
                document.querySelector('#dsc').classList.remove('is-invalid')
                // dsc.style.backgroundImage = "url(../../image/"+file_img.files[0].name+""
                dsc.style.backgroundImage = "url(../../image/"+file_img.files[0].name+""
                dsc.style.backgroundSize = 'cover'
                // console.log(file_img.files[0].);
               
            }
            
            inp.classList.remove('is-invalid')
            continue
        } 

    }
    if(i == 7) return false
    else if(i == 0) return true
}



function submit(){
    let warnning = document.querySelector('.warning')
    // console.log(checkPass)
    if(!checkValid()){
        console.log(true)
        return
    }else{
        if(!checkPass()){
            warnning.innerHTML = 'no correct data'
            pass1.classList.add('is-invalid')
            pass2.classList.add('is-invalid')
        }else{
            
            console.log(file_img.files[0].name);
            let userN = document.createElement('div')
            userN.setAttribute('class', 'user block')
            
            let img = file_img.files[0].name,
            name = document.getElementById('name').value,
            fname = document.getElementById('fname').value,
            age = document.getElementById('data').value,
            email = document.getElementById('email').value,
            phone = document.getElementById('phone').value,
            password = document.getElementById('pass1').value



            let newDate = new Date()
            let ageOld = new Date(age)
            console.log()
            let rezDate = newDate.getFullYear() - ageOld.getFullYear()
            console.log(rezDate, "--",ageOld.getFullYear,'--',newDate.getFullYear)
            
            let user = new userDate(name, fname, age, email, phone, password)
            array_users.push(user)
            console.log(array_users)

            userN.innerHTML = '<img src="../../image/'+img+'" alt="">'+
                            '<div class="option">'+
                                '<div class="nameN">'+user.name+'</div>'+
                                '<div class="point">•</div>'+
                                '<div class="age">'+rezDate+'</div>'+
                            '</div>'
            user_catalog.append(userN)

            new_person.classList.add('active')
            setTimeout(() => {
                new_person.style.animation = ''
                new_person.classList.remove('active')
            },1000)
        }

        
    }
}

function userDate(name, fname, age, email, phone, password){
    this.name = name
    this.fname = fname
    this.age = age
    this.email = email
    this.phone = phone
    this.pass = password
}

 new Cleave('.phone', {
        phone: true,
        phoneRegionCode: 'RU'

    });
    
    