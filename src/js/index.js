
const botaoMostrarProjetos = document.querySelector('.btn-mostrar-projetos');

const projetoInativos = document.querySelectorAll(".projeto:not(.ativo)");

botaoMostrarProjetos.addEventListener('click', () => {
       mostarMaisProjetos();
       esconderBotao();
});

function esconderBotao() {
       botaoMostrarProjetos.classList.add('remover');
}

function mostarMaisProjetos() {
       projetoInativos.forEach(projetoInativo => {
              projetoInativo.classList.add('ativo')
       });
};