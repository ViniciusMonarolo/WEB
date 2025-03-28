function $(id){
    return document.getElementById(id)
}

const pokemonNameInput = $("pokemonName")
const searchButton = $("searchButton")
const pokemonNameDisplay = $("pokemonNameDisplay")
const pokemonImage = $("pokemonImage")
const pokemonType = $("pokemonType")
const pokemonHeight = $("pokemonHeight")
const pokemonWeight = $("pokemonWeight")


searchButton.addEventListener("click", async() => {
    const pokemonName = pokemonNameInput.value.toLowerCase()

    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)

        if(!response.ok){
            throw new Error(`Não encontrado: ${response.status}`)
        }

        const data = await response.json()
        pokemonNameDisplay.textContent = data.name.toUpperCase()
        pokemonImage.src = data.sprites.other.showdown.front_default

        pokemonType.textContent = `Tipo: ${data.types.map(
            type => type.type.name
        ).join(", ")}`

        pokemonHeight.textContent = `Altura: ${data.height /10}m`
        pokemonWeight.textContent = `Peso: ${data.weight /10}kg`

    } catch (error) {
        alert(`Erro ao buscar Pokémon: ${error}`)
        
    }
})