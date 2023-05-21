function carregar(){

  var mgs = document.getElementById('msg')
  var img = document.getElementById('img')
  var data = new Date()
  var hora = data.getHours()
  var minutos = data.getMinutes()
  mgs.innerHTML = `Agora sao ${hora}:${minutos} horas`

  if (hora >= 0 && hora < 12){
    //Bom dia.
    img.src = './images/bomdia.png'
    document.body.style.background = '#edf5fa'
  }
  else if(hora >= 12 && hora < 18){
    //Boa Tarde
    img.src = './images/boatarde.png'
    document.body.style.background = '#f98903'
  }
  else{
    //Boa noite
    img.src = './images/boanoite.png'
    document.body.style.background = '#101010'
  }
}
