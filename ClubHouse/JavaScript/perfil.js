
let editando = false;
document.getElementById('editarBtn').addEventListener('click', function () {
    const btn = this;
    const nomeEl = document.getElementById('nomeUsuario');
    const cursoEl = document.getElementById('curso');
    const periodoEl = document.getElementById('periodo');
    const cargoEl = document.getElementById('cargo');
    const bioEl = document.getElementById('biografiaUsuario');
    if (!editando) {
        // Modo edição
        btn.textContent = 'Salvar';
        nomeEl.innerHTML = `<input type="text" id="inputNome" value="${nomeEl.textContent}" />`;
        cursoEl.innerHTML = `<input type="text" id="inputCurso" value="${cursoEl.textContent}" />`;
        periodoEl.innerHTML = `<input type="text" id="inputPeriodo" value="${periodoEl.textContent}" />`;
        cargoEl.innerHTML = `<input type="text" id="inputCargo" value="${cargoEl.textContent}" />`;
        bioEl.innerHTML = `<textarea id="inputBio">${bioEl.textContent}</textarea>`;
        editando = true;
    } else {
        // Modo salvar
        btn.textContent = 'Editar';
        const novoNome = document.getElementById('inputNome').value;
        const novoCurso = document.getElementById('inputCurso').value;
        const novoPeriodo = document.getElementById('inputPeriodo').value;
        const novoCargo = document.getElementById('inputCargo').value;
        const novaBio = document.getElementById('inputBio').value;
        nomeEl.textContent = novoNome;
        cursoEl.textContent = novoCurso;
        periodoEl.textContent = novoPeriodo;
        cargoEl.textContent = novoCargo;
        bioEl.textContent = novaBio;
        editando = false;
    }
});