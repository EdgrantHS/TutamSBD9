export default function Cards(props) {
  return(
    <a id="icon-box" 
      style={{ '--image-url': `url(${props.icon})` }} 
    
      className="
        flex flex-col flex-wrap items-left justify-between
        w-60 h-[20rem] rounded-[2rem] py-4 pt-8 px-2
        bg-[image:var(--image-url)]
        hover:scale-110 transition-all duration-300
        text-white
        bg-blend-darken bg-cover bg-center bg-no-repeat 
        relative shadow-xl
      " 

      href={"/movie/" + props.id}
    >
      <div 
        id="gradient-overlay"
        className="
          absolute top-0 left-0 w-full h-full 
          bg-gradient-to-t from-black from to-black via-transparent from-10% to-90% via-30% opacity-80
          rounded-3xl z-10
          hover:opacity-0 transition-all duration-300
      "/>
    
      <p id="icon-subtitle" className="mx-6 text-sm max-h-40 overflow-y-auto shadow-md z-20 no-scrollbar text-center">{props.subtitle}</p>
      <h1 id="icon-title" className=" mx-6 text-xl font-bold shadow-md z-20 text-center">{props.title}</h1>
    </a>
  )
}