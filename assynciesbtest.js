describe('Testando uma requisição', () => {
    test('requisição com sucesso', async() => {
        const response = await fetch('http://localhost:3000/alunos/1')
        const aluno = await response.json()
        console.log('O aluno é: ', aluno.nome)
        expect(aluno.nome).toEqual('Maria')
    })
 })