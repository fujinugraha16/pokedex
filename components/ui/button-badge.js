const ButtonBadge = ({
  type,
  isActive,
  ...props
}) => {
  switch (type) {
    case "normal":
      return (
        <span
          {...props}
          className={isActive 
            ? "cursor-pointer inline-flex items-center rounded-lg bg-normal px-2 py-1 text-xs font-medium text-white capitalize ring-1 ring-inset ring-normal"
            : "cursor-pointer inline-flex items-center rounded-lg bg-white px-2 py-1 text-xs font-medium text-normal capitalize ring-1 ring-inset ring-normal hover:bg-normal hover:text-white"
          }
        >
          {type}
        </span>
      )
    case "fighting":
      return (
        <span
          {...props}
          className={isActive 
            ? "cursor-pointer inline-flex items-center rounded-lg bg-fighting px-2 py-1 text-xs font-medium text-white capitalize ring-1 ring-inset ring-fighting"
            : "cursor-pointer inline-flex items-center rounded-lg bg-white px-2 py-1 text-xs font-medium text-fighting capitalize ring-1 ring-inset ring-fighting hover:bg-fighting hover:text-white"
          }
        >
          {type}
        </span>
      )
    case "flying":
      return (
        <span
          {...props}
          className={isActive 
            ? "cursor-pointer inline-flex items-center rounded-lg bg-flying px-2 py-1 text-xs font-medium text-white capitalize ring-1 ring-inset ring-flying"
            : "cursor-pointer inline-flex items-center rounded-lg bg-white px-2 py-1 text-xs font-medium text-flying capitalize ring-1 ring-inset ring-flying hover:bg-flying hover:text-white"
          }
        >
          {type}
        </span>
      )
    case "poison":
      return (
        <span
          {...props}
          className={isActive 
            ? "cursor-pointer inline-flex items-center rounded-lg bg-poison px-2 py-1 text-xs font-medium text-white capitalize ring-1 ring-inset ring-poison"
            : "cursor-pointer inline-flex items-center rounded-lg bg-white px-2 py-1 text-xs font-medium text-poison capitalize ring-1 ring-inset ring-poison hover:bg-poison hover:text-white"
          }
        >
          {type}
        </span>
      )
    case "ground":
      return (
        <span
          {...props}
          className={isActive 
            ? "cursor-pointer inline-flex items-center rounded-lg bg-ground px-2 py-1 text-xs font-medium text-white capitalize ring-1 ring-inset ring-ground"
            : "cursor-pointer inline-flex items-center rounded-lg bg-white px-2 py-1 text-xs font-medium text-ground capitalize ring-1 ring-inset ring-ground hover:bg-ground hover:text-white"
          }
        >
          {type}
        </span>
      )
    case "rock":
      return (
        <span
          {...props}
          className={isActive 
            ? "cursor-pointer inline-flex items-center rounded-lg bg-rock px-2 py-1 text-xs font-medium text-white capitalize ring-1 ring-inset ring-rock"
            : "cursor-pointer inline-flex items-center rounded-lg bg-white px-2 py-1 text-xs font-medium text-rock capitalize ring-1 ring-inset ring-rock hover:bg-ground hover:text-white"
          }
        >
          {type}
        </span>
      )
    case "bug":
      return (
        <span
          {...props}
          className={isActive 
            ? "cursor-pointer inline-flex items-center rounded-lg bg-bug px-2 py-1 text-xs font-medium text-white capitalize ring-1 ring-inset ring-bug"
            : "cursor-pointer inline-flex items-center rounded-lg bg-white px-2 py-1 text-xs font-medium text-bug capitalize ring-1 ring-inset ring-bug hover:bg-bug hover:text-white"
          }
        >
          {type}
        </span>
      )
    case "ghost":
      return (
        <span
          {...props}
          className={isActive 
            ? "cursor-pointer inline-flex items-center rounded-lg bg-ghost px-2 py-1 text-xs font-medium text-white capitalize ring-1 ring-inset ring-ghost"
            : "cursor-pointer inline-flex items-center rounded-lg bg-white px-2 py-1 text-xs font-medium text-ghost capitalize ring-1 ring-inset ring-ghost hover:bg-ghost hover:text-white"
          }
        >
          {type}
        </span>
      )
    case "steel":
      return (
        <span
          {...props}
          className={isActive 
            ? "cursor-pointer inline-flex items-center rounded-lg bg-steel px-2 py-1 text-xs font-medium text-white capitalize ring-1 ring-inset ring-steel"
            : "cursor-pointer inline-flex items-center rounded-lg bg-white px-2 py-1 text-xs font-medium text-steel capitalize ring-1 ring-inset ring-steel hover:bg-steel hover:text-white"
          }
        >
          {type}
        </span>
      )
    case "fire":
      return (
        <span
          {...props}
          className={isActive 
            ? "cursor-pointer inline-flex items-center rounded-lg bg-fire px-2 py-1 text-xs font-medium text-white capitalize ring-1 ring-inset ring-fire"
            : "cursor-pointer inline-flex items-center rounded-lg bg-white px-2 py-1 text-xs font-medium text-fire capitalize ring-1 ring-inset ring-fire hover:bg-fire hover:text-white"
          }
        >
          {type}
        </span>
      )
    case "water":
      return (
        <span
          {...props}
          className={isActive 
            ? "cursor-pointer inline-flex items-center rounded-lg bg-water px-2 py-1 text-xs font-medium text-white capitalize ring-1 ring-inset ring-water"
            : "cursor-pointer inline-flex items-center rounded-lg bg-white px-2 py-1 text-xs font-medium text-water capitalize ring-1 ring-inset ring-water hover:bg-water hover:text-white"
          }
        >
          {type}
        </span>
      )
    case "grass":
      return (
        <span
          {...props}
          className={isActive 
            ? "cursor-pointer inline-flex items-center rounded-lg bg-grass px-2 py-1 text-xs font-medium text-white capitalize ring-1 ring-inset ring-grass"
            : "cursor-pointer inline-flex items-center rounded-lg bg-white px-2 py-1 text-xs font-medium text-grass capitalize ring-1 ring-inset ring-grass hover:bg-grass hover:text-white"
          }
        >
          {type}
        </span>
      )
    case "electric":
      return (
        <span
          {...props}
          className={isActive 
            ? "cursor-pointer inline-flex items-center rounded-lg bg-electric px-2 py-1 text-xs font-medium text-white capitalize ring-1 ring-inset ring-electric"
            : "cursor-pointer inline-flex items-center rounded-lg bg-white px-2 py-1 text-xs font-medium text-electric capitalize ring-1 ring-inset ring-electric hover:bg-electric hover:text-white"
          }
        >
          {type}
        </span>
      )
    case "psychic":
      return (
        <span
          {...props}
          className={isActive 
            ? "cursor-pointer inline-flex items-center rounded-lg bg-psychic px-2 py-1 text-xs font-medium text-white capitalize ring-1 ring-inset ring-psychic"
            : "cursor-pointer inline-flex items-center rounded-lg bg-white px-2 py-1 text-xs font-medium text-psychic capitalize ring-1 ring-inset ring-psychic hover:bg-psychic hover:text-white"
          }
        >
          {type}
        </span>
      )
    case "ice":
      return (
        <span
          {...props}
          className={isActive 
            ? "cursor-pointer inline-flex items-center rounded-lg bg-ice px-2 py-1 text-xs font-medium text-white capitalize ring-1 ring-inset ring-ice"
            : "cursor-pointer inline-flex items-center rounded-lg bg-white px-2 py-1 text-xs font-medium text-ice capitalize ring-1 ring-inset ring-ice hover:bg-ice hover:text-white"
          }
        >
          {type}
        </span>
      )
    case "dragon":
      return (
        <span
          {...props}
          className={isActive 
            ? "cursor-pointer inline-flex items-center rounded-lg bg-dragon px-2 py-1 text-xs font-medium text-white capitalize ring-1 ring-inset ring-dragon"
            : "cursor-pointer inline-flex items-center rounded-lg bg-white px-2 py-1 text-xs font-medium text-dragon capitalize ring-1 ring-inset ring-dragon hover:bg-dragon hover:text-white"
          }
        >
          {type}
        </span>
      )
    case "dark":
      return (
        <span
          {...props}
          className={isActive 
            ? "cursor-pointer inline-flex items-center rounded-lg bg-dark px-2 py-1 text-xs font-medium text-white capitalize ring-1 ring-inset ring-dark"
            : "cursor-pointer inline-flex items-center rounded-lg bg-white px-2 py-1 text-xs font-medium text-dark capitalize ring-1 ring-inset ring-dark hover:bg-dark hover:text-white"
          }
        >
          {type}
        </span>
      )
    case "fairy":
      return (
        <span
          {...props}
          className={isActive 
            ? "cursor-pointer inline-flex items-center rounded-lg bg-fairy px-2 py-1 text-xs font-medium text-white capitalize ring-1 ring-inset ring-fairy"
            : "cursor-pointer inline-flex items-center rounded-lg bg-white px-2 py-1 text-xs font-medium text-fairy capitalize ring-1 ring-inset ring-fairy hover:bg-fairy hover:text-white"
          }
        >
          {type}
        </span>
      )
    default:
      break;
  }
}

export default ButtonBadge