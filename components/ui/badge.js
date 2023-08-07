const Badge = ({
  type,
  ...props
}) => {
  switch (type) {
    case "normal":
      return (
        <span
          {...props}
          className="inline-flex items-center rounded-lg bg-normal px-2 py-1 text-xs font-medium text-white capitalize"
        >
          {type}
        </span>
      )
    case "fighting":
      return (
        <span
          {...props}
          className="inline-flex items-center rounded-lg bg-fighting px-2 py-1 text-xs font-medium text-white capitalize"
        >
          {type}
        </span>
      )
    case "flying":
      return (
        <span
          {...props}
          className="inline-flex items-center rounded-lg bg-flying px-2 py-1 text-xs font-medium text-white capitalize"
        >
          {type}
        </span>
      )
    case "poison":
      return (
        <span
          {...props}
          className="inline-flex items-center rounded-lg bg-poison px-2 py-1 text-xs font-medium text-white capitalize"
        >
          {type}
        </span>
      )
    case "ground":
      return (
        <span
          {...props}
          className="inline-flex items-center rounded-lg bg-ground px-2 py-1 text-xs font-medium text-white capitalize"
        >
          {type}
        </span>
      )
    case "rock":
      return (
        <span
          {...props}
          className="inline-flex items-center rounded-lg bg-rock px-2 py-1 text-xs font-medium text-white capitalize"
        >
          {type}
        </span>
      )
    case "bug":
      return (
        <span
          {...props}
          className="inline-flex items-center rounded-lg bg-bug px-2 py-1 text-xs font-medium text-white capitalize"
        >
          {type}
        </span>
      )
    case "ghost":
      return (
        <span
          {...props}
          className="inline-flex items-center rounded-lg bg-ghost px-2 py-1 text-xs font-medium text-white capitalize"
        >
          {type}
        </span>
      )
    case "steel":
      return (
        <span
          {...props}
          className="inline-flex items-center rounded-lg bg-steel px-2 py-1 text-xs font-medium text-white capitalize"
        >
          {type}
        </span>
      )
    case "fire":
      return (
        <span
          {...props}
          className="inline-flex items-center rounded-lg bg-fire px-2 py-1 text-xs font-medium text-white capitalize"
        >
          {type}
        </span>
      )
    case "water":
      return (
        <span
          {...props}
          className="inline-flex items-center rounded-lg bg-water px-2 py-1 text-xs font-medium text-white capitalize"
        >
          {type}
        </span>
      )
    case "grass":
      return (
        <span
          {...props}
          className="inline-flex items-center rounded-lg bg-grass px-2 py-1 text-xs font-medium text-white capitalize"
        >
          {type}
        </span>
      )
    case "electric":
      return (
        <span
          {...props}
          className="inline-flex items-center rounded-lg bg-electric px-2 py-1 text-xs font-medium text-white capitalize"
        >
          {type}
        </span>
      )
    case "psychic":
      return (
        <span
          {...props}
          className="inline-flex items-center rounded-lg bg-psychic px-2 py-1 text-xs font-medium text-white capitalize"
        >
          {type}
        </span>
      )
    case "ice":
      return (
        <span
          {...props}
          className="inline-flex items-center rounded-lg bg-ice px-2 py-1 text-xs font-medium text-white capitalize"
        >
          {type}
        </span>
      )
    case "dragon":
      return (
        <span
          {...props}
          className="inline-flex items-center rounded-lg bg-dragon px-2 py-1 text-xs font-medium text-white capitalize"
        >
          {type}
        </span>
      )
    case "dark":
      return (
        <span
          {...props}
          className="inline-flex items-center rounded-lg bg-dark px-2 py-1 text-xs font-medium text-white capitalize"
        >
          {type}
        </span>
      )
    case "fairy":
      return (
        <span
          {...props}
          className="inline-flex items-center rounded-lg bg-fairy px-2 py-1 text-xs font-medium text-white capitalize"
        >
          {type}
        </span>
      )
    default:
      break;
  }
}

export default Badge