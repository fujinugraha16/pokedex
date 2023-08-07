"use client"

import { useState } from "react"
import Image from "next/image"

// data
import types from "@/data/types"

// components
import ButtonBadge from "@/components/ui/button-badge"
import PokemonCard from "@/components/ui/pokemon-card"
import Modal from "@/components/ui/modal"
import Badge from "@/components/ui/badge"
import ModalBackground from "@/components/ui/modal-background"
import BadgeTransparent from "@/components/ui/badge-transparent"

const Home = ({ pokemons, currentType }) => {
  const [showDetailPokemonModal, setShowDetailPokemonModal] = useState(false)
  const [pokemonIndex, setPokemonIndex] = useState(0)

  const handleTypeButton = (type) => {
    window.open(`?type=${type}`, "_self")
  }

  const handleClickPokemonCard = (index) => {
    setPokemonIndex(index)
    setShowDetailPokemonModal(true)
  }

  return (
    <>
      <div className="flex flex-col gap-10 w-full xl:w-[1366px] mx-auto py-10 px-6">
        <div className="flex justify-center items-center gap-3">
          <h3 className="font-bold text-5xl">Pokedéx</h3>

          <Image
            src="/pokedex.png"
            alt="Pokedex Logo"
            width={128}
            height={128}
            className="w-12 h-12 rotate-6"
          />
        </div>

        <div className="flex justify-center">
          <div className="flex flex-wrap justify-center gap-3 px-3 py-2 w-fit rounded-xl bg-secondary bg-opacity-5 shadow-xl shadow-secondary">
            {types.map((type) => (
              <ButtonBadge
                key={type}
                type={type}
                isActive={type === currentType}
                onClick={() => handleTypeButton(type)}
              />
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 x:gap-4">
          {pokemons.map((pokemon, index) => pokemon.name !== "type-null" && (
            <PokemonCard
              key={pokemon.id}
              pokemon={pokemon}
              onClick={() => handleClickPokemonCard(index)}
            />
          ))}
        </div>
      </div>

      {/* pokemon detail */}
      <Modal
        open={showDetailPokemonModal}
        toggle={() => setShowDetailPokemonModal(prevState => !prevState)}
      >
        <ModalBackground type={pokemons[pokemonIndex].types[0]}>
          <div className="text-white text-opacity-20 font-extrabold">
            <h4 className="text-3xl">
              #{pokemons[pokemonIndex].id}
            </h4>
            {pokemons[pokemonIndex].name.includes("-") ? (
              <>
                <h1 className="text-6xl capitalize">
                  {pokemons[pokemonIndex].name.split("-")[0]}
                </h1>
                <p className="text-4xl capitalize">{pokemons[pokemonIndex].name.split("-")[1]}</p>
              </>
            ) : (
              <h1 className="text-6xl capitalize">
                {pokemons[pokemonIndex].name}
              </h1>
            )}

            <div className="flex gap-2 mt-2">
              {pokemons[pokemonIndex].types.map(type => (
                <BadgeTransparent
                  key={type}
                  type={pokemons[pokemonIndex].types[0]}
                >
                  {type}
                </BadgeTransparent>
              ))}
            </div>

            <div className="flex justify-center items-center absolute top-0 left-0 w-full h-2/5">
              <Image
                src={pokemons[pokemonIndex].image}
                alt="Pokemon Image"
                width={256}
                height={256}
                className="min-w-1/2 max-w-full max-h-[240px] z-20"
              />

              <div
                id="pokemon-card-image"
                className="absolute -bottom-[45%] -right-16 w-1/2 -rotate-45 h-full opacity-10 bg-no-repeat"
              />
            </div>
          </div>
          
          <div className="absolute left-0 bottom-0 rounded-t-3xl bg-primary w-full h-3/5 px-6 pb-6 pt-3">
            <div className="flex flex-col gap-1 mt-5 ">
              <div className="flex">
                <p className="w-2/5 text-sm text-gray-500">Habitat</p>
                <p className="w-3/5 text-sm text-primary capitalize">{pokemons[pokemonIndex].habitat}</p>
              </div>
              <div className="flex">
                <p className="w-2/5 text-sm text-gray-500">Height</p>
                <p className="w-3/5 text-sm text-primary">{pokemons[pokemonIndex].height} ft</p>
              </div>
              <div className="flex">
                <p className="w-2/5 text-sm text-gray-500">Weight</p>
                <p className="w-3/5 text-sm text-primary">{pokemons[pokemonIndex].weight} lbs</p>
              </div>
              <div className="flex">
                <p className="w-2/5 text-sm text-gray-500">Shape</p>
                <p className="w-3/5 text-sm text-primary capitalize">{pokemons[pokemonIndex].shape}</p>
              </div>
              <div className="flex">
                <p className="w-2/5 text-sm text-gray-500">Egg Groups</p>
                <p className="w-3/5 text-sm text-primary capitalize">{pokemons[pokemonIndex].eggGroups.join(", ")}</p>
              </div>
              <div className="flex">
                <p className="w-2/5 text-sm text-gray-500">Damage Class</p>
                <p className="w-3/5 text-sm text-primary capitalize">{pokemons[pokemonIndex].damageClass}</p>
              </div>
            </div>

            <div className="flex flex-col gap-1">
              {pokemons[pokemonIndex].strongAgaints.length !== 0 && (
                <div className="flex flex-col gap-1 mt-3">
                  <p className="text-primary text-base font-semibold">Strong Against</p> 
                  <div className="flex flex-wrap gap-2">
                    {pokemons[pokemonIndex].strongAgaints.map(type => (
                      <Badge
                        key={type}
                        type={type}
                      />
                    ))}
                  </div>
                </div>
              )}

              {pokemons[pokemonIndex].weakAgaints.length !== 0 && (
                <div className="flex flex-col gap-1 mt-3">
                  <p className="text-primary text-base font-semibold">Weak Against</p> 
                  <div className="flex flex-wrap gap-2">
                    {pokemons[pokemonIndex].weakAgaints.length === 0 && "-"}
                    {pokemons[pokemonIndex].weakAgaints.map(type => (
                      <Badge
                        key={type}
                        type={type}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </ModalBackground>
      </Modal>
    </>
  )
}

export default Home