const darkMode = document.querySelector(".dark-mode");
const body = document.body;

// Verificar si el modo oscuro está activo en localStorage
const savedDarkMode = localStorage.getItem("dark-mode") === "true";

// Aplicar el modo oscuro si está guardado
if (savedDarkMode) {
    body.classList.add("active");
    darkMode.classList.add("no-transition");
} else {
    darkMode.classList.add("no-transition");
}

// Alternar modo oscuro
darkMode.addEventListener("click", () => {
    body.classList.toggle("active");
    const isDarkMode = body.classList.contains("active");

    // Guardar preferencia en localStorage
    localStorage.setItem("dark-mode", isDarkMode);

    // Bloquear la animación del botón
    darkMode.classList.add("no-transition");
});

// Bloquear la animación del botón al cargar la página
window.addEventListener("load", () => {
    darkMode.classList.add("no-transition");
    setTimeout(() => {
        darkMode.classList.remove("no-transition");
    }, 0);
});

// Lógica para alternar entre los formularios de inicio de sesión y registro
const loginForm = document.getElementById('loginForm');
const registroForm = document.getElementById('registroForm');
const toggleRegistro = document.getElementById('toggleRegistro');
const toggleLogin = document.getElementById('toggleLogin');
const loginRegisterForm = document.getElementById('loginRegisterForm');
const toggleLoginForm = document.getElementById('toggleLoginForm');

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

toggleLoginForm.addEventListener('click', (e) => {
    e.preventDefault();
    if (window.location.pathname.endsWith('index.html')) {
        loginRegisterForm.classList.toggle('active');
    }
});