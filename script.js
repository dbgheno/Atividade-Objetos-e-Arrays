
// 1. Crie um objeto em JavaScript para colocar dois atributos de um produto. Atribua o preço e descrição do produto com o valor “90” e a descrição com o valor “Mouse”. Mostre no console o valor dos dois atributos.

const objeto1 = {
    preco: 90,
    descricao: 'mouse'
}
document.write(`1. O preço do ${objeto1.descricao} é R$ ${objeto1.preco.toFixed(2).replace(".",",")}<br><br>`)



// 2. Crie um objeto em JavaScript para colocar 5 atributos de um notebook. Atribua os seguintes atributos:
// Processador = i7
// Memória = 16GB
// Preço = 5000
// HD = 1TB
// SSD = 256GB
// Por fim, mostre o nome e valor de cada atributo no console, exatamente como está na atividade.

const notebook = {
    processador: 'i7',
    memoria: '16GB',
    preco: '5000',
    hd: '1TB',
    ssd: '256GB'
}
document.write(`
    2. Os atributos do Notebook são: <br>
    Processador = ${notebook.processador}<br>
    Memória = ${notebook.memoria}<br>
    Preço = ${notebook.preco}<br>
    HD = ${notebook.hd}<br>
    SSD = ${notebook.ssd}<br><br>
`)



// 3. Crie um objeto para colocar nome e duas notas. Atribua nome e duas notas para o primeiro objeto, que será nosso primeiro aluno. Agora crie mais um objeto para colocar informações do nosso segundo aluno. Mostre as informações de cada aluno no console. Mostre também a média do primeiro aluno e a média do segundo aluno. Por fim mostre a média desta turma de 2 alunos.

const alunos = [
    { nome: 'Daniel',     nota1: 9,  nota2: 7 },
    { nome: 'Alexsandro', nota1: 8,  nota2: 9 }
]

let somaNotas = 0
document.write(`3. Alunos:<br>`)
alunos.forEach(function(alunos, i){ 
    document.write(`
        ${i+1}º aluno: ${alunos.nome}<br>
        Notas 1: ${alunos.nota1}<br>
        Notas 2: ${alunos.nota2}<br>
        Média: ${(alunos.nota1 + alunos.nota2)/2}<br>
    <br>`)
    somaNotas += alunos.nota1 + alunos.nota2
})
document.write(`Média da turma: ${somaNotas/4}<br><br>`)







// 4. Crie um cadastro de pessoas onde o usuário informe o nome, idade e se está trabalhando ou não, se a pessoa estiver trabalhando pergunte para ele o salário que está ganhando. Para cada pessoa cadastrada, pergunte ao usuário se ele deseja continuar cadastrando ou não. No final, mostre as pessoas que estão desempregadas, as pessoas que estão empregadas separadas pelas que ganham mais que 2500 e menos que 2500.

// Exemplo de resultado:
// Pessoas desempregadas:
// Nome: Alessandro, Idade: 28
// Nome: Alessandro, Idade: 28

// Pessoas empregadas com salários menores que 2500:
// Nome: Alessandro, Idade: 28, Salário: 1500
// Nome: Alessandro, Idade: 28, Salário: 2400

// Pessoas empregadas com salários maiores que 2500:
// Nome: Alessandro, Idade: 28, Salário: 2700
// Nome: Alessandro, Idade: 28, Salário: 3000


const cadastroPessoas = []

continuar = true
while(continuar) {
    const pessoa = {}

    pessoa.nome = prompt(`4. Digite o nome da pessoa:`),
    pessoa.idade = Number(prompt(`4. Digite a idade dela:`))

    const trabalhando = confirm(`4. Ela está trabalhando?`)
    if (trabalhando) {
        pessoa.trabalhando = 'Sim'
        pessoa.salario = Number(prompt(`4. Qual o seu salário?`))
    } else {
        pessoa.trabalhando = 'Não'
    }

    cadastroPessoas.push(pessoa)

    continuar = confirm(`4. Deseja cadastrar mais alguém?`)
}


document.write(`4. Cadastro de pessoas:`)
document.write(`<br>Lista de pessoas desempregadas:<br>`)
for (let pessoa of cadastroPessoas) {
    if (pessoa.trabalhando === 'Não') {
        document.write(`Nome: ${pessoa.nome}, Idade: ${pessoa.idade}<br>`)
    }
}

document.write(`<br>Lista de pessoas empregadas com salário menor que R$ 2.500,00:<br>`)
for (let pessoa of cadastroPessoas) {
    if (pessoa.trabalhando === 'Sim' && pessoa.salario <= 2500) {
        document.write(`Nome: ${pessoa.nome}, Idade: ${pessoa.idade}, Salário: R$ ${pessoa.salario.toFixed(2)}<br>`)
    }
}

document.write(`<br>Lista de pessoas empregadas com salário maior que R$ 2.500,00:<br>`)
for (let pessoa of cadastroPessoas) {
    if (pessoa.trabalhando === 'Sim' && pessoa.salario >= 2500) {
        document.write(`Nome: ${pessoa.nome}, Idade: ${pessoa.idade}, Salário: R$ ${pessoa.salario.toFixed(2)}<br>`)
    }
}





