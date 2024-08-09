import "./Model.scss";

const Model = ({ name, glasses, desc }) => {
  return (
    <div className="model mt-10">
      <div className="model_img">
        <img src="./public/glassesImage/model.jpg" alt="" />
        <div className="model_glasses">
          <img src={glasses} alt="" />
        </div>
        <div className="model_info">
          <h2 className="text-black text-4xl text-center my-5 font-bold">
            {name}
          </h2>
          <p className="text-black ">{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default Model;
