var n1=prompt("Digite o primeiro número: ");
var operacao=prompt("Digite a operação (+,-,*,/,%): ");
var n2=prompt("Digite o segundo número: ");

if (operacao=="+") {
    var res=parseFloat(n1)+parseFloat(n2);
    console.log('A soma de '+n1+' e '+n2+' é: '+parseFloat(res.toFixed(1)));

}else if (operacao=="-") {
    var res=parseFloat(n1)-parseFloat(n2);
    console.log('A subtração de '+n1+' e '+n2+' é: '+parseFloat(res.toFixed(1)));

}else if (operacao=="*") {
    var res=parseFloat(n1)*parseFloat(n2);
    console.log('A multiplicação de '+n1+' e '+n2+' é: '+parseFloat(res.toFixed(1)));

}else if (operacao=="/") {
    var res=parseFloat(n1)/parseFloat(n2);
    console.log('A divisão de '+n1+' e '+n2+' é: '+parseFloat(res.toFixed(1)));

}else {
    var res=parseFloat(n1)%parseFloat(n2);
    console.log('O resto de '+n1+' dividido '+n2+' é: '+parseFloat(res.toFixed(1)));

}
