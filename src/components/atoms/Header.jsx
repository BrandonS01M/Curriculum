import Imagen1 from '../../assets/img/imagen1.jpg'
import '../../assets/styles/Header.css'

function Header() {
    return ( 
       <header className="header_Principal">
            <div className="header_Second">
               <h1 id='name'><span id='lastname'></span></h1>
               <hr />
               <p id='profession'>Ing. en Software</p>
               

            </div>
            <div className="header_Circle">
               <div className="circle_Image">
                    <img id='user_Image' src={Imagen1} alt="Imagen del Usuario" />
               </div>
            </div>
       </header>
     );
}

export default Header;