//Exercicio 1

function checaTriangulo(a: number, b: number, c: number): string{
    if (a !== b && b !== c){
        return("Escaleno")
    } else if(a === b && b === c){
        return("Equilatero")
    } else {
        return ("Isoceles");
    }
}

console.log(checaTriangulo(2,2,1));

// Exercicio 2 
function imprimeCoresFavoritas(): void{
    const cor1: string = "Azul";
    const cor2: string = "Vermelho";
    const cor3: string = "Verde";
    console.log([cor1, cor2, cor3]);
}

imprimeCoresFavoritas();

// Exercicio 3
function checaAnoBissexto(ano: number): boolean{
    const cond1: boolean = ano % 400 === 0;
    const cond2: boolean = (ano % 4 === 0) && (ano % 100 !== 0);
    return cond1 || cond2
}

console.log(checaAnoBissexto(2024));

function comparaDoisNumeros(num1: number, num2: number): number{
    let maiorNumero: number;
    let menorNumero: number;

    if (num1 > num2) {
        maiorNumero = num1;
        menorNumero = num2;
    } else{
        maiorNumero = num2;
        menorNumero = num1;
    }

    const diferenca: number = maiorNumero - menorNumero;

    return diferenca
}

console.log(comparaDoisNumeros(4,2));

function checaRenovacaoRG(anoAtual: number, anoNascimento: number, anoEmissao: number){
    let idade: number = anoAtual - anoNascimento;
    let tempoCarteira: number = anoAtual- anoEmissao;

    if(idade<= 20){
        return tempoCarteira >= 5 ? "Passou dos 5 anos precisa renovar" : "ainda não passou os 5 anos"; 
    } else if (idade >= 20 || idade <= 50){
        return tempoCarteira >= 10 ? "Passou dos 10 anos precisa renovar" : "ainda não passou os 5 anos";
    } else if (idade > 50) {
        return tempoCarteira >= 15 ? "Passou dos 10 anos precisa renovar" : "ainda não passou os 15 anos";
    } else
}

console.log(checaRenovacaoRG(2024, 2006, 2020));