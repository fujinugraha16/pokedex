import Image from "next/image"

// components
import CardBackground from "./card-background"
import Badge from "./badge"

const PokemonCard = ({ pokemon, ...props }) => (
  <CardBackground
    {...props}
    type={pokemon.types[0]}
  >
    <Image
      src={pokemon.image}
      alt="Pokemon Image"
      width={128}
      height={128}
      className="absolute -top-3 -right-3 w-1/3 xs:w-2/5 sm:w-1/3 lg:w-2/5 xl:w-1/2 h-[90%] z-10"
    />

    <div className="flex flex-col gap-2">
      <div className="text-white font-semibold">
        <p className="text-sm">#{pokemon.id}</p>
        {pokemon.name.includes("-") ? (
          <>
            <h5 className="text-xl capitalize">
              {pokemon.name.split("-")[0]}
            </h5>
            <p className="text-sm capitalize">{pokemon.name.split("-")[1]}</p>
          </>
        ) : (
          <h5 className="text-xl capitalize">
            {pokemon.name}
          </h5>
        )}
      </div>
      <div className="flex gap-1">
        {pokemon.types.map(type => (
          <Badge
            key={type}
            type={type}
          />
        ))}
      </div>
    </div>

    <div
      id="pokemon-card-image"
      className="absolute bottom-0 right-0 w-1/2 h-full md:h-2/3 opacity-20 bg-no-repeat"
    />
  </CardBackground>
)

export default PokemonCard