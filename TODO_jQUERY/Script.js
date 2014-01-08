$(document).ready(function () {

    $('#time').jTime();

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
        $('#todos').prepend("<li class='item'><input id='check' class='check' name='check' type='checkbox'/>" + Description + "</li>");
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

    $('.check').click(function () {
        if ($(this).is(':checked')) {
            $(this).parent().addClass("tachado");

            cantidadPorHacer -= 1;
            cantidadRealizado += 1;
        } else {
            $(this).parent().removeClass('tachado');

            cantidadRealizado -= 1;
            cantidadPorHacer += 1;
        }
        $('#lblRealizados').html(cantidadRealizado);
        $('#lblSinHacer').html(cantidadPorHacer);
    });

    $('#elimina').click(function () {
        console.debug(this);
    });



    $('#eliminaSelec').click(function () {
        $('#todos li').each(function () {
            if ($(this).hasClass("tachado")) {
                $(this).remove();
            }
        });
        var todos = $('#todos').html();
        localStorage.setItem('todos', todos);
        location.reload();
    });




    var cantidadTotal = $('#todos li').size();
    var cantidadRealizado = 0;
    var cantidadPorHacer = cantidadTotal;

    $('#lblTotal').html(cantidadTotal);
    $('#lblRealizados').html(cantidadRealizado);
    $('#lblSinHacer').html(cantidadPorHacer);
    console.log(cantidadTotal);
});