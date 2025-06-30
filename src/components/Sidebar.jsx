import { FaPlus,FaGlobe} from "react-icons/fa";
import '../styles/Sidebar.css'
import { useEffect,useRef,useState } from "react";
export default function Slidebar(){


    const scrollRef=useRef();
    const [shadow,setShadow]=useState(false);

    useEffect(()=>{
        const handleScroll =()=>{
            if(scrollRef.current.scrollTop>0){
                 setShadow(true);
            }else{
                setShadow(false);
            } 
        };
        const el=scrollRef.current;
        el.addEventListener("scroll",handleScroll);
        return()=>el.removeEventListener("scroll",handleScroll);
    },[]);

    return (
        <aside className="sidebar">
            {/*Bloque 1*/}
            <section className="sidebar-top">
                <section className="sidebar-header"> 
                    <h3>Tu biblioteca</h3>
                            <FaPlus className="sidebar-add-icon" />
                </section>
            </section>
            {/*Bloque 2*/}
            <section  
                ref={scrollRef}
                className={`sidebar-scroll ${shadow ? "with-shadow" : ""}`}
            >
                
                <section className="sidebar-list">
                    <h3>Crea tu primera lista</h3>
                    <p>Es muy fácil, y te echaremos una mano.</p>
                    <button className="sidebar-create">Crear lista</button>
                </section>
                <section className="sidebar-podcast">
                      <h3>Encuentra pódcast que quieras seguir</h3>
                      <p>Te avisaremos cuando salgan nuevos episodios</p>
                       <button className="sidebar-explore">Explorar podcasts</button>
                </section>
            </section>

            {/*Bloque 3*/}
            <section className="sidebar-buttom">
                <section className="sidebar-links">
                <a href="#">Legal</a>
                <a href="#">Centro de seguridad y privacidad</a>
                <a href="#">Política de Privacidad</a>
                <a href="#">Cookies</a>
                <a href="#">Información sobre los anuncios</a>
                <a href="#">Accesibilidad</a>
                 <a href="#">Cookies</a>
                </section>  
                 <button className="sidebar-language">
                    <FaGlobe className="sidebar-language-icon" /> Español de España
                 </button>
            </section>

                
        </aside>

    )
}