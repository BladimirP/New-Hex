import React,{useState} from 'react'
import Table from 'react-bootstrap/Table'


const datos = ['NOMBRE CARRERA O CURSO CPD', 'NOMBRE INSTITUCIÓN', 'NIVEL GLOBAL', 'CÓDIGO CARRERA (SIES)', 'FECHA RESOLUCIÓN APRUEBA PROGRAMA', 'AÑO', 'TOTAL MATRICULADOS', 'MATRICULADOS MUJERES ', 'MATRICULADOS HOMBRES ', 'TOTAL ESTUDIANTES MINORÍAS ', 'TOTAL MATRICULADOS PRIMER AÑO', 'MATRICULADOS MUJERES PRIMER AÑO', 'MATRICULADOS HOMBRES PRIMER AÑO', 'TOTAL TITULADOS POR CARRERA', 'TITULADOS MUJERES POR CARRERA', 'TITULADOS HOMBRES POR CARRERA', 'TOTAL TITULADOS MINORÍAS ', 'TOTAL ALUMNOS EXTRANJEROS HOMBRE', 'TOTAL ALUMNOS EXTRANJEROS MUJER', 'ÁREA DEL CONOCIMIENTO', 'ÁREA CARRERA GENÉRICA', 'MODALIDAD', 'JORNADA', 'Horas de Inglés en Programa', 'DISEÑO IMPLEMENTADO SCT (SÍ/NO)', 'DURACIÓN CARRERA (en SCT)', 'FECHA Última Modificación', 'DURACIÓN CARRERA (en semestres)', 'ESTADO REDUCCION DURACIÓN', 'DURACIÓN 2018', 'DURACIÓN 2019', 'DURACIÓN 2020', 'PROMEDIO TITULACIÓN (en semestres)', 'Acreditación Nacional', 'Acreditación Internacional', '% Retención 1er año', '% Retención 1er año (hombres)', '% Retención 1er año (mujeres)', '% Retención 2do Año', '% Retención 2do año (hombres)', '% Retención 2do año (mujeres)', '% Retención 3er año', '% Retención 3er año (hombres)', '% Retención 3er año (mujeres)', '% Retención 4to año', '% Retención 4to año (hombres)', '% Retención 4to año (mujeres)', 'ENCUESTA SATISFACCIÓN ', '% MUY BUENO B', '%        BUENO ', '%   REGULAR', '%         MALO', 'UNIDAD ACADÉMICA RESPONSABLE ', 'NOMBRE DIRECTOR/JEFE DE CARRERA O CURSO', 'N° Académicos', 'JCE ACADÉMICOS', 'JCE PROFESIONALES', 'N° ESTUDIANTES EN EL EXTRANJERO', 'FUENTE DE INFORMACIÓN', 'CARGO AUTORIDAD QUE VALIDA INFORMACIÓN ', 'NOMBRE AUTORIDAD QUE VALIDA INFORMACIÓN ']

const valoresApi = [
  ['INGENIERÍA CIVIL ACÚSTICA', 'UACh', 'PREGRADO', 1730.0, 'NULL', 2021.0, 125, 12, 113, 6, 29.0, 2.0, 27.0, 0.0, 0.0, 0.0, 'S/I', 1, 1, 'Tecnología', 'Ingeniería Civil en Sonido y Acústica', 'Virtual', 'DIURNO', '76,5', 'SI', 330, "2017-01-04", 11.0, 0.0, 330.0, '11 semestres', '11 semestres', '19,40', 'Sí (24/01/2017 al 24/01/2023)', 'No', '67,74', '68,00', '66,67', '66,67', '69,23', '50,00', '45,16', '44,83', '50,00', '55,56', '55,56', '----', 'S/I', 'S/I', 'S/I', 'S/I', 'S/I', 'Unidad de Análisis Institucional', 'Rodrigo Torres Alarcón', 11.0, 8.44, 2.0, 0.0, 'Departamento Registro Académico Estudiantil// Unidad de Análisis Institucional (U.A.I) / Escuela Ing. Civil Acústica.', 'Jefa// Analista estratégico institucional// Director de Escuela//Oficina de Movilidad Estudiantil', 'María Cristina Barriga// Paola Fuentes Macarena Agüero'],
  ['INGENIERÍA CIVIL ELECTRÓNICA', 'UACh', 'PREGRADO', 1736.0, 'NULL', 2021.0, 208, 19, 189, 23, 42.0, 4.0, 38.0, 6.0, 1.0, 5.0, 'S/I', 0, 2, 'Tecnología', 'Ingeniería Civil Electrónica', 'Virtual', 'DIURNO', '76,5', 'SI', 330, "2015-10-09", 11.0, 0.0, 330.0, '11 semestres', '11 semestres', '17,43', 'Sí (25/08/2016 al 25/08/20)', 'No', '81,82', '79,49', 100, '57,41', '60,87', '37,50', '50,82', '51,79', '40,00', '34,38', '35,00', '25,00', 'S/I', 'S/I', 'S/I', 'S/I', 'S/I', 'Unidad de Análisis Institucional', 'Alejandro Villegas Macaya', 15.0, 11.16, 1.82, 1.0, 'Departamento Registro Académico Estudiantil // U.A.I// Escuela de Ingeniería Civil Electrónica', 'Jefa// Analista estratégico institucional// Oficina de Movilidad Estudiantil', 'María Cristina Barriga// Paola Fuentes// Macarena Agüero'],
  ['INGENIERÍA CIVIL EN INFORMÁTICA', 'UACh', 'PREGRADO', 1708.0, 'NULL', 2021.0, 370, 34, 336, 32, 80.0, 4.0, 76.0, 29.0, 8.0, 21.0, 'S/I', 0, 2, 'Tecnología', 'Ingeniería Civil en Computación e Informática', 'Virtual', 'DIURNO', 153, 'SI', 330, "2017-01-04", 11.0, 0.0, 330.0, '11 semestres', '11 semestres', '19,60', 'Sí(22/01/2016 al 22/01/2021)', 'No', '81,58', '81,43', '83,3', '73,68', '75,00', '62,50', '56,58', '56,34', '60,00', '44,87', '43,55', '50,00', 'S/I', 'S/I', 'S/I', 'S/I', 'S/I', 'Unidad de Análisis Institucional', 'Ing. Marianna Villarroel Manfredi', 18.0, 17.23, 2.32, 2.0, 'Departamento Registro Académico Estudiantil // U.A.I// ESCUELA DE INGENIERÍA CIVIL INFORMÁTICA', 'Jefa// Analista estratégico institucional//Oficina de Movilidad Estudiantil', 'María Cristina Barriga// Paola Fuentes // Macarena Agüero'],
  ['INGENIERÍA CIVIL EN OBRAS CIVILES', 'UACh', 'PREGRADO', 1704.0, 'NULL', 2021.0, 468, 130, 338, 57, 67.0, 14.0, 53.0, 46.0, 23.0, 23.0, 'S/I', 0, 4, 'Tecnología', 'Ingeniería Civil en Obras Civiles', 'Virtual', 'DIURNO', '76,5', 'SI', 330, "2018-01-09", 11.0, 0.0, 330.0, '11 semestres', '11 semestres', '15,25', 'Sí (22/10/2014 al 22/10/2019)', 'No', '90,36', '88,89', '95,00', '88,31', '85,45', '95,47', '66,25', '66,67', '65,22', '72,95', '73,33', '72,00', 'S/I', 'S/I', 'S/I', 'S/I', 'S/I', 'Unidad de Análisis Institucional', 'Director: Dr.-Ing. Eduardo Peldoza Andrade', 22.0, 12.73, 2.45, 3.0, 'Departamento Registro Académico Estudiantil // U.A.I// ESCUELA DE INGENIERÍA CIVIL EN OBRAS CIVILES', 'Jefa// Analista estratégico institucional// Oficina de Movilidad Estudiantil', 'María Cristina Barriga// Paola Fuentes// Macarena Agüero'],
  ['INGENIERÍA CIVIL INDUSTRIAL', 'UACh', 'PREGRADO', 1822.0, '2012-10-03', 2021.0, 437, 144, 293, 40, 76.0, 21.0, 55.0, 12.0, 3.0, 9.0, 'S/I', 0, 1, 'Tecnología', 'Ingeniería Civil Industrial', 'Virtual', 'DIURNO', '539,5', 'SI', 330, "2012-10-3", 11.0, 0.0, 330.0, '11 semestres', '11 semestres', '13,04', 'Sí (16/06/2017 al 16/06/2021)', 'No', '94,05', '96,08', '90,91', '69,41', '78,69', '45,83', '69,05', '64,0', '76,47', '62,77', '58,42', '72,41', 'S/I', 'S/I', 'S/I', 'S/I', 'S/I', 'Unidad de Análisis Institucional', 'Dr. Vicente Ramírez', 10.0, 7.0, 0.32, 5.0, 'Departamento Registro Académico Estudiantil // U.A.I// ESCUELA DE INGENIERÍA CIVIL INDUSTRIAL', 'Jefa// Analista estratégico institucional// Oficina de Movilidad Estudiantil', 'María Cristina Barriga// Paola Fuentes// Macarena Agüero']
]



const Programas = () => {

  const [datos2,setDatos] = useState(datos)
  return (
    <div>
      <Table responsive="xl" size='sm' >
        <thead>
          <tr>
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

export default Programas