const form = document.querySelector('#form');
const inTarefa = document.querySelector('#form-tarefa')
const btnAddTarefa = document.querySelector('#addTarefa');
const lista = document.querySelector('#lista')


// ====== EVENTOS ======

form.addEventListener('submit' , (e) => {
    e.preventDefault();

    criaTarefa();
})


// ====== FUNCOES ======

function criaTarefa() {

    const novaTarefa = document.createElement('li');
    novaTarefa.textContent = inTarefa.value;
    lista.appendChild(novaTarefa);

    const span = document.createElement('span');
    span.classList.add('texto-tarefa');
    
    const div = document.createElement('div');
    div.classList.add('btn');

    const btnEditar = document.createElement('button');
    btnEditar.classList.add('btn-acao');
    btnEditar.innerHTML = ' <i class="fa fa-check"></i> ';
    btnEditar.addEventListener('click', e => {
        novaTarefa.classList.add('check')
    })

    inTarefa.value = '';
    inTarefa.focus();

    const btnExcluir = document.createElement('button');
    btnExcluir.classList.add('btn-acao');
    btnExcluir.innerHTML = ' <i class="fa fa-trash"></i> ';
    btnExcluir.addEventListener('click', e => {

        if(e.target.nodeName === 'I'){
            e.target.parentElement.parentElement.parentElement.remove()
            }
        
        })

    div.appendChild(btnEditar);
    div.appendChild(btnExcluir);

    novaTarefa.appendChild(span);
    novaTarefa.appendChild(div);
    
    return lista;
}
