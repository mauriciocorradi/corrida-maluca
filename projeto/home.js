var e = 200

function mudar(ponto){
    var n = document.getElementById('ponto')
    n.style.left = e + 'px'
    e = e + 10    
    if (e > 700){
        alert('Verde venceu!')
    }
}

window.onload = initPage; //Inicia a função ao carregar a pagina.
function initPage() { 
    var f = 198
    var m = document.getElementById('ponto01')
      setInterval( function() {  //roda o loop sem parar
      f=f+10
      m.style.left = f + 'px';
      if (f > 690) {
        alert('Vermelho venceu!')
    }
                               }, 200 );
  }

  