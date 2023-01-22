import '../../assets/styles/Perfil.css'

function Perfil() {
    return (
        <> 
        <div className="container_Father_Perfil">
            <div className="container_Data_Perfil" id='perfil_P'><div className="p_DC" id='id_Pefil'><span>PERFIL</span></div></div>
            <div className="container_Data_Perfil" id='date_Perfil'><div className="p_DC" id='id_Date'><span>FECHA DE NACIMIENTO</span></div></div>
            <div className="container_Data_Perfil" id='skill_Perfil'><div className="p_DC" id='id_Skill'><span>HABILIDADES</span></div></div>
            <div className="container_Data_Perfil" id='language_Perfil'><div className="p_DC" id='id_Language'><span>LENGUAJES</span></div></div>
        </div>
        </>
     );
}

export default Perfil;