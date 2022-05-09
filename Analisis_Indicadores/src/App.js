import './App.css';
import AllAcordion from './Components/AllAcordion';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import NavbarGeneral from './Components/NavbarGeneral';

//Importancion de componentes
import Academicos from './Rutas/Academicos';
import Programas from './Rutas/Programas';
import Laboratorios from './Rutas/Laboratorios';
import Disclosures from './Rutas/Disclosures';
import PI from './Rutas/PI';
import Licencias from './Rutas/Licencias';
import Proyectos from './Rutas/Proyectos';
import Emprendimiento from './Rutas/Emprendimiento';
import Publicaciones from './Rutas/Publicaciones';
import Alianzas from './Rutas/Alianzas';
import Evidencias from './Rutas/Evidencias';

function App() {

  const datos = [{
    "nombreEje": "Armonización Curricular y Foco en Posgrados Tecnológicos",
    "porcentaje": "0"
    },{
    "nombreEje": "Capital Humano y Gestión del Cambio",
    "porcentaje": "0"
  },{
    "nombreEje": "Alianzas Internacionales",
    "porcentaje": "60"
  },{
    "nombreEje": "I+D APLICADO Y VINCULO INDUSTRIA",
    "porcentaje": "0"
  },{
    "nombreEje": "Comercialización de Tecnología y Emprendimiento",
    "porcentaje": "0"
  }
]
  const indicadores = [{
    "nombre":"Number of scientific and technological disclosures   N° de divulgaciones científicas y tecnológicas.",
    "id":"20",
    "metrica":"Number, per year Número, por año"
    },
    {
      "nombre":"Number of applied patents N° de patentes aplicadas",
      "id":"21",
      "metrica":"Number, per year Número, por año"
    },
]
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={ <NavbarGeneral/>}>
          <Route index element={ <Evidencias/> }/>
          <Route path='academicos' element={ <Academicos/>}/>
          <Route path='programas' element={ <Programas/> }/>
          <Route path='laboratorios' element= {<Laboratorios/>}/>
          <Route path='disclosures' element= {<Disclosures/>}/>
          <Route path='pi' element= {<PI/>}/>
          <Route path='licencias' element= {<Licencias/>}/>
          <Route path='proyectos' element= {<Proyectos/>}/>
          <Route path='emprendimiento' element= {<Emprendimiento/>}/>
          <Route path='publicaciones' element= {<Publicaciones/>}/>
          <Route path='alianzas' element= {<Alianzas/>}/>
          {/*<Route path='*' element={ <Navigate replace to="/"/> }/>*/}
        </Route>
      </Routes>
      </BrowserRouter>
      {/*<AllAcordion info={datos} infoIndicadores={indicadores}/>*/}
    </div>
  );
}

export default App;
