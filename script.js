const darkMode = document.querySelector(".dark-mode");
const body = document.body;

// Verificar si el modo oscuro está activo en localStorage
const savedDarkMode = localStorage.getItem("dark-mode") === "true";

// Aplicar el modo oscuro si está guardado
if (savedDarkMode) {
    body.classList.add("active");
}

// Alternar modo oscuro
darkMode.addEventListener("click", () => {
    body.classList.toggle("active");
    const isDarkMode = body.classList.contains("active");

    // Guardar preferencia en localStorage
    localStorage.setItem("dark-mode", isDarkMode);
});