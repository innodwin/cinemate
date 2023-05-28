import { Link } from "react-router-dom";
import PageNotFoundImage  from "../assets/images/pagenotfound.png";
import { useTitle } from "../hooks/useTitle";
export const PageNotFound = () => {
  
    useTitle("Page Not Found / Cinemate");
    return (
        <main>
          <section className="flex flex-col justify-center px-2">
            <div className="flex flex-col items-center my-4">
                <p className="dark:text-white font-bold my-10 text-7xl text-gray-700">404, Oops!</p>
               <div className="max-w-lg">
               <img className="rounded" src={PageNotFoundImage} alt="Page not Found" />
           
               </div>
                </div>
                <div className="flex justify-center my-4">
                    <Link to="/">
                        <button className="w-64 text-xl bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 
                        rounded-lg py-2.5 px-5 mr-2 mb-2 font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 "> Back To Cinemate</button>
                    </Link>
                </div>
          </section>
        </main>
    )
}
