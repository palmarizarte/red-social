const loginForm = document.getElementById('loginForm');
const registroForm = document.getElementById('registroForm');
const toggleRegistro = document.getElementById('toggleRegistro');
const toggleLogin = document.getElementById('toggleLogin');
const loginFormSubmit = document.getElementById('loginFormSubmit');
const registroFormSubmit = document.getElementById('registroFormSubmit');

// Alternar entre formularios
toggleRegistro.addEventListener('click', (e) => {
    e.preventDefault();
    loginForm.style.display = 'none';
    registroForm.style.display = 'block';
});

toggleLogin.addEventListener('click', (e) => {
    e.preventDefault();
    registroForm.style.display = 'none';
    loginForm.style.display = 'block';
});

// Redirección al inicio (home) después de enviar el formulario de inicio de sesión
loginFormSubmit.addEventListener('submit', (e) => {
    e.preventDefault(); // Evita que el formulario se envíe de forma tradicional
    window.location.href = 'index.html'; // Redirige al inicio (home)
});

// Redirección al inicio (home) después de enviar el formulario de registro
registroFormSubmit.addEventListener('submit', (e) => {
    e.preventDefault(); // Evita que el formulario se envíe de forma tradicional
    window.location.href = 'index.html'; // Redirige al inicio (home)
});