import { Link } from "react-router-dom";
import { useSuperHeroData } from "../hooks/useSuperHeroesData";

export const RQSuperHeroes = () => {
  const onSuccess = (data) => {
    console.log("Perform side effect after data fetching ", data);
  };

  const onError = (data) => {
    console.log("Perform side effect after ecnoutnering error", data);
  };

  const { isLoading, data, isError, error, isFetching, refetch } =
    useSuperHeroData(onSuccess, onError);

  // console.log({ isLoading, isFetching });

  if (isLoading || isFetching) {
    return <h2>Loaging...</h2>;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return (
    <>
      <h2>React Query Super Heroes Page</h2>;
      <button onClick={refetch}>Fetch heroes</button>
      {data?.data.map((hero) => (
        <div key={hero.id}>
          <Link to={`/rq-super-heroes/${hero.id}`}>{hero.name}</Link>
        </div>
      ))}
      {/* {data.map((heroName) => (
        <div key={heroName}>{heroName}</div>
      ))} */}
    </>
  );
};
