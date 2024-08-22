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
      <div>
        <div>
          <Header imagen="/src/assets/pagina amt/PORTA DE INICIO.png" alter="imagen" />
        </div>
        <div>
          <Titulo texto=" AMT CUSTOMS SERVICES" negritas="Importaciones y Exportaciones" />
        </div>
        <div>
          <Header imagen="/src/assets/pagina amt/2o.png" alter="camion" />
        </div>

        <div>
          <Parrafo titulo="QUIENES SOMOS" body="Servicio aduanero y logística integral con experiencia en
         ​comercio aduanero. Enfocados en soluciones ​específicas para importaciones y exportaciones, 
         ​basados en principios de honradez, honestidad y ​responsabilidad. Infraestructura logística y 
         recursos ​tecnológicos, cada uno de ellos orientados a brindar el ​servicios aduanero que 
         nuestros clientes requieren y 
         ​necesitan, apegándonos a tiempos de entrega y ​maximizando recursos."/>
        </div>
        <div className="d-flex gap-5">
          <Azul titulo="CAUCA" imagen="" alter="" />
          <Azul titulo="RECAUCA" imagen="" alter="" />
        </div>


        <div>

          <h1> Nuestros objetivos:</h1>
          <p>Contribuir al desarrollo y crecimiento de la Organización ​siendo parte de un gran equipo de profesionales mostrando
            ser personas responsables, dedicadas, honestas, organizadas,
            colaboradoras y con muchos deseos de superación tanto ​profesionales como personales</p>
        </div>



        <Header imagen="/src/assets/pagina amt/3o.png" alter="portada amt" ></Header>

        <h1>Misión y Visión</h1>

        <Tags imagen="/src/assets/pagina amt/16.png" alter="vision" titulo="VISION" texto="Ser una empresa con vocación de servicio, 
          ​responsabilidad, eficiente y ágil que constituya ​
          una herramienta de éxito y satisfacción para 
          ​nuestros clientes."></Tags>

        <Tags imagen="/src/assets/pagina amt/15.png" alter="Mision" titulo="MISION" texto="Realizar nuestro trabajo con prontitud 
        ​utilizando lo mejor de nuestro personal 
        ​humano, como tecnológico, ofreciendo de 
        ​esta forma la mejor de las opciones de       
​        servicio en el ramo de gestión aduanal."></Tags>

        <div>
          <h2> Nuestros Servicios</h2>

          <p>Elaboración de Ducas</p>

          <p>Gestión Aduanera</p>

          <p>Transporte</p>

          <p>Recolección de Documentos</p>

          <p>Gestiones de licencia de importación</p>

        </div>

        <div>
          <Iconos imagen="/src/assets/pagina amt/8.png" alter="8" ></Iconos>
          <Iconos imagen="/src/assets/pagina amt/7.png" alter="7" ></Iconos>
          <Iconos imagen="/src/assets/pagina amt/6.png" alter="6" ></Iconos>
          <Iconos imagen="/src/assets/pagina amt/5.png" alter="5" ></Iconos>
          <Iconos imagen="/src/assets/pagina amt/4.png" alter="4" ></Iconos>
        </div>
        <Header imagen="/src/assets/pagina amt/4o.png" alter="señores"> </Header>

        <Imagenp imagen="/src/assets/pagina amt/3.png" alter="mesa" body="Asesorías en temas de comercio internacionales, 
         desde antes de la ​compra hasta la entrega de las mercancías en las bodegas del ​importador o exportador. 
         Asimismo prevenimos posibles ajustes ​realizados por la Superintendencia de Administración Tributaria ​
         SAT, en materia de comercio exterior."></Imagenp>

        <Imagenp imagen="/src/assets/pagina amt/3.png" alter="camion" body="Transporte terrestre, contamos con autorización de las 
         autoridades ​aduaneras para brindar el servicio de transporte aduanero. Nuestras ​unidades tienen diferentes capacidades, 
         lo que nos permite atender el ​transporte terrestre a nivel local y nacional. Las unidades son ​
         supervisadas para cumplir con nuestros estándares de calidad y ​seguridad. Estamos en Transporte terrestre, 
         contamos con autorización de las autoridades ​aduaneras para brindar el servicio de transporte aduanero. 
         Nuestras ​unidades tienen diferentes capacidades, lo que nos permite atender el ​transporte terrestre a nivel 
         local y nacional. Las unidades son ​supervisadas para cumplir con nuestros estándares de calidad y ​seguridad. 
         Estamos en capacidad de proporcionar transporte ​terrestre.
         capacidad de proporcionar transporte ​terrestre."></Imagenp>

        <div>


          <div><Iconos imagen="/src/assets/pagina amt/6.png" alter="vector camion"> </Iconos>
            <Tarjet imagen="/src/assets/pagina amt/11.png" alter="camion"></Tarjet></div>

          <div>
            <Iconos imagen="/src/assets/pagina amt/13.png" alter="vector barco" />
            <Tarjet imagen="/src/assets/pagina amt/10.png" alter="barco"></Tarjet>
          </div>

          <div><Iconos imagen="/src/assets/pagina amt/14.png" alter="vector avion"> </Iconos>
            <Tarjet imagen="/src/assets/pagina amt/9.png" alter="avion"></Tarjet></div>



        </div>


        <div>

          <div>
            <Azul titulo="Servicios" imagen="" alter="" ></Azul>
            <p> Gestión Aduanera</p>
            <p> Transporte</p>
            <p> Recolección de Documentos</p>
            <p> Gestiones de licencia de importación</p>
          </div>

          <div>
            <Azul titulo="Contáctanos" imagen="" alter="" ></Azul>
            <div>
              <p>Ubicación</p>
              <p>17 Calle 7-80 Zona 13 Aurora 1</p>
            </div>

          </div>


        </div>








      </div>
    </>
  );
}

export default App;
