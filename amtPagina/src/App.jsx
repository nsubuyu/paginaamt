import "./App.css";
import Header from "./components/Header";
import Titulo from "./components/Titulo";
import Parrafo from "./components/Parrafo";
import Azul from "./components/Azul";
import Tags from "./components/Tags";
import Iconos from "./components/Iconos";
import Imagenp from "./components/Imagenp";
import Tarjet from "./components/Tarjet";

function App() {
  return (
    <>
      <section>
        <Header
          imagen="/src/assets/pagina amt/PORTA DE INICIO.png"
          alter="imagen"
        />
      </section>

      <div>
        <Titulo
          texto=" AMT CUSTOMS SERVICES"
          negritas="Importaciones y Exportaciones"
        />
      </div>
      <section>
        <div className="container">
          <div className="texto text-white">
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
            <Header imagen="/src/assets/pagina amt/2o.png" alter="camion" />
          </div>
        </div>
      </section>

      <div className="d-flex gap-5">
        <Azul
          titulo="Cauca"
          imagen="/src/assets/pagina amt/IMÁGENES AMT 600600.png"
          alter="descarga"
        />
        <Azul
          titulo="Recauca"
          imagen="/src/assets/pagina amt/IMÁGENES AMT 600600.png"
          alter="descarga"
        />
      </div>

      <div>
        <p className=" fs-1 fw-bold"> Nuestros objetivos:</p>
        <p className="fs-3">
          Contribuir al desarrollo y crecimiento de la Organización ​siendo
          parte de un gran equipo de profesionales mostrando ser personas
          responsables, dedicadas, honestas, organizadas, colaboradoras y con
          muchos deseos de superación tanto ​profesionales como personales
        </p>
      </div>

      <Header
        imagen="/src/assets/pagina amt/3o.png"
        alter="portada amt"
      />

      <section>
        <h1>Misión y Visión</h1>

        <Tags
          imagen="/src/assets/pagina amt/16.png"
          alter="vision"
          titulo="VISION"
          texto="Ser una empresa con vocación de servicio, 
    ​             responsabilidad, eficiente y ágil que constituya ​
                 una herramienta de éxito y satisfacción para 
                 ​nuestros clientes."
        />

        <Tags
          imagen="/src/assets/pagina amt/15.png"
          alter="Mision"
          titulo="MISION"
          texto="Realizar nuestro trabajo con prontitud 
                ​utilizando lo mejor de nuestro personal 
                ​humano, como tecnológico, ofreciendo de 
                ​esta forma la mejor de las opciones de       
​                servicio en el ramo de gestión aduanal."
        />
      </section>



      <div>
        <h2 className=" fs-1 fw-bold"> Nuestros Servicios</h2>

        <p className="fs-3">Elaboración de Ducas</p>

        <p className="fs-3">Gestión Aduanera</p>

        <p className="fs-3">Transporte</p>

        <p className="fs-3">Recolección de Documentos</p>

        <p className="fs-3">Gestiones de licencia de importación</p>
      </div>

      <section>
        <div className="container my-4">
        
        <div className="d-flex">
        
          <div className="linea">
            <Iconos imagen="/src/assets/pagina amt/8.png" alter="8"  clase="modificar"/>
          </div>
          <div className="linea">
            <Iconos imagen="/src/assets/pagina amt/7.png" alter="7" clase="modificar"/>
          </div>
          <div className="linea">
            <Iconos imagen="/src/assets/pagina amt/6.png" alter="6" clase="modificar" />
          </div>
          <div className="linea">
            <Iconos imagen="/src/assets/pagina amt/5.png" alter="5" clase="modificar"/>
          </div>
          <div className="linea">
            <Iconos imagen="/src/assets/pagina amt/4.png" alter="4"clase="modificar" />
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
      />

      <section>
        <div className="d-flex gap-3">
          <div className="d-flex">
            <div className="vector">
            <Iconos imagen="/src/assets/pagina amt/6.png" alter="vector camion" />
            </div>
            <div className="tfondo">
            <Tarjet
              imagen="/src/assets/pagina amt/11.png"
              alter="camion"
            />
            </div>
          </div>
         
          <div className="d-flex">
            <div className="vector">
            <Iconos imagen="/src/assets/pagina amt/13.png" alter="vector barco" />
            </div>
            <div className="tfondo">
            <Tarjet imagen="/src/assets/pagina amt/10.png" alter="barco" />
            </div>
            
            
          </div>
            

          <div className="d-flex">
             <div className="vector">
             <Iconos imagen="/src/assets/pagina amt/14.png" alter="vector avion" />
             </div>

          <div className="tfondo">
          <Tarjet imagen="/src/assets/pagina amt/9.png" alter="avion" />
          </div>
            
           
          </div>
        </div>
      </section>

      <div className="d-flex">
        <div>
          <Azul titulo="Servicios"  />
          <p> Gestión Aduanera</p>
          <p> Transporte</p>
          <p> Recolección de Documentos</p>
          <p> Gestiones de licencia de importación</p>
        </div>

        <div>
          <Azul titulo="Contáctanos"/>
          <div>
            <p>Ubicación</p>
            <p>17 Calle 7-80 Zona 13 Aurora 1</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
            



