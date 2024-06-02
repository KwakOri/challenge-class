import axios from "axios";
import { useEffect } from "react";

//axios.get();
const axiosInstance = axios.create();

const GET_PRODUCT_ENDPOINT =
  "https://api.ballang.yoojinyoung.com/products/9587059";

const GET_BRANDS_ENDPOINT = "https://api.ballang.yoojinyoung.com/brands";

function App() {
  useEffect(() => {
    const getData = async () => {
      const response = fetch(GET_PRODUCT_ENDPOINT).then((res) =>
        console.log(res)
      );
      const data = await response.json();
      console.log(data);
    };
    getData();

    const getBrandsData = async () => {
      const response = await fetch(GET_BRANDS_ENDPOINT);
      const data = await response.json();
      console.log(data);
    };
    getBrandsData();
  }, []);

  return (
    <>
      <h1>hello</h1>
    </>
  );
}

export default App;
