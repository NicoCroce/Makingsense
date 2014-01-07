$(document).ready(function () {
    //Agregar elemento
    $('#add').click(function () {
        //Almacenos el valor del Txt en la variable Description.
        var Description = $('#description').val();
        //Si Description esta vacia.
        if ($("#description").val() == '') {
            //Anima un label y retorna falso
            $('#alert').html("<strong>Warning!</strong> You left the to-do empty");
            $('#alert').fadeIn().delay(1000).fadeOut();
            return false;
        }
        //Agrega elemento a la lista TODOS con la descripción del txt.
        $('#todos').prepend("<li class='item'><input id='check' name='check' type='checkbox'/>" + Description + "</li>");
        $('#form')[0].reset();
        //Obtengo el HTML de todos los TODOS y lo almaceno en una variable
        var todos = $('#todos').html();
        //Almaceno en el local Storage con la Key todos todos los elementos.
        localStorage.setItem('todos', todos);
        return false;
    });

    if (localStorage.getItem('todos')) {
        $('#todos').html(localStorage.getItem('todos'));
    }

    $('#clear').click(function () {
        window.localStorage.clear();
        location.reload();
        return false;
    });

});