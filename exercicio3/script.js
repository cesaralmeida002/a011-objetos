const pokemon1 = {
	nome: "Bulbasaur",
	tipo: "Grama",
	nivel: 5
}
    console.log(pokemon1)

/*a) Crie uma cópia do objeto, acima, mantendo a estrutura, 
mas trocando **`nome`** por “Squirtle” e **`tipo`** por “Água”*/

const Pokemon2 = {...pokemon1}
    Pokemon2.nome = "Squirtle",
    Pokemon2.tipo = "Água" 
        console.log(Pokemon2)

/*b) No objeto original, adicione mais uma propriedade, chamada `ataques`. Esta propriedade deve guardar um **array** de objetos com a estrutura abaixo.
 Inicie a propriedade como um array vazio, e crie o objeto abaixo utilizando `**push()**` */ 
 
 pokemon1.ataques = []
    pokemon1.ataques.push(
    {nome: "Investida",
    dano: 40,
    tipo: "normal",
    precisao: 100})

    console.log("pokemon 1:".pokemon1)
    
/*c) Na cópia do objeto original, adicione a propriedade **`ataques`** 
a partir do **espalhamento** da propriedade criada para o objeto original;*/    
    Pokemon2.ataques = [...pokemon1.ataques]

/*d) para o objeto original, adicione o ataque **“Folha Navalha”,** 
com **45 de dano**, **100 de precisão**, e de tipo **“Grama”**;*/    
    pokemon1.ataques.push({nome:"Folha Navalha", dano: 45, tipo:"Grama", precisao: 100})

/*e) para a cópia, crie o ataque **“Jato de Água”**, 
com **40 de dano**, **100 de precisão**, e do tipo **“Água”**;*/
    Pokemon2.ataques.push({nome:"Jato de Àgua", dano: 40, tipo:"Àgua", precisao:100 })

//f) Imprima os dois objetos no console.

        console.log(" ")
        console.log("Pokedex 1: ", pokemon1)
        console.log("Pokedex 2: ", Pokemon2)