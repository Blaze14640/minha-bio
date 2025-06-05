const toggleButton = document.getElementById("toggleTheme");

toggleButton.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    toggleButton.textContent = "☀️ Modo Claro";
  } else {
    toggleButton.textContent = "🌙 Modo Escuro";
  }
});
