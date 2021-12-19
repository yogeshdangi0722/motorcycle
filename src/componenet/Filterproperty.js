import "./filterproperty.css";
import MultiRangeSlider from "./MultiRangeSlider";

const Filterproperty = (prop) => {
  return (
    <div className="sliderProp">
      <div className="heading">
        <label>{prop.fltr1} </label>
      </div>
      <MultiRangeSlider
        min={prop.min}
        max={prop.max}
        onChange={({ min, max }) => console.log(`min = ${min}, max = ${max}`)}
      />
      <div className="unit">
        <label>{prop.min}</label> <label>{prop.unit}</label> <label>"-"</label>
        <label>{prop.max}</label> <label>{prop.unit}</label>
      </div>
    </div>
  );
};

export default Filterproperty;
