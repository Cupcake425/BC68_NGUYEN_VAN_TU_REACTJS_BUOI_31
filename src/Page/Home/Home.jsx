import { useState } from "react";
import "./Home.scss";
import { data } from "../../data";
import Model from "../../Components/Model/Model";

const Home = () => {
  const [model, setModel] = useState({
    url: "",
    name: "",
    desc: "",
  });
  return (
    <div className="home ">
      <div className="home_cover">
        <h1 className="text-6xl text-center text-white bg-gray-400 p-5 ">
          TRY GLASSES APP ONLINE
        </h1>
        <div className="container flex items-center justify-between gap-5 ">
          <div className="item_container bg-white flex flex-wrap items-center justify-center gap-5 mt-10">
            {data.map((item, index) => {
              return (
                <img
                  className="w-60 cursor-pointer"
                  key={index}
                  src={item.url}
                  alt={item.name}
                  onClick={() => setModel(item)}
                />
              );
            })}
          </div>
          <Model glasses={model.url} name={model.name} desc={model.desc} />
        </div>
      </div>
    </div>
  );
};

export default Home;
