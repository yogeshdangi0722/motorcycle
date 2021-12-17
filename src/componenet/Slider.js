import './slider.css'
const Slider = ()=>{
    return(<div className="slidecontainer col-4 mr-2">
           <input type="range" min="1" max="100" value="50" class="slider" id="myRange"/>
           </div>
        );
}

export default Slider;