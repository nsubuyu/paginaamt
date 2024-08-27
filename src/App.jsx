import "./App.css";
import Header from "./components/Header";
import Titulo from "./components/Titulo";
import Parrafo from "./components/Parrafo";
import Azul from "./components/Azul";
import Tags from "./components/Tags";
import Iconos from "./components/Iconos";
import Imagenp from "./components/Imagenp";
import Tarjet from "./components/Tarjet";
import AOS from "aos";
import { useEffect } from "react";
import "./components/css/tag.css"
import "./components/css/azul.css"
import "./components/css/heder.css"
import "./components/css/icons.css"
import "./components/css/imagenp.css"
import "./components/css/parrafo.css"


import img1 from "./assets/pagina amt/PORTA DE INICIO.png";
import img2 from "./assets/pagina amt/2o.png";
import img3 from "./assets/pagina amt/IMÁGENES AMT 600600.png";
import img4 from "./assets/pagina amt/3o.png";
import img5 from "./assets/pagina amt/16.png";
import img6 from "./assets/pagina amt/15.png";
import img7 from "./assets/pagina amt/8.png";
import img8 from "./assets/pagina amt/7.png";
import img9 from "./assets/pagina amt/6.png";
import img10 from "./assets/pagina amt/5.png";
import img11 from "./assets/pagina amt/4.png";
import img12 from "./assets/pagina amt/4o.png";
import img13 from "./assets/pagina amt/3.png";
import img14 from "./assets/pagina amt/2.png";
import img15 from "./assets/pagina amt/12.png";
import img16 from "./assets/pagina amt/11.png";
import img17 from "./assets/pagina amt/13.png";
import img18 from "./assets/pagina amt/14.png";
import img19 from "./assets/pagina amt/9.png";



function App() {
  
  useEffect(()=>{ 
    
    AOS.init({duration:3000});
  
  },[])

  return (
    <>
      <section>
        <Header
          imagen={img1}
          alter="imagen"
        />
      </section>
       <div className="position-relative ">
       <div data-aos="fade-up" className="text-center amt m-5 ribbon" >
        <Titulo
          texto=" AMT CUSTOMS SERVICES"
          negritas="Importaciones y Exportaciones"
        />
      </div>
    {/*<div className="position-absolute z-n1  atrastexto">

      </div>*/}
       </div>
      
      <section>
        <div>
          <div className="texto text-white" >
            <Parrafo
              titulo="QUIENES SOMOS"
              body="Servicio aduanero y logística integral con experiencia en
         ​comercio aduanero. Enfocados en soluciones ​específicas para importaciones y exportaciones, 
         ​basados en principios de honradez, honestidad y ​responsabilidad. Infraestructura logística y 
         recursos ​tecnológicos, cada uno de ellos orientados a brindar el ​servicios aduanero que 
         nuestros clientes requieren y 
         ​necesitan, apegándonos a tiempos de entrega y ​maximizando recursos."
            />
          </div>
          <div className="fondo">
            <Header imagen={img2} alter="camion" clase="lineazul"/>
            
          </div>
        </div>
      </section>

      <div className="d-flex  caucar mx-5 iconosm">
        <Azul
          titulo="Cauca"
          imagen={img3}
          alter="descarga"
          titulo2=" Recauca"
          imagen2={img3}
          link="https://portal.sat.gob.gt/portal/recursos-aduaneros/"
        />
      </div>

      <div className="objetivos mx-5 ">
        <h3>
          <strong> Nuestros objetivos:</strong>
        </h3>
        <p>
          Contribuir al desarrollo y crecimiento de la Organización ​siendo
          parte de un gran equipo de profesionales mostrando ser personas
          responsables, dedicadas, honestas, organizadas, colaboradoras y con
          muchos deseos de superación tanto ​profesionales como personales
        </p>
      </div>

      <Header imagen={img4} alter="portada amt" clase="lineazul"/>

      <section>
        <div className="mv m-5">
          <h3>Misión y Visión</h3>
        </div>
        <div className="mx-5">
        <div className=" d-flex justify-content-start ">
        <div className="">
          <Tags
            imagen={img5}
            alter="vision"
            titulo="VISION"
            texto="Ser una empresa con vocación de servicio, 
    ​             responsabilidad, eficiente y ágil que constituya ​
                 una herramienta de éxito y satisfacción para 
                 ​nuestros clientes."
          />
        </div>
        </div>
        <div className="d-flex justify-content-end ">


          <div className="d-flex tag " id="vtel">

            <div className="vmtexto mx-5 mt-3">
              <div className=" text-white">
                <h3>
                  <strong>MISION</strong>
                </h3>
              </div>

              <div>
                <p>Realizar nuestro trabajo con prontitud
                  utilizando lo mejor de nuestro personal
                  humano, como tecnológico, ofreciendo de
                  esta forma la mejor de las opciones de
                  servicio en el ramo de gestión aduanal.</p>
              </div>
            </div>
            <div className="bimagen d-flex align-items-center justify-content-center">
              <figure>
              <img src={img6} alt="Mision" className="w-75 h-75 circulol"  />
              </figure>
                
              </div>
          </div>

        </div>

        </div>
        
      </section>

      <div className="servicios mx-5">
        <div className="text-center m-5">
        <h2>
          <strong>Nuestros Servicios</strong>
        </h2>
        </div>
        <ul>
          <li>Elaboración de Ducas</li>

          <li>Gestión Aduanera</li>

          <li>Transporte</li>

          <li>Recolección de Documentos</li>

          <li>Gestiones de licencia de importación</li>
        </ul>
      </div>

      <section>
        <div className="container my-4 m-5 ">
          <div className="d-flex m-5 iconosm">
            <div className="linea">
              <Iconos
                imagen={img7}
                alter="8"
                clase="modificar"
              />
            </div>
            <div className="linea">
              <Iconos
                imagen={img8}
                alter="7"
                clase="modificar"
              />
            </div>
            <div className="linea">
              <Iconos
                imagen={img9}
                alter="6"
                clase="modificar"
              />
            </div>
            <div className="linea">
              <Iconos
                imagen={img10}
                alter="5"
                clase="modificar"
              />
            </div>
            <div className="linea">
              <Iconos
                imagen={img11}
                alter="4"
                clase="modificar"
              />
            </div>
          </div>
        </div>
      </section>
      <div className="mb-5 m-5">
      <Header imagen={img12} alter="señores"  />
      </div>
      
      <div className="mx-5">
       <div className="d-flex justify-content-start iconosm">
       <Imagenp
        titulo="Asesorías"
        imagen={img13}
        alter="mesa"
        body="Asesorías en temas de comercio internacionales, 
         desde antes de la ​compra hasta la entrega de las mercancías en las bodegas del ​importador o exportador. 
         Asimismo prevenimos posibles ajustes ​realizados por la Superintendencia de Administración Tributaria ​
         SAT, en materia de comercio exterior."
        ident="asesoria"
      />
       </div>
      

      <div className="d-flex justify-content-end iconosm">
      <Imagenp
        titulo="Transporte"
        imagen={img14}
        alter="camion"
        body="Transporte terrestre, contamos con autorización de las 
         autoridades ​aduaneras para brindar el servicio de transporte aduanero. Nuestras ​unidades tienen diferentes capacidades, 
         lo que nos permite atender el ​transporte terrestre a nivel local y nacional. Las unidades son ​
         supervisadas para cumplir con nuestros estándares de calidad y ​seguridad. Estamos en Transporte terrestre, 
         contamos con autorización de las autoridades ​aduaneras para brindar el servicio de transporte aduanero. 
         Nuestras ​unidades tienen diferentes capacidades, lo que nos permite atender el ​transporte terrestre a nivel 
         local y nacional. Las unidades son ​supervisadas para cumplir con nuestros estándares de calidad y ​seguridad. 
         Estamos en capacidad de proporcionar transporte ​terrestre.
         capacidad de proporcionar transporte ​terrestre."
        ident="transporte"
      />
      </div>

      </div>
      

      <section>

        <div className="d-flex junstfy-content-center mx-5 pb-5 separar iconosm">
          
          <div className="tamaño">
            <div className="d-flex ">
              <div className="vector">
                <img src={img15} alt="vector camion" />

              </div>
              <div className="tfondo">
                <img src={img16} alt="camion" />

              </div>
            </div>
          </div>


          <div classsName="tamaño">
            <div className="d-flex">
              <div className="vector">
                <img src={img17} alt="" />

              </div>
              <div className="tfondo ">
                <img src="/src/assets/pagina amt/10.png" alt="barco"  className=""/>

              </div>
            </div>
          </div>

          <div classsName="tamaño">
            <div className="d-flex ">
              <div className="vector">
                <img src={img18} alt="vector avion" />

              </div>

              <div className="tfondo">
                <img src={img19} alt="avion" />

              </div>
            </div>
          </div>
        </div>
      </section>






      <section>
      <div className="d-flex contactos cola iconosm">
        <div className="cleft mt-5">
          <div className="botones2 text-white m-5">
            <h3><strong> Servicios</strong></h3>
          </div>
          <div className="listserv">
            <ul>
              <li> <p>Gestión Aduanera</p></li>
              <li> <p>Transporte</p></li>
              <li> <p>Recolección de Documentos</p></li>
              <li> <p>Gestiones de licencia de importación</p></li>
            </ul>
          </div>
        </div>

        <div className="mt-5">
          <div className="botones2 text-white m-5">
            <h3><strong>Contáctanos</strong></h3>
          </div>
          <div className="centrardirec">

          <div className="direc">
            <h3>
              <strong>Ubicación</strong>
            </h3>
            <p>17 Calle 7-80 Zona 13 Aurora 1</p>
          </div>
          <div className="direc">
            <h3>
              <strong>Ventas</strong>
            </h3>
            <p>Tel: 3015-6817, ​5697-6272</p>
          </div>

          </div>
          
        </div>
      </div>
      </section>
      
    </>
  );
}

export default App;
