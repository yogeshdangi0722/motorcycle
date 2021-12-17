import './filterproperty.css';
import Slider from './Slider';

const Filterproperty = (prop) => {
return (
    <div className='sliderProp'>
        <label>{prop.fltr1} </label>
        <Slider />
        <div>
        <label>{prop.min}</label> <label>{prop.unit}</label> <label>"-"</label> 
        <label>{prop.min}</label> <label>{prop.unit}</label> 
        </div>
    </div>
    )
}

export default Filterproperty;