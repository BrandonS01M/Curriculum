import '../../assets/styles/Perfil.css'
import Html from '../../assets/img/html.png'
import Css from '../../assets/img/css.png'
import JavaScript from '../../assets/img/javascript.png'
import java from '../../assets/img/java.png'
import {DataP} from "../../assets/Data/DataPerson";
import { SkillP } from '../../assets/Data/SkillPerson';

function Perfil() {
    return (
        <> 
        <div className="container_Father_Perfil">
            <div className="container_Data_Perfil" id='perfil_P'>
                <div className="p_DC" id='id_Pefil'><span>PERFIL</span></div>
                   {DataP.map((data => {
                    return <p id='description'>{data.description}</p>
                   }))}
            </div>
            <div className="container_Data_Perfil" id='date_Perfil'><div className="p_DC" id='id_Date'><span>FECHA DE NACIMIENTO</span></div>
                   {DataP.map((data => {
                    return <h1 id='date'>{data.date}</h1>
                   }))}
            
            </div>
            <div className="container_Data_Perfil" id='skill_Perfil'><div className="p_DC" id='id_Skill'><span>HABILIDADES</span></div>
                  {SkillP.map((skill => {
                    return <div className='container_skills'>
                              <li className='skills'>{skill.desing}</li>
                              <li className='skills'>{skill.draw}</li>
                              <li className='skills'>{skill.edition}</li>
                              <li className='skills'>{skill.program}</li>
                           </div> 
                  }))}
            </div>
            <div className="container_Data_Perfil" id='language_Perfil'><div className="p_DC" id='id_Language'><span>LENGUAJES</span></div> 
                <div className="container_Language">
                    <img src={Html} alt="Html" className='language_name' />
                    <img src={Css} alt="Css" className='language_name' />
                    <img src={JavaScript} alt="JavaScript" className='language_name' />
                    <img src={java} alt="Java"  className='language_name' />
                </div>
             </div>
        </div>
        </>
     );
}

export default Perfil;