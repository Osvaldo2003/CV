import "../../assets/style/Educacion.css";
import pri from "../../assets/Primaria.jpeg"
import secun from "../../assets/Secundaria.jpeg"
import coba from "../../assets/COBACH.jpeg"
import Up from "../../assets/UP.jpeg"

function Educacion() {
    return ( 
        <>
        <h1 className="edu">Estudios </h1>
        <h1 className="prima">Esc. Prmaria Angel Pola Moreno</h1>
        <img src={pri} className="pri"/>
        <h2 className="fecha">Agosto 2000 - Junio 2006</h2>

        <h1 className="secu">Esc. Sec. Gral. Emilio Rabasa
Estevanell</h1>
        <img src={secun} className="secun"/>
        <h2 className="fech">Agosto 2006 - Junio 2009</h2>

        <h1 className="cobach">Colegio de Bachilleres de Chiapas Plantel 44</h1>
        <img src={coba} className="coba"/>
        <h2 className="fec">Agosto 2009 - Junio 2012</h2>

        <h1 className="up">Universidad Politecnica 
de Chiapas</h1>
        <img src={Up} className="Up"/>
        <h2 className="fe">Agosto 2012 - Diciembre 2015</h2>

        </>
     );
}

export default Educacion;