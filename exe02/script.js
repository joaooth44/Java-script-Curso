function carregar(){
var min = new Date();
var msg=window.document.getElementById('msg');
var img=window.document.getElementById('imagem');
var data = new Date();
var min = new Date();
var hora=data.getHours();
var minutos=data.getMinutes();
msg.innerHTML=`Agora sao ${hora} horas e ${minutos} minutos`
if(hora>=0 && hora <12){
//BOM DIA 
    img.src="manha.png"
    document.body.style.background='orange'
}
else if (hora>=12 && hora <18){
    //BOA TARDE 
    img.src="tarde.png"
    document.body.style.background='#63DF88'

}
else {
    //BOA NOITE
    img.src="noite.png"
    document.body.style.background='#08043C'

}


}