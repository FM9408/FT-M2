

$('#boton').click(() => {
    var lista = $('#lista')
        lista.empty()
    $.get('http://localhost:5000/amigos/', (info) => {
        for(let i=0; i<info.length; i++) {
            lista.append('<li>' + info[i].name + '</li>')
        }
    })
})

$('#search').click(()  => {
    var id = $('#input').val()
    $.get (`http://localhost:5000/amigos/${id}`, info => {
       document.querySelector('#amigo').innerHTML = info.name
 
    });
    
});

$('#delete').click(() => {
    var id = $('#inputDelete').val()
    $.ajax({
        url: `http://localhost:5000/amigos/${id}`,
        type: "DELETE",
        success: () => {
            $('#sucess').text(`el amigo numero ${id} fue borrado con exito`)
        }

    })

    setTimeout(function() {
        window.location.reload(1)
    }, 1000);
    
})