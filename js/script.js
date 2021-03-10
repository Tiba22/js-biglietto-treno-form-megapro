

var generaBtn = document.getElementById('genera');
var annullaBtn = document.getElementById('annulla')
var costo = 0.21;
var costoTotale = 0;

generaBtn.addEventListener('click', function(){

  var name = document.getElementById('name').value;
  // console.log(name);

  var distanza = parseInt(document.getElementById('distance').value);
  // console.log(distanza);

  var eta = document.getElementById('age').value;
  // console.log(eta);

  console.log(name, distanza, eta);

  if (name !== '' && distanza > 0 && eta !== ''){

    costoTotale = costo * distanza;

    //Blocco else if per i vari sconti
    if (eta == 1) {
      //console.log('minorenne', eta);
      var sconto = costoTotale * 0.20;

      costoTotale = costoTotale - sconto;

    } else if (eta == 3){
      //console.log('Over 65', eta);
      var sconto = costoTotale * 0.40;

      costoTotale = costoTotale - sconto;

    }

    document.getElementById('costo-totale').innerHTML = costoTotale + ' €';

    var cp = Math.floor(Math.random() * (100000-90000)) + 90000;







  } else {

    console.log('nah');

  }

});



annullaBtn.addEventListener('click', function(){

});
