import "../../assets/style/Experencia.css";
import Go from "../../assets/Google.jpeg"
import Tes from "../../assets/Tesla.jpeg"

function Experencia() {
    return ( 
        <>
          <h1 className="Experencia">Experencia </h1>
          <h1 className="Google">Diseñador de UI en Google </h1>
          <img src={Go} className="Go"/>
          <h2 className="Fecha">Marzo 2016 - Actual</h2>
          <h1 className="dat">Encargado del equipo de diseño del UX.</h1>

          <h1 className="tesla">Diseñador de UI en Tesla</h1>
          <img src={Tes} className="Tes"/>
          <h2 className="Fec">Septiembre 2018 - Actual</h2>
          <h1 className="dato">Encargado del equipo de diseño del UX.</h1>
        </>

     );
}

export default Experencia;