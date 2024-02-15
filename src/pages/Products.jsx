import { useState } from "react";

export default function Products() {
  const [arr, setArr] = useState([]);

  fetch("./api/cameras.json")
    .then((res) => res.json())
    .then((data) => setArr(data.cameras))
    .catch((err) => console.error(err));

  console.log(arr);

  const photoEl = arr.map(item => {
    console.log(item)
    return <img key={item.id} src={item.image} alt={item.title} />;
  });

  return (
    <div>
      <h3>Products</h3>
      {photoEl}
    </div>
  );
}
