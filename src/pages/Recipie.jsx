import { useParams, Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

function Recipe() {
  const { id } = useParams();
  const url = `https://spotless-understood-star.glitch.me/recipes/${id}`;
  const { data, isPending, error } = useFetch(url);

  if (data === null) {
    return (
      <div>
        <h1 className="text-center text-3xl">Loading...</h1>
      </div>
    );
  }
  const { img, title, ingredients, cookingTime, method } = data;
  return (
    <>
      <div key={title} className="card lg:card-side bg-base-100 shadow-xl mt-2">
        <figure>
          <img src={img} alt={title} className="lg:w-[600px] h-full rounded" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-5xl mb-2">{title}</h2>
          <ul>
            <h3 className="text-2xl mb-3">Ingredients:</h3>
            {ingredients.map((gradient) => {
              return (
                <li className="pl-5">
                  <p className="text-1xl">{gradient}</p>
                </li>
              );
            })}
          </ul>
          <span className="text-2xl">Cooking Time: {cookingTime}</span>
          <h2 className="text-1xl">
            Cooking Method: <p className="text-1xl max-w-[500px]">{method}</p>
          </h2>

          <div className="card-actions justify-end">
            <Link to="/" className="btn btn-secondary">
              Home
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Recipe;
