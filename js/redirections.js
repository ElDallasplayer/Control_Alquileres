function InsertComponent(insertToById,urlComponent){
    $(document).ready(function () {
        $('#' + insertToById).load("./componentes/" + urlComponent + ".html");
    });
}