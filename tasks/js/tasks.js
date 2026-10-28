function toggleCode(elementId, button) {
    const codeBlock = document.getElementById(elementId);
    if (codeBlock.style.display === "block") {
        codeBlock.style.display = "none";
        button.textContent = "Показать код";
        button.classList.remove("btn-outline-secondary");
        button.classList.add("btn-primary");
    } else {
        codeBlock.style.display = "block";
        button.textContent = "Скрыть код";
        button.classList.remove("btn-primary");
        button.classList.add("btn-outline-secondary");
    }
}