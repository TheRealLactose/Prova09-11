const Formulario = require("../pages/formulario/index")

describe("Teste de put", () => {

        it("Deve retornar um objeto com valores", () => {

            const dados = {
                name: "Eduardo",
                email: "du-eduardo10@hotmail.com",
                telephone: "459841528006"
                
            }
            

            expect(Formulario.data(dados)).toEqual(Formulario.addPost().then(alert("Enviado")));

        })

})
