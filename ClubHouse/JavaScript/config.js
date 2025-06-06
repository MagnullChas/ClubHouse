function ativarModoEscuro() {
    document.body.classList.toggle("modo-escuro");
}

function traduzirParaIngles() {
    document.querySelector("title").innerText = "Clubhouse - Settings";
    document.querySelector("h1").innerText = "Settings";

    const links = document.querySelectorAll("nav ul li a");
    const traducao = ["Home", "Profile", "Clubs", "Notifications", "Settings"];
    links.forEach((link, index) => {
        if (traducao[index]) link.innerText = traducao[index];
    });
}

function sair() {
    window.location.href = "login.html"; // Troque para a página de saída desejada
}
