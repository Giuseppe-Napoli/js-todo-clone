$(document).ready(function(){

  // creo arrai con dei valori
  var arrList = [
    'Invitare gli amici',
    'Ordinare la carne',
    'Comprare il vino',
    'Raccogliere le quote',
    'Trovare una location'
  ]

  //ciclo for dell’array per stampare a video gli elementi facendo un append dentro ul

  for( var i = 0; i < arrList.length; i++){
    var elemList = arrList[i];
    console.log(elemList);
    // creo una variabile che mi andrà a clonare gli 'li'
    var clonList = $('.template li').clone();
    //cerco la mia 'p' dentro 'li' una volta trovata la inserisco nella mia arrai
    $(clonList).find('.testo').append(elemList)
    //per renderla visibile la inserisco nella mia ul del DOM
    $('.container ul').append(clonList)
    //console.log(clonList);

    
  }

  // al click del cestino eliminare il parent
  $(document).on('click', '.fa-trash-alt', function(){
    $(this).parent('li').remove()
  })

  // intercettare il keyup dell’input di ENTER per aggiungere l’elemento alla lista e ripulire l’input
  $('.container input').keyup(function(event){
    //dopo aver inserito il mio testo premo'invio' il '.which' sa che 'invio'= 13
    if(event.which === 13){
      //creo una variabile per stabilire il mio val e gli spazi (.tri()) del testo
      var elemIns = $(this).val().trim()
      if(elemIns.length > 3){
     // creo una variabile che mi andrà a clonare gli 'li'
        var clonList = $('.template li').clone();
      //cerco la mia 'p' dentro 'li' una volta trovata la inserisco nella mia varabiali
        $(clonList).find('.testo').append(elemIns)
      //per renderla visibile la inserisco nella mia ul del DOM
        $('.container ul').append(clonList)
        // una volta premuto invio, cancello il testo digitato nell'input assegnado un val vuoto
        $(this).val("")
      }
    }

  })

  




/////////STESSO ESERCIZIO DI SOPRA MA RIFATTO PIU' VOLTE /////////

/*   for(var i = 0; i < arrList.length; i++){
    var elemLis = arrList[i]
    console.log(elemLis)


    var addElem = $('.template li').clone()
    $(addElem).find('.testo').append(elemLis);
    $('.container ul').append(addElem)
  }

  $(document).on('click','.fa-trash-alt',function(){
    $(this).parent().remove();
  })

  $('.container input').keyup(function(event){
    if(event.which === 13){
      var textIns = $(this).val().trim()
      if(textIns.length > 3){
        var addElem = $('.template li').clone()
        $(addElem).find('.testo').append(textIns);
        $('.container ul').append(addElem)
        $(this).val('')
      }
    }
  }) */

});

// prova
/* function colorRiga (){
  $('.container .lista-eventi li').each(function(index,element ){
    console.log('ciao');
    if( index % 2 ===0){
      $(element).addClass('yellow');
    }else{
      $(element).addClass('red');
    }
  })
} */