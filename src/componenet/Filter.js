import "./filter.css";
// import Slider from './Slider';
import Filterproperty from "./Filterproperty";

const Filter = () => {
  return (
    <div className="filterprop row">
      <Filterproperty fltr1="capacity" min="23" max="55" unit="cm3" />
      <Filterproperty fltr1="capacity" min="23" max="55" unit="cm3" />
      <Filterproperty fltr1="capacity" min="23" max="55" unit="cm3" />
    </div>
  );
};

export default Filter;
