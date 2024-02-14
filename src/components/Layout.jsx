import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout() {
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
      <Header />
      <main>
        {photoEl}
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
