import '../../assets/styles/PerfilNetwork.css'
import Network from './Network'
import GitHub from "../../assets/img/GitHub.png"
import Instagram from "../../assets/img/Instagram.png"
import Gmail from "../../assets/img/Gmail.png"
import Phone from "../../assets/img/Phone.png"
import Twitter from "../../assets/img/Twitter.webp"

function PerfilNetwork() {
    return ( 
        <>
        <div className="container_Perfil_Network">
            <div className="perfil_Network"><span>DATOS</span></div>
            <div className="container_Network">
                <img src={Phone} alt="Numero de Telefono" id='id_Phone'/>
                <img src={Instagram} alt="Instagram" id='id_Instagram'/>
                <img src={Gmail} alt="Gmail" id='id_Gmail'/>
                <img src={GitHub} alt="GitHub" id='id_GitHub'/>
                <img src={Twitter} alt="Twitter" id='id_Twitter'/>
            </div>
            <div className="networks">
                <Network/>
            </div>
            </div>
        </>
     );
}

export default PerfilNetwork;