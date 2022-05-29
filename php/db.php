<?php

// recebendo valores via post e gravar no banco
foreach ($_POST as $key => $value) {
    echo $value;
}
// recebendo o parametro e exibindo o resultado
if (isset($_GET['v'])) {
    $teste = [
        'ola',
        'apenasteste',
    ];
    echo json_encode($teste);
}
if (isset($_GET['m'])) {
    $teste = [
        'o123la',
        'apena231steste',
    ];
    echo json_encode($teste);
}