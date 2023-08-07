"use client"
import Image from "next/image"
import { useRouter } from "next/navigation"

export default function NotFoundPage() {
  const router = useRouter()

  return (
    <div className="flex justify-center items-center w-[100vw] h-[100vh]">
      <div className="flex flex-col gap-4 items-center">
        <div className="flex items-center gap-2">
          <Image
            src="/pokedex-not-found.png"
            alt="Pokedex Not Found Image"
            width={128}
            height={128}
            className="w-10 h-10"
          />
          <h2 className="text-primary text-[28px] sm:text-[32px] text-center">404 | Page not found</h2>
        </div>
        <button
          className="flex justify-center items-center px-3 gap-1 border border-pokedex-secondary hover:bg-pokedex-secondary rounded-lg w-[250px] h-10 text-sm text-pokedex-secondary hover:text-white font-medium"
          onClick={() => router.push("/")}
        >
          Back to Main Page
        </button>
      </div>
    </div>
  )
}