import './App.css';
import AllAcordion from './Components/AllAcordion';

function App() {

  const datos = [{
    "nombreEje": "Armonización Curricular y Foco en Posgrados Tecnológicos",
    "porcentaje": "0%"
    },{
    "nombreEje": "Capital Humano y Gestión del Cambio",
    "porcentaje": "0%"
  },{
    "nombreEje": "Alianzas Internacionales",
    "porcentaje": "0%"
  },{
    "nombreEje": "I+D APLICADO Y VINCULO INDUSTRIA",
    "porcentaje": "0%"
  },{
    "nombreEje": "Comercialización de Tecnología y Emprendimiento",
    "porcentaje": "0%"
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
      <AllAcordion info={datos} infoIndicadores={indicadores}/>
    </div>
  );
}

export default App;
