import ButtonAppBar from "./components/Appbar";
import axios from "axios";
import { useState } from "react";

function App() {
  const [data, setData] = useState("");

  axios.get("https://jsonplaceholder.typicode.com/posts/1").then((response) => {
    console.log(response);
    setData(JSON.stringify(response.data));
    return response.data;
  });
  // Vamos a buscar un listado de cosas, y vamos a renderizar un listado de cosas
  
  return (
    <>
      <ButtonAppBar />
      {data}
    </>
  );
}

export default App;
