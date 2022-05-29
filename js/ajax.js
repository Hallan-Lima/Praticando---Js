
// função para enviar dados para um arquivo em PHP que deve gravar os dados no DB.
function testandoAjax() {
    $.post( "php/db.php", { 
        name: "John", time: "2pm" 
    } )
    .done(function( data ) {
    alert( "Sucesso : " + data );
    });
}
/// função para mandar um parâmetro via get e receber as informações de um arquivo PHP.
function getDados() {
    $.get( "php/db.php?v=1", function( data ) {
        alert( data );
    });
}