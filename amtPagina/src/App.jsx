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

function App() {
  
  useEffect(()=>{ 
    
    AOS.init({duration:3000});
  
  },[])

  return (
    <>
      <section>
        <Header
          imagen="/src/assets/pagina amt/PORTA DE INICIO.png"
          alter="imagen"
        />
      </section>

      <div data-aos="fade-up" className="text-center amt m-5">
        <Titulo
          texto=" AMT CUSTOMS SERVICES"
          negritas="Importaciones y Exportaciones"
        />
      </div>
      <section>
        <div>
          <div className="texto text-white m-5 " >
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
            <Header imagen="/src/assets/pagina amt/2o.png" alter="camion" clase="lineazul"/>
            
          </div>
        </div>
      </section>

      <div className="d-flex caucar mt-5">
        <Azul
          titulo="Cauca"
          imagen="/src/assets/pagina amt/IMÁGENES AMT 600600.png"
          alter="descarga"
          titulo2=" Recauca"
          imagen2="/src/assets/pagina amt/IMÁGENES AMT 600600.png"
          link="https://portal.sat.gob.gt/portal/recursos-aduaneros/"
        />
      </div>

      <div className="objetivos">
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

      <Header imagen="/src/assets/pagina amt/3o.png" alter="portada amt" clase="lineazul"/>

      <section>
        <div className="mv">
          <h3>Misión y Visión</h3>
        </div>
        <div className="mx-5">
        <div className=" d-flex justify-content-start">
        <div className="">
          <Tags
            imagen="/src/assets/pagina amt/16.png"
            alter="vision"
            titulo="VISION"
            texto="Ser una empresa con vocación de servicio, 
    ​             responsabilidad, eficiente y ágil que constituya ​
                 una herramienta de éxito y satisfacción para 
                 ​nuestros clientes."
          />
        </div>
        </div>
        <div className="d-flex justify-content-end">


          <div className="d-flex tag ">

            <div className="vmtexto">
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
              <img src="/src/assets/pagina amt/15.png" alt="Mision" className="w-75 h-75 circulol"  />
              </figure>
                
              </div>
          </div>

        </div>

        </div>
        
      </section>

      <div className="servicios mx-5">
        <div className="text-center">
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
        <div className="container my-4">
          <div className="d-flex">
            <div className="linea">
              <Iconos
                imagen="/src/assets/pagina amt/8.png"
                alter="8"
                clase="modificar"
              />
            </div>
            <div className="linea">
              <Iconos
                imagen="/src/assets/pagina amt/7.png"
                alter="7"
                clase="modificar"
              />
            </div>
            <div className="linea">
              <Iconos
                imagen="/src/assets/pagina amt/6.png"
                alter="6"
                clase="modificar"
              />
            </div>
            <div className="linea">
              <Iconos
                imagen="/src/assets/pagina amt/5.png"
                alter="5"
                clase="modificar"
              />
            </div>
            <div className="linea">
              <Iconos
                imagen="/src/assets/pagina amt/4.png"
                alter="4"
                clase="modificar"
              />
            </div>
          </div>
        </div>
      </section>
      <Header imagen="/src/assets/pagina amt/4o.png" alter="señores" />

      <Imagenp
        titulo="Asesorías"
        imagen="/src/assets/pagina amt/3.png"
        alter="mesa"
        body="Asesorías en temas de comercio internacionales, 
         desde antes de la ​compra hasta la entrega de las mercancías en las bodegas del ​importador o exportador. 
         Asimismo prevenimos posibles ajustes ​realizados por la Superintendencia de Administración Tributaria ​
         SAT, en materia de comercio exterior."
        ident="asesoria"
      />

      <Imagenp
        titulo="Transporte"
        imagen="/src/assets/pagina amt/2.png"
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

      <section>

        <div className="d-flex amts">
          <div className="tamaño">
            <div className="d-flex ">
              <div className="vector">
                <img src="/src/assets/pagina amt/12.png" alt="vector camion" />

              </div>
              <div className="tfondo">
                <img src="/src/assets/pagina amt/11.png" alt="camion" />

              </div>
            </div>
          </div>


          <div classsName="tamaño">
            <div className="d-flex">
              <div className="vector">
                <img src="/src/assets/pagina amt/13.png" alt="" />

              </div>
              <div className="tfondo">
                <img src="/src/assets/pagina amt/10.png" alt="barco" />

              </div>
            </div>
          </div>
          <div classsName="tamaño">
            <div className="d-flex ">
              <div className="vector">
                <img src="/src/assets/pagina amt/14.png" alt="vector avion" />

              </div>

              <div className="tfondo">
                <img src="/src/assets/pagina amt/9.png" alt="" />

              </div>
            </div>
          </div>




        </div>
      </section>

      <div className="d-flex contactos">
        <div className="cleft">
          <div className="botones2 text-white">
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

        <div>
          <div className="botones2 text-white">
            <h3><strong>Contáctanos</strong></h3>
          </div>
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
    </>
  );
}

export default App;
