// data
import types from "@/data/types"

// views
import Home from "@/views/Home"

const getPokemonsByType = async (id) => {
  try {
    const res = await fetch(`https://pokeapi.co/api/v2/type/${id}`)
    const { name: typeName, pokemon: pokemonResult, damage_relations, move_damage_class } = await res.json()

    const pokemons = []

    for (let i = 0; i < pokemonResult.length; i++) {
      const res = await fetch(pokemonResult[i].pokemon.url)
      const { id, name, sprites, types, species, height, weight } = await res.json()

      let strongAgaints = damage_relations.double_damage_to.map(({ name }) => name)
      let weakAgaints = damage_relations.double_damage_from.map(({ name }) => name)
      
      if (types.length > 1) {
        const updatedTypes = types.filter(item => item.type.name !== typeName)

        const res = await fetch(updatedTypes[0].type.url)
        const { damage_relations } = await res.json()
        
        strongAgaints = [...new Set([...strongAgaints, ...damage_relations.double_damage_to.map(({ name }) => name)])]
        weakAgaints = [...new Set([...weakAgaints, ...damage_relations.double_damage_from.map(({ name }) => name)])]
      }

      let habitat = "-"
      let shape = "-"
      let eggGroups = []

      if (species.url) {
        const res = await fetch(species.url)
        const { egg_groups, habitat: habitatResult, shape: shapeResult } = await res.json()

        habitat = habitatResult ? habitatResult.name : '-'
        shape = shapeResult ? shapeResult.name : '-'
        eggGroups = egg_groups.map(({ name }) => name)
      }

      if (sprites.other.dream_world.front_default || sprites.other["official-artwork"].front_default || sprites.other["official-artwork"].front_shiny || sprites.front_shiny) {
        pokemons.push({
          id,
          name,
          image: sprites.other.dream_world.front_default || sprites.other["official-artwork"].front_default || sprites.other["official-artwork"].front_shiny || sprites.front_shiny,
          types: types.map(item => item.type.name),
          height,
          weight,
          habitat,
          shape,
          eggGroups,
          damageClass: move_damage_class ? move_damage_class.name : "-",
          strongAgaints,
          weakAgaints,
        })
      }
    }

    return pokemons
  } catch (err) {
    throw err
  }
}

export default async function HomePage({ searchParams }) {
  const { type } = searchParams
  const id = type ? types.indexOf(type) + 1 : 1
  
  const pokemons = await getPokemonsByType(id)

  return (
    <Home
      pokemons={pokemons}
      currentType={type || "normal"}
    />
  )
}
