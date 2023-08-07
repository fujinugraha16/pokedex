const BadgeTransparent = ({
  type,
  children,
  ...props
}) => {
  switch (type) {
    case "normal":
      return (
        <div
          {...props}
          className="bg-white bg-opacity-20 px-2 py-1 rounded-lg w-fit uppercase text-normal-darker text-xs font-semibold"
        >
          {children}
        </div>
      )
    case "fighting":
      return (
        <div
          {...props}
          className="bg-white bg-opacity-20 px-2 py-1 rounded-lg w-fit uppercase text-fighting-darker text-xs font-semibold"
        >
          {children}
        </div>
      )
    case "flying":
      return (
        <div
          {...props}
          className="bg-white bg-opacity-20 px-2 py-1 rounded-lg w-fit uppercase text-flying-darker text-xs font-semibold"
        >
          {children}
        </div>
      )
    case "poison":
      return (
        <div
          {...props}
          className="bg-white bg-opacity-20 px-2 py-1 rounded-lg w-fit uppercase text-poison-darker text-xs font-semibold"
        >
          {children}
        </div>
      )
    case "ground":
      return (
        <div
          {...props}
          className="bg-white bg-opacity-20 px-2 py-1 rounded-lg w-fit uppercase text-ground-darker text-xs font-semibold"
        >
          {children}
        </div>
      )
    case "rock":
      return (
        <div
          {...props}
          className="bg-white bg-opacity-20 px-2 py-1 rounded-lg w-fit uppercase text-rock-darker text-xs font-semibold"
        >
          {children}
        </div>
      )
    case "bug":
      return (
        <div
          {...props}
          className="bg-white bg-opacity-20 px-2 py-1 rounded-lg w-fit uppercase text-bug-darker text-xs font-semibold"
        >
          {children}
        </div>
      )
    case "ghost":
      return (
        <div
          {...props}
          className="bg-white bg-opacity-20 px-2 py-1 rounded-lg w-fit uppercase text-ghost-darker text-xs font-semibold"
        >
          {children}
        </div>
      )
    case "steel":
      return (
        <div
          {...props}
          className="bg-white bg-opacity-20 px-2 py-1 rounded-lg w-fit uppercase text-steel-darker text-xs font-semibold"
        >
          {children}
        </div>
      )
    case "fire":
      return (
        <div
          {...props}
          className="bg-white bg-opacity-20 px-2 py-1 rounded-lg w-fit uppercase text-fire-darker text-xs font-semibold"
        >
          {children}
        </div>
      )
    case "water":
      return (
        <div
          {...props}
          className="bg-white bg-opacity-20 px-2 py-1 rounded-lg w-fit uppercase text-water-darker text-xs font-semibold"
        >
          {children}
        </div>
      )
    case "grass":
      return (
        <div
          {...props}
          className="bg-white bg-opacity-20 px-2 py-1 rounded-lg w-fit uppercase text-grass-darker text-xs font-semibold"
        >
          {children}
        </div>
      )
    case "electric":
      return (
        <div
          {...props}
          className="bg-white bg-opacity-20 px-2 py-1 rounded-lg w-fit uppercase text-electric-darker text-xs font-semibold"
        >
          {children}
        </div>
      )
    case "psychic":
      return (
        <div
          {...props}
          className="bg-white bg-opacity-20 px-2 py-1 rounded-lg w-fit uppercase text-psychic-darker text-xs font-semibold"
        >
          {children}
        </div>
      )
    case "ice":
      return (
        <div
          {...props}
          className="bg-white bg-opacity-20 px-2 py-1 rounded-lg w-fit uppercase text-ice-darker text-xs font-semibold"
        >
          {children}
        </div>
      )
    case "dragon":
      return (
        <div
          {...props}
          className="bg-white bg-opacity-20 px-2 py-1 rounded-lg w-fit uppercase text-dragon-darker text-xs font-semibold"
        >
          {children}
        </div>
      )
    case "dark":
      return (
        <div
          {...props}
          className="bg-white bg-opacity-20 px-2 py-1 rounded-lg w-fit uppercase text-dark-darker text-xs font-semibold"
        >
          {children}
        </div>
      )
    case "fairy":
      return (
        <div
          {...props}
          className="bg-white bg-opacity-20 px-2 py-1 rounded-lg w-fit uppercase text-fairy-darker text-xs font-semibold"
        >
          {children}
        </div>
      )
    default:
      break;
  }
}

export default BadgeTransparent