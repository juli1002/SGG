// 1. Usuarios predeterminados de prueba
const usuariosValidos = [
    { user: "admin", pass: "admin123" },
    { user: "juli1002", pass: "claveSGG2026" }
];

document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("login-form");
    const errorMessage = document.getElementById("error-message");
    const themeToggle = document.getElementById("theme-toggle");

    // --- LÓGICA DE VALIDACIÓN DEL LOGIN ---
    loginForm.addEventListener("submit", (e) => {
        e.preventDefault(); // Evita que la página se recargue
        
        const usernameInput = document.getElementById("username").value.trim();
        const passwordInput = document.getElementById("password").value;

        // Buscar si coincide con algún usuario de prueba
        const usuarioEncontrado = usuariosValidos.find(
            u => u.user === usernameInput && u.pass === passwordInput
        );

        if (usuarioEncontrado) {
            errorMessage.textContent = "";
            alert("¡Inicio de sesión exitoso! Bienvenido al sistema SGG.");
            // Aquí se podría redirigir a otra página interna si existiera
        } else {
            errorMessage.textContent = "Usuario o contraseña incorrectos. Inténtalo de nuevo.";
        }
    });

    // --- MANEJO DE LOCALSTORAGE Y SWITCH DE TEMAS ---
    // Verificar si el usuario ya tenía un tema preferido guardado
    const temaGuardado = localStorage.getItem("tema") || "light";
    document.documentElement.setAttribute("data-theme", temaGuardado);
    actualizarBotonTema(temaGuardado);

    themeToggle.addEventListener("click", () => {
        const temaActual = document.documentElement.getAttribute("data-theme");
        const nuevoTema = temaActual === "dark" ? "light" : "dark";
        
        // Aplicar el nuevo tema
        document.documentElement.setAttribute("data-theme", nuevoTema);
        // Guardar la elección en el navegador
        localStorage.setItem("tema", nuevoTema);
        actualizarBotonTema(nuevoTema);
    });

    function actualizarBotonTema(tema) {
        if (tema === "dark") {
            themeToggle.textContent = "☀️ Modo Día";
        } else {
            themeToggle.textContent = "🌙 Modo Noche";
        }
    }
});