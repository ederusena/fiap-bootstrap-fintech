const email = document.getElementById('typeEmailX-2');
const senha = document.getElementById('typePasswordX-2');
const btnLogin = document.getElementById('btnLogin');
const loginForm = document.getElementById('loginForm');
const loginError = document.getElementById('loginError');
const senhaError = document.getElementById('senhaError');



function validateForm() {
  loginForm.addEventListener('submit', (e) => {
    if (email.value === '' || email.value == null) {
      // messages.push('Email invalido')
      loginError.innerText = "Email Invalido"
    }

    if (senha.value === '' || senha.value.length > 4) {
      // messages.push('Email invalido')
      senhaError.innerText = "Senha Invalida"
    }
    e.preventDefault()
    // loginError.innerText = messages.join(', ')
  })
}