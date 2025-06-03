
document.addEventListener("DOMContentLoaded", function() {
    const dias = document.querySelectorAll(".calendario td");
    const listaEventos = document.getElementById("lista-eventos");

    dias.forEach(dia => {
        const diaSelecionado = dia.textContent.trim();
        if (diaSelecionado !== "") {
            if (dia.classList.contains("selecionado")) {
                adicionarOuMostrarEvento(diaSelecionado);
            }

            dia.addEventListener("click", function() {
                if (!this.classList.contains("selecionado")) {
                    this.classList.add("selecionado");
                    adicionarOuMostrarEvento(diaSelecionado);
                } else {
                    toggleVisibilidadeEvento(diaSelecionado);
                }
            });
        }
    });

    function adicionarOuMostrarEvento(dia) {
        let li = document.getElementById(`evento-${dia}`);
        if (!li) {
            li = document.createElement("li");
            li.id = `evento-${dia}`;
            li.innerHTML = `
                <strong>Dia ${dia}</strong><br>
                <input type="text" placeholder="Nome do evento"><br>
                <textarea placeholder="Descrição..."></textarea><br>
                <button class="remover">Remover</button>
            `;
            li.querySelector('.remover').addEventListener('click', function() {
                li.remove();
                desmarcarDia(dia);
            });
            listaEventos.appendChild(li);
        } else {
            li.style.display = "block";
        }
    }

    function toggleVisibilidadeEvento(dia) {
        const li = document.getElementById(`evento-${dia}`);
        if (li) {
            if (li.style.display === "none" || li.style.display === "") {
                li.style.display = "block";
            } else {
                li.style.display = "none";
            }
        }
    }

    function desmarcarDia(dia) {
        dias.forEach(d => {
            if (d.textContent.trim() === dia) {
                d.classList.remove("selecionado");
            }
        });
    }
});
