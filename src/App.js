import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const App = () => {
  const dispatch = useDispatch();
  const productReducer = useSelector((state) => state.productReducer);
  useEffect(() => {}, []);

  const handleFetchData = () => {
    dispatch({ type: "start-fetch" });
    fetch("https://swapi.dev/api/people/")
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: "Fetched_Data", payload: data });
        localStorage.setItem("data", JSON.stringify(data));
        localStorage.getItem("data");
      })
      .catch((error) => {});
  };

  return (
    <div>
      <button onClick={handleFetchData}>hi</button>
      {productReducer.isFetched && (
        <div>
          {productReducer.loading ? (
            <>loading...</>
          ) : (
            <>
              {productReducer.product.results.map((item) => {
                return <div>{item.name}</div>;
              })}
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default App;
