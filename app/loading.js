import Image from "next/image";

// data
import types from "@/data/types";

// components
import ButtonBadge from "@/components/ui/button-badge";

export default function Loading() {
  return (
    <div className="flex flex-col items-center gap-10 w-full xl:w-[1366px] mx-auto py-10 px-6">
      <div className="flex justify-center items-center gap-3">
        <h3 className="font-semibold text-5xl">Pokedéx</h3>

        <Image
          src="/pokedex.png"
          alt="Pokedex Logo"
          width={128}
          height={128}
          className="w-12 h-12 rotate-6"
        />
      </div>

      <div className="flex flex-wrap justify-center gap-3 px-3 py-2 w-fit rounded-xl bg-secondary bg-opacity-5 shadow-xl shadow-secondary">
        {types.map((type) => (
          <ButtonBadge
            key={type}
            type={type}
            isActive={false}
          />
        ))}
      </div>

      <div className="flex gap-2 items-center">
        <h4 className="text-3xl">Cathing &apos;em all ...</h4>
        <div className="animate-bounce">
          <Image
            src="/pokeball-color.png"
            alt="Pokedex Color Logo"
            width={128}
            height={128}
            className="w-8 h-8 animate-spin"
          />
        </div>
      </div>
    </div>
  )
}