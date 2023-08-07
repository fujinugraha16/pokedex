const ModalBackground = ({
  type,
  children,
  ...props
}) => {
  switch (type) {
    case "normal":
      return (
        <div
          {...props}
          className="bg-normal-darker w-full h-[700px] p-6"
        >
          {children}
        </div>
      )
    case "fighting":
      return (
        <div
          {...props}
          className="bg-fighting-darker w-full h-[700px] p-6"
        >
          {children}
        </div>
      )
    case "flying":
      return (
        <div
          {...props}
          className="bg-flying-darker w-full h-[700px] p-6"
        >
          {children}
        </div>
      )
    case "poison":
      return (
        <div
          {...props}
          className="bg-poison-darker w-full h-[700px] p-6"
        >
          {children}
        </div>
      )
    case "ground":
      return (
        <div
          {...props}
          className="bg-ground-darker w-full h-[700px] p-6"
        >
          {children}
        </div>
      )
    case "rock":
      return (
        <div
          {...props}
          className="bg-rock-darker w-full h-[700px] p-6"
        >
          {children}
        </div>
      )
    case "bug":
      return (
        <div
          {...props}
          className="bg-bug-darker w-full h-[700px] p-6"
        >
          {children}
        </div>
      )
    case "ghost":
      return (
        <div
          {...props}
          className="bg-ghost-darker w-full h-[700px] p-6"
        >
          {children}
        </div>
      )
    case "steel":
      return (
        <div
          {...props}
          className="bg-steel-darker w-full h-[700px] p-6"
        >
          {children}
        </div>
      )
    case "fire":
      return (
        <div
          {...props}
          className="bg-fire-darker w-full h-[700px] p-6"
        >
          {children}
        </div>
      )
    case "water":
      return (
        <div
          {...props}
          className="bg-water-darker w-full h-[700px] p-6"
        >
          {children}
        </div>
      )
    case "grass":
      return (
        <div
          {...props}
          className="bg-grass-darker w-full h-[700px] p-6"
        >
          {children}
        </div>
      )
    case "electric":
      return (
        <div
          {...props}
          className="bg-electric-darker w-full h-[700px] p-6"
        >
          {children}
        </div>
      )
    case "psychic":
      return (
        <div
          {...props}
          className="bg-psychic-darker w-full h-[700px] p-6"
        >
          {children}
        </div>
      )
    case "ice":
      return (
        <div
          {...props}
          className="bg-ice-darker w-full h-[700px] p-6"
        >
          {children}
        </div>
      )
    case "dragon":
      return (
        <div
          {...props}
          className="bg-dragon-darker w-full h-[700px] p-6"
        >
          {children}
        </div>
      )
    case "dark":
      return (
        <div
          {...props}
          className="bg-dark-darker w-full h-[700px] p-6"
        >
          {children}
        </div>
      )
    case "fairy":
      return (
        <div
          {...props}
          className="bg-fairy-darker w-full h-[700px] p-6"
        >
          {children}
        </div>
      )
    default:
      break;
  }
}

export default ModalBackground