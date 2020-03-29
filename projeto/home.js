var e = 15
function mudar(ponto){
    var n = document.getElementById('ponto')
    
    n.style.top = "250px"
    n.style.left = e + 'px'
    e = e + 10
    if (e > 570){
        alert('Você venceu!')
    }
}


