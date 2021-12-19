import "./filterproperty.css";
import Slider from "./Slider";

const Filterproperty = (prop) => {
  return (
    <div className="sliderProp">
      <div className="heading">
        <label>{prop.fltr1} </label>
      </div>
      <Slider min={prop.min} max={prop.max} />
      <div className="unit">
        <label>{prop.min}</label> <label>{prop.unit}</label> <label>"-"</label>
        <label>{prop.max}</label> <label>{prop.unit}</label>
      </div>
    </div>
  );
};

export default Filterproperty;
