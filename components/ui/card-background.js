const CardBackground = ({
  type,
  children,
  ...props
}) => {
  switch (type) {
    case "normal":
      return (
        <div
          {...props}
          className="relative rounded-xl p-4 w-full md:w-full xl:w-[300px] h-[140px] lg:h-[150px] bg-normal-darker shadow-2xl shadow-normal-darker hover:scale-105 hover:z-10 cursor-pointer"
        >
          {children}
        </div>
      )
    case "fighting":
      return (
        <div
          {...props}
          className="relative rounded-xl p-4 w-full md:w-full xl:w-[300px] h-[140px] lg:h-[150px] bg-fighting-darker shadow-2xl shadow-fighting-darker hover:scale-105 hover:z-10 cursor-pointer"
        >
          {children}
        </div>
      )
    case "flying":
      return (
        <div
          {...props}
          className="relative rounded-xl p-4 w-full md:w-full xl:w-[300px] h-[140px] lg:h-[150px] bg-flying-darker shadow-2xl shadow-flying-darker hover:scale-105 hover:z-10 cursor-pointer"
        >
          {children}
        </div>
      )
    case "poison":
      return (
        <div
          {...props}
          className="relative rounded-xl p-4 w-full md:w-full xl:w-[300px] h-[140px] lg:h-[150px] bg-poison-darker shadow-2xl shadow-poison-darker hover:scale-105 hover:z-10 cursor-pointer"
        >
          {children}
        </div>
      )
    case "ground":
      return (
        <div
          {...props}
          className="relative rounded-xl p-4 w-full md:w-full xl:w-[300px] h-[140px] lg:h-[150px] bg-ground-darker shadow-2xl shadow-ground-darker hover:scale-105 hover:z-10 cursor-pointer"
        >
          {children}
        </div>
      )
    case "rock":
      return (
        <div
          {...props}
          className="relative rounded-xl p-4 w-full md:w-full xl:w-[300px] h-[140px] lg:h-[150px] bg-rock-darker shadow-2xl shadow-rock-darker hover:scale-105 hover:z-10 cursor-pointer"
        >
          {children}
        </div>
      )
    case "bug":
      return (
        <div
          {...props}
          className="relative rounded-xl p-4 w-full md:w-full xl:w-[300px] h-[140px] lg:h-[150px] bg-bug-darker shadow-2xl shadow-bug-darker hover:scale-105 hover:z-10 cursor-pointer"
        >
          {children}
        </div>
      )
    case "ghost":
      return (
        <div
          {...props}
          className="relative rounded-xl p-4 w-full md:w-full xl:w-[300px] h-[140px] lg:h-[150px] bg-ghost-darker shadow-2xl shadow-ghost-darker hover:scale-105 hover:z-10 cursor-pointer"
        >
          {children}
        </div>
      )
    case "steel":
      return (
        <div
          {...props}
          className="relative rounded-xl p-4 w-full md:w-full xl:w-[300px] h-[140px] lg:h-[150px] bg-steel-darker shadow-2xl shadow-steel-darker hover:scale-105 hover:z-10 cursor-pointer"
        >
          {children}
        </div>
      )
    case "fire":
      return (
        <div
          {...props}
          className="relative rounded-xl p-4 w-full md:w-full xl:w-[300px] h-[140px] lg:h-[150px] bg-fire-darker shadow-2xl shadow-fire-darker hover:scale-105 hover:z-10 cursor-pointer"
        >
          {children}
        </div>
      )
    case "water":
      return (
        <div
          {...props}
          className="relative rounded-xl p-4 w-full md:w-full xl:w-[300px] h-[140px] lg:h-[150px] bg-water-darker shadow-2xl shadow-water-darker hover:scale-105 hover:z-10 cursor-pointer"
        >
          {children}
        </div>
      )
    case "grass":
      return (
        <div
          {...props}
          className="relative rounded-xl p-4 w-full md:w-full xl:w-[300px] h-[140px] lg:h-[150px] bg-grass-darker shadow-2xl shadow-grass-darker hover:scale-105 hover:z-10 cursor-pointer"
        >
          {children}
        </div>
      )
    case "electric":
      return (
        <div
          {...props}
          className="relative rounded-xl p-4 w-full md:w-full xl:w-[300px] h-[140px] lg:h-[150px] bg-electric-darker shadow-2xl shadow-electric-darker hover:scale-105 hover:z-10 cursor-pointer"
        >
          {children}
        </div>
      )
    case "psychic":
      return (
        <div
          {...props}
          className="relative rounded-xl p-4 w-full md:w-full xl:w-[300px] h-[140px] lg:h-[150px] bg-psychic-darker shadow-2xl shadow-psychic-darker hover:scale-105 hover:z-10 cursor-pointer"
        >
          {children}
        </div>
      )
    case "ice":
      return (
        <div
          {...props}
          className="relative rounded-xl p-4 w-full md:w-full xl:w-[300px] h-[140px] lg:h-[150px] bg-ice-darker shadow-2xl shadow-ice-darker hover:scale-105 hover:z-10 cursor-pointer"
        >
          {children}
        </div>
      )
    case "dragon":
      return (
        <div
          {...props}
          className="relative rounded-xl p-4 w-full md:w-full xl:w-[300px] h-[140px] lg:h-[150px] bg-dragon-darker shadow-2xl shadow-dragon-darker hover:scale-105 hover:z-10 cursor-pointer"
        >
          {children}
        </div>
      )
    case "dark":
      return (
        <div
          {...props}
          className="relative rounded-xl p-4 w-full md:w-full xl:w-[300px] h-[140px] lg:h-[150px] bg-dark-darker shadow-2xl shadow-dark-darker hover:scale-105 hover:z-10 cursor-pointer"
        >
          {children}
        </div>
      )
    case "fairy":
      return (
        <div
          {...props}
          className="relative rounded-xl p-4 w-full md:w-full xl:w-[300px] h-[140px] lg:h-[150px] bg-fairy-darker shadow-2xl shadow-fairy-darker hover:scale-105 hover:z-10 cursor-pointer"
        >
          {children}
        </div>
      )
    default:
      break;
  }
}

export default CardBackground