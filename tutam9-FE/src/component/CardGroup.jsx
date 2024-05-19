import Cards from "./Cards"

export default function CheckOurTools(props) {
  return(
    <div id="our-works-section" className="flex justify-center ">
      <div id="Cards-Container" className="
        flex flex-row flex-wrap justify-center
        w-full gap-8 mt-16 md:w-2/3"
      >
        {props.movies.map((work, index) => (
          <Cards key={index} icon={"https://media.themoviedb.org/t/p/w300_and_h450_bestv2" + work.poster_path} alt={work.title + " image"} title={work.title} subtitle={work.overview} id={work.id}/>
        ))}
      </div>
    </div>
  )
}