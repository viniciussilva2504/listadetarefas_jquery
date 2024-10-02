$(document).ready(function() {

    // Ao submeter o formulário, adiciona uma nova tarefa
    $('#taskForm').submit(function(event) {
        event.preventDefault(); // Previne o comportamento padrão do formulário
        
        // Captura o valor do input de tarefa
        let task = $('#taskInput').val();
        
        // Adiciona a tarefa à lista
        if (task) {
            $('#taskList').append('<li>' + task + '</li>');
            $('#taskInput').val(''); // Limpa o campo de input
        }
    });

    // Marca a tarefa como completa ao clicar
    $('#taskList').on('click', 'li', function() {
        $(this).toggleClass('completed');
    });
});
