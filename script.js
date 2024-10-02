$(document).ready(function() {

    // Função para escapar tags HTML e evitar inserção de código malicioso
    function sanitizeInput(input) {
        return input
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    }

    // Ao submeter o formulário, adiciona uma nova tarefa
    $('#taskForm').submit(function(event) {
        event.preventDefault(); // Previne o comportamento padrão do formulário
        
        // Captura o valor do input de tarefa e sanitiza a entrada
        let task = $('#taskInput').val();
        let sanitizedTask = sanitizeInput(task); // Escapa o HTML da entrada
        
        // Adiciona a tarefa à lista apenas se o campo não estiver vazio
        if (sanitizedTask) {
            $('#taskList').append('<li>' + sanitizedTask + '</li>');
            $('#taskInput').val(''); // Limpa o campo de input
        }
    });

    // Marca a tarefa como completa ao clicar
    $('#taskList').on('click', 'li', function() {
        $(this).toggleClass('completed');
    });
});
