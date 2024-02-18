function playAudio() {
    document.getElementById('music').play();
    }
/*========================= toggle actions======================================*/
let menuIcon = document.querySelector('#menu-icon');
let navBar = document.querySelector('.navBar');

menuIcon.onclick = ()=> {
    menuIcon.classList.toggle('bx-x');
    navBar.classList.toggle('active');
}
/*========================== scroll sections all ====================================*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });


    /*=======================sticky navbar========================================*/
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    /*=======================sticky navbar========================================*/

    menuIcon.classList.remove('bx-x');
    navBar.classList.remove('active');

}
/* ScrollReveal({ reset: true }); */
ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});
ScrollReveal().reveal('.home-content, .heading', {origin: 'top'});
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', {origin: 'bottom'});
ScrollReveal().reveal('.home-content h1, .about-img, .about-dog', {origin: 'left'});
ScrollReveal().reveal('.home-content p, .about-content', {origin: 'right'});

const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'Educador'],
    typeSpeed : 100,
    backSpeed : 100,
    backDelay : 1000,
    loop: true 
})


//================================= FORMULARIO ==========================================================//
const formulario = document.getElementById('formulario'); // Accedo al formualario por el ID
const inputs = document.querySelectorAll('#formulario input'); // Accedo a los formularios por el selector

//=========================================== EXPRESIONES REGULARES DE LOS CAMPOS ================================================//
const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/, // 7 a 14 numeros.
    subject: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
}

//========================================== VALORES DE LOS CAMPOS POR DEFECTO ================================================//
const campos = {
    /* usuario: false, */
    nombre: false,
    /* password: false, */
    correo: false,
    telefono: false,
    subject: false,
}

//========================================== EXPRESIONES REGULARES DE LOS CAMPOS ================================================//
const validarFormulario = (e)=> {
    switch (e.target.name) {
       /*  case "usuario":
            validarCampo(expresiones.usuario, e.target, 'usuario'); // hace un llamado a la variable expresiones, accede al valor del input
        break ; */
        case 'nombre':
            validarCampo(expresiones.nombre, e.target, 'nombre');
        break ;
        case 'correo':
            validarCampo(expresiones.correo, e.target, 'correo');
        break ;
        case 'telefono':
            validarCampo(expresiones.telefono, e.target, 'telefono');
        break ;
        case 'subject':
            validarCampo(expresiones.subject, e.target, 'subject');
        break ;
    }
    
}
//========================================== VALIDACIONES DE LOS CAMPOS CON CONDICIONAL(AGREGA Y QUITA CLASES) ================================================//
const validarCampo = (expresiones, input, campo)=> {
   /*  if(expresiones.test(input.value)) {
        document.getElementById(`input-box${campo}`).classList.remove('formulario__grupo-incorrecto');
        document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
        document.querySelector(`#grupo__${campo} i`).classList.add('bxs-check-circle');
        document.querySelector(`#grupo__${campo} i`).classList.remove('bxs-times-circle');
        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
        campos[campo] = true;
    } else {
        document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
        document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
        document.querySelector(`#grupo__${campo} i`).classList.add('bxs-times-circle');
        document.querySelector(`#grupo__${campo} i`).classList.remove('bxs-check-circle');
        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
        campos[campo] = false;
        
    } */
}
//========================================== VALIDACIÓN DE CONTRASEÑA ================================================//


inputs.forEach((input)=>{
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
})

//========================================== EVENTO CLICK DEL FORMULARIO ================================================//
