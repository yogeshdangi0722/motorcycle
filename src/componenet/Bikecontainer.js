import "./Bikecontainer.css";
import Bikecard from "./Bikecard";


function Bikecontainer(){
    return(
        <div className="container">
            <Bikecard />   
            <Bikecard />  
            <Bikecard />   
            <Bikecard />
        </div>
      )
}

export default Bikecontainer; 