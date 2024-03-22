import React, { useState } from "react";
import useFetch from "./useFetch";

const UseFetchHookTest = () => {
  const { data, loading, error } = useFetch(
    "https://dummyjson.com/products",
    {}
  );
  const [dataSowing, setDataShowing] = useState(false);
  console.log(data);

  return (
    <div>
      <h1>UseFetchHookTest</h1>
      {loading ? <h2>Please wait ! data loading</h2> : null}

      {error ? <div>{error}</div> : null}
      {data && data.products && data.products.length ? (
        data.products.map((dataItem) => (
          <h4 key={dataItem.id}>{dataItem.title}</h4>
        ))
      ) : (
        <div>No data</div>
      )}
    </div>
  );
};

export default UseFetchHookTest;
