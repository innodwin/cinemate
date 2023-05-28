import { Card } from "../components"
import { useFetch } from "../hooks/useFetch";
import { useTitle } from "../hooks/useTitle";

export const MovieList = ({ apiPath, title }) => {


  var url = apiPath;
  if (apiPath === "") {
    url = "movie/now_playing?language=en-US&page=1";
  }


  const { data: movies } = useFetch(url);

  useTitle(`${title} / Cinemate`);
  return (
    <main>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap other:justify-evenly">
          {movies && movies.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}


        </div>
      </section>
    </main>
  )
}
