const loginForm = document.getElementById('loginForm');
const registroForm = document.getElementById('registroForm');
const olvidoForm = document.getElementById('olvidoForm');
const toggleRegistro = document.getElementById('toggleRegistro');
const toggleLogin = document.getElementById('toggleLogin');
const toggleOlvido = document.getElementById('toggleOlvido');
const toggleLoginOlvido = document.getElementById('toggleLoginOlvido');

toggleRegistro.addEventListener('click', (e) => {
    e.preventDefault();
    loginForm.style.display = 'none';
    registroForm.style.display = 'block';
    olvidoForm.style.display = 'none';
});

toggleLogin.addEventListener('click', (e) => {
    e.preventDefault();
    registroForm.style.display = 'none';
    loginForm.style.display = 'block';
    olvidoForm.style.display = 'none';
});

toggleOlvido.addEventListener('click', (e) => {
    e.preventDefault();
    loginForm.style.display = 'none';
    registroForm.style.display = 'none';
    olvidoForm.style.display = 'block';
});

toggleLoginOlvido.addEventListener('click', (e) => {
    e.preventDefault();
    olvidoForm.style.display = 'none';
    loginForm.style.display = 'block';
});

document.getElementById('login').addEventListener('submit', (e) => {
    e.preventDefault();
    window.location.href = 'index.html';
});

document.getElementById('registro').addEventListener('submit', (e) => {
    e.preventDefault();
    registroForm.style.display = 'none'; // Oculta el formulario de registro
    loginForm.style.display = 'block';   // Muestra el formulario de inicio de sesión
});

document.getElementById('olvido').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Se ha enviado un enlace para restablecer tu contraseña.');
    window.location.href = 'index.html';
});