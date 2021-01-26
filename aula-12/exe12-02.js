var agora=new Date();
var minutes=new Date();
var day=new Date(); var month=new Date(); var year=new Date();
var dia = day.getDay();var mes= month.getDay(); var ano=year.getFullYear()
var minuto=minutes.getMinutes();
var hour=agora.getHours();

console.log(`agora sao ${hour} horas e ${minuto} minutos `);
console.log(`do dia ${dia}/${mes}/${ano}`)
if(hour>5.30 && hour< 13.00){
    console.log('Bom dia!!')
}
else if (hour>13.00 && hour < 18.00){
console.log('Boa tarde!!')
}
else if(hour>=24){
console.log('Horario inexistente')
}
else{
    console.log('boa noite ')
}