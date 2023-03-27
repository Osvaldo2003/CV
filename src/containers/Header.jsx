import logo from "../assets/foto.jpeg";
import mail from "../assets/Mail.jpeg"
import phone from "../assets/Phone.jpeg"
import "../assets/style/Header.css";

function Header() {
    return ( 
        <header>
            <img src={logo} className="perfil" />
            <h1 className="Titulo">Luis Osvaldo Perez Angel </h1>
            
            <h2 className="Subtitulo">Programador de Software</h2>
            
            <h2 className="Descripcion">osvaldoangel874@gmail.com</h2>
            <img src={mail} className="mail"/>
            <h2 className="desc">965-107-34-35</h2>
            <img src={phone} className="phone"/>

            <h2 className="Algo">Al desarrollar para una empresa me di cuenta que todos mis conocimientos deben estar enfocados en hacer un buen trabajo, ya que como desarrollador, 
            crezcan más mis habilidades</h2>
        
        </header>
     );
}

export default Header;