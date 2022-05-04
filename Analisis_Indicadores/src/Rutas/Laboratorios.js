import React,{useState} from 'react'
import Table from 'react-bootstrap/Table'

const datos = [
  'AÑO', 
  'NOMBRE LABORATORIO ',
  'DESCRIPCION GENERAL LABORATORIO (200 caracteres)',
  'DEPENDENCIA ACADÉMICA LABORATORIO ',
  'DEPENDENCIA INSTITUCIONAL (FACULTAD/CENTRO/INSTITUTO, OTRO)',
  'SUPERFICIE LABORATORIO (m2)',
  'EQUIPAMIENTO PRINCIPAL 1',
  'EQUIPAMIENTO PRINCIPAL 2', 
  'NOMBRE NUEVO PROYECTO AÑO INFORMADO',
  'MONTO INVERSIÓN NUEVO PROYECTO AÑO INFORMADO',
  'EQUIPAMIENTO MENOR 1',
  'EQUIPAMIENTO MENOR 2',
  'NOMBRE NUEVO PROYECTO AÑO INFORMADO.1',
  'MONTO INVERSIÓN NUEVO PROYECTO AÑO INFORMADO.1',
  'MONTO INVERSION PROYECTADA AÑO +1',
  'DETALLE INVERSION PROYECTADA AÑO +1',
  '%DEL TOTAL DE USO DESTINADO A DOCENCIA ',
  '% DEL TOTAL DE USO DESTINADO A I&D',
  '% DEL TOTAL DE USO DESTINADO A SERVICIOS ',
  '% DEL TOTAL DE USO DESTINADO A i&e',
  '% DEL TOTAL DE USO (suma)', 
  'NOMBRE RESPONSABLE DEL LABORATORIO', 
  'CARGO RESPONSABLE LABORATORIO', 
  'JCE ACADEMICOS', 
  'JCE INVESTIGADORES', 
  'N° ALUMNOS PREGRADO', 
  'N° ALUMNOS MAGISTER', 
  'N° ALUMNOS DOCTORADO', 
  'FUENTE DE INFORMACIÓN', 
  'CARGO AUTORIDAD QUE VALIDA INFORMACIÓN ', 
  'NOMBRE AUTORIDAD QUE VALIDA INFORMACIÓN ']

  
const valoresApi = [
  [2017.0, 'Laboratorio de Física (A y B)', 'Se desarrollan las actividades prácticas necesarias para reforzar los aprendizajes significativos de los estudiantes de todas las carreras de la facultad de ingeniería. ', 'Centro de Docencia de Cs. Básicas', 'Facultad Ciencias de la Ingeniería', 278.94, 'S/I', 'S/I', 'Proyecto de Innovación Docente " Realización de actividades experimentales, en condiciones de laboratorio y en la naturaleza para mejorar el proceso de aprendizaje  de Física I para Ingeniería\'\'.', '$2.000.000', 'Tres cámaras de alta velocidad.', 'S/I', 'S/I', 'S/I', 'S/I', 'S/I', 1, 0, 0, 0, 1, 'José Lovera', 'Técnico Académico', 8.5, 0, 992.0, 0, 0.0, 'Sebastián Urrutia', 'Académico Centro de Docencia  Cs. Básicas', 'Sebastián Urrutia'],
  [2017.0, 'Canal de Ensayos Hidrodinámicos', 'Laboratorio cuenta con canal de ensayo hidrodinámico y taller de modelos a escala para realizar docencia y ensayos de modelos hidrodinámicos a escala solicitados por privados.', 'Instituto de Ciencias Navales y Marítimas.', 'Facultad Ciencias de la Ingeniería', 600.0, 'Carro de remolque de aluminio apoyado sobre guías lineales que le permite, además de remolcar los modelos, llevar toda la instrumentación necesaria para las mediciones.  El carro alcanza una velocidad de hasta 5 m/s y es accionado por un servomotor de 0,75kW.', 'Una fresadora CNC de tres ejes con mesa de 2,5m x 1,2m para el fresado en madera, plásticos y aluminio, Celda de Carga FUTEK LRM200, Celda de Carga FUTEK LBB200, 4 Sensores Ultrasónicos MicroSonic mic+25/IU/TC, 2 Sensores de altura de ola Akamina AWPH-22-60-SP, Acelerómetro XSENS MTi, Flujómetro FLOWATCH, Cámara de video y cámara submarina.\n', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 0.35, 0.2, 0.35, 0.1, 1, 'Gonzalo Tampier B.', 'Director Canal de Ensayo', 8, 4, 160.0, 5, 0.0, 'Gonzalo Tampier B.', 'Director Canal de Ensayos', 'Gonzalo Tampier B.'],
  [2017.0, 'Laboratorio de Telecomunicaciones, Propagación y Enlaces', 'NULL', 'Instituto de Electricidad y Electrónica', 'Facultad Ciencias de la Ingeniería', 52.7, 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL'],
  [2017.0, 'Laboratorio automatización y control', 'NULL', 'Instituto de Electricidad y Electrónica', 'Facultad Ciencias de la Ingeniería', 50.0, 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL']
]
/*
const valoresApi = [
  [
    2210,
    "Laboratoriox",
    "Actividades Practicas",
    "Institutox x2" ,
    "Ciencias de la ingeneira",
    "276.978",
    "carro de metal",
    "una cosa equipada",
    "Proyecto que proyecta",
    "230302302",
    "Alguna silla gamer",
    "Otra silla",
    "sin",
    "203103"
  ],[
    2210,
    "Laboratoriox",
    "Actividades Practicas",
    "Institutox x2" ,
    "Ciencias de la ingeneira",
    "276.978",
    "carro de metal",
    "una cosa equipada",
    "Proyecto que proyecta",
    "230302302",
    "Alguna silla gamer",
    "Otra silla",
    "sin",
    "203103"
  ],
  [
    2210,
    "Laboratoriox",
    "Actividades Practicas",
    "Institutox x2" ,
    "Ciencias de la ingeneira",
    "276.978",
    "carro de metal",
    "una cosa equipada",
    "Proyecto que proyecta",
    "230302302",
    "Alguna silla gamer",
    "Otra silla",
    "sin",
    "203103"
  ]
]
*/



const Laboratorios = () => {
  const [datos2,setDatos] = useState(datos)
  return (
    <div>
      <Table responsive="xl" size='sm' striped >
        <thead>
          <tr className='lab'>
            {datos2.map((valor,Index) => {
              return(
                <th key={Index}>{valor}</th>
              )
            })}
          </tr>
        </thead>
        <tbody>
            {valoresApi.map((valor,Index) => {
              return(
                <>
                <tr key={Index}>
                  {valor.map((valores) => {
                    return (
                    <td >{valores}</td>
                    )
                  })}
                </tr>
              
                </>
              )
            })}
        </tbody>
      </Table>
    </div>
  )
}

export default Laboratorios