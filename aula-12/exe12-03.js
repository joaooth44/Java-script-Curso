var agora=new Date()
var diaSem=agora.getDay()

/**
 Domingo 0
 Segunda 1
 terca 2 
 quarta 3 
 quinta 4 
 sexta 5 
 sabado 6 
 */
switch(diaSem){
    case 0: 
        console.log("Domingo");
        break;
    case 1: 
        console.log("Segunda-Feira ")
        break
    case 2: 
        console.log("Terça-Feira ")
        break
    case 3: 
        console.log("Quarta-Feira")
        break
    case 4: 
        console.log("Quinta-Feira")
        break
    case 5: 
        console.log("Sexta-Feira")
        break
    case 6:
        console.log("Sabado")
        break
    default:
        console.log("Erro! dia Invalido")
        break
}
