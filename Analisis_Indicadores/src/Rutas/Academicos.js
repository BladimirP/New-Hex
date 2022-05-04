import React,{useState} from 'react'
import Table from 'react-bootstrap/Table'

const datos = 
  ['N°', 'A.1 RUT', 'A.2 APELLIDO PATERNO', 'A.3. APELLIDO MATERNO', 'A.4. NOMBRES', 'A.5. GENERO', 'A.6. CORREO ELECTRONICO', 'C.1. FECHA INGRESO INSTITUCION (MES/AÑO)', 'C.2. OCUPACION (ACA-INV-TEC-OTRO)', 'C.3. TIPO DE CONTRATO 2014', 'C.4. CATEGORIA DOCENTE (SI APLICA)', 'C.5. DEPARTAMENTO ASOCIADO', 'TITULO PREGRADO', 'INSTITUCIÓN', 'AÑO', 'TITULO MAGISTER', 'INSTITUCIÓN.1', 'AÑO.1', 'GRADO DOCTORADO', 'INSTITUCIÓN.2', 'AÑO.2', 'Jornada', 'HORAS PREGRADO', 'HORAS POSTGRADO MAGISTER', 'HORAS CDC AÑO INFORME ', 'HORAS  I&D AÑO INFORME', 'HORAS i&e AÑO INFORME ', 'FUENTE DE INFORMACIÓN', 'CARGO AUTORIDAD QUE VALIDA INFORMACIÓN ', 'NOMBRE AUTORIDAD QUE VALIDA INFORMACIÓN ']

const valoresApi = 
[
    [1, '9251977-5', 'Arenas', 'Bermúdez', 'Jorge', 'Masculino', 'NULL', '1989-1-1', 'ACADEMICO', 'Contrato Indefinido / Planta', 'Categoría I', 'Instituto de Acústica', 'Ingeniero Acústico', 'Universidad Austral de Chile', 1988, 'Magíster en Física', 'Universidad Austral de Chile', 1996, 'Doctor en Ingeniería Mecánica', 'Auburn University. USA', 2001.0, 44.0, 13, 11, 'NULL', 13, 'NULL', 'Dirección de personal / Institutos FCI', 'Decanatura FCI', 'Richard Luco'],
    [2, '9551298-4', 'Barros', 'Rojas', 'José Luis', 'Masculino', 'NULL', '1989-09-01', 'ACADEMICO', 'Contrato Indefinido / Planta', 'Categoría II', 'Instituto de Acústica', 'Ingeniero Acústico', 'Universidad Austral de Chile.', 1989, 'NULL', 'NULL', 'NULL', 'Doctor en Ciencias de la Ingeniería Acústica', 'Technische Universität Berlín, Alemania.', 2000.0, 44.0, 10, 11, 'NULL', 6, 'NULL', 'Dirección de personal / Institutos FCI', 'Decanatura FCI', 'Richard Luco'],
    [3, '7371120-7', 'Cárdenas', 'Mansilla', 'Jorge', 'Masculino', 'NULL', '1990-09-01', 'ACADEMICO', 'Contrato Indefinido / Planta', 'Categoría III', 'Instituto de Acústica', 'Ingeniero Acústico', 'Universidad Austral de Chile', 1990, 'Magister en Teoría de la Señal y Comunicaciones', 'Universidad Politécnica de Madrid, España', 2004, 'NULL', 'NULL', 'NULL', 44.0, 13, 'NULL', 'NULL', '2,2', 'NULL', 'Dirección de personal / Institutos FCI', 'Decanatura FCI', 'Richard Luco'],
    [4, '12246372-9', 'Otondo', 'Ruiz', 'Felipe', 'Masculino', 'NULL', '2014-03-01', 'ACADEMICO', 'Contrato Indefinido / Planta', 'Categoría II', 'Instituto de Acústica', 'Ingeniero Acústico', 'Universidad Austral de Chile.', 1998, 'Magíster en Ingeniería', 'Universidad de Aalborg, Dinamarca.', 2000, 'Doctorado en Música y Tecnología (Mención composición)', 'Universidad de York, Reino Unido.', 2008.0, 44.0, 10, 'NULL', 'NULL', 18, 4.0, 'Dirección de personal / Institutos FCI', 'Decanatura FCI', 'Richard Luco'],
    [5, '26410131-K', 'Rabello', 'Mestre', 'André', 'Masculino', 'NULL', '2018-08-01', 'ACADEMICO', 'Contrato Indefinido / Planta', 'Categoría III', 'Instituto de Acústica', 'Bachiller en Música', 'Universidad Estatal de Campinas, Brasil', 2010, 'Magíster en Música (Composición)', 'Universidad de Alberta, Canadá', 2013, 'Doctor en Artes Musicales (Composición)', 'Universidad de Boston Estados Unidos', 2018.0, 44.0, 13, 'NULL', 'NULL', 18, 'NULL', 'Dirección de personal / Institutos FCI', 'Decanatura FCI', 'Richard Luco'],
    [6, '10172952-4', 'Poblete', 'Ramírez', 'Víctor Hernán', 'Masculino', 'NULL', '1993-11-01', 'ACADEMICO', 'Contrato Indefinido / Planta', 'Categoría II', 'Instituto de Acústica', 'Ingeniero Acústico', 'Universidad Austral de Chile.', 1993, 'Magíster en Física', 'Universidad Austral de Chile.', 2001, 'Doctor en Ingeniería Eléctrica', 'Universidad de Chile.', 2014.0, 44.0, 15, 11, 'NULL', 13, 'NULL', 'Dirección de personal / Institutos FCI', 'Decanatura FCI', 'Richard Luco'],
    [7, '14188119-1', 'Torres', 'Alarcón', 'Rodrigo', 'Masculino', 'NULL', '2018-03-01', 'ACADEMICO', 'Contrato Indefinido / Planta', 'Profesor Adjunto Categoría C', 'Instituto de Acústica', 'Ingeniero Acústico', 'Universidad Austral de Chile', 2008, 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL', 44.0, 35, 'NULL', 'NULL', 9, 'NULL', 'Dirección de personal / Institutos FCI', 'Decanatura FCI', 'Richard Luco'],
    [8, '10645365-9', 'Suárez', 'Silva', 'Enrique A.', 'Masculino', 'NULL', "2003-04-01", 'ACADEMICO', 'Contrato Indefinido / Planta', 'Categoría II', 'Instituto de Acústica', 'Ingeniero Acústico', 'Universidad Austral de Chile.', 1995, 'NULL', 'NULL', 'NULL', 'Doctor en Ingeniería Acústica', 'Universidad Politécnica de Madrid, España.', 2002.0, 44.0, 14, 8, 'NULL', 13, 'NULL', 'Dirección de personal // Institutos FCI', 'Decanatura FCI', 'Richard Luco'],
    [9, '10756428-4', 'Yori', 'Fernández', 'Sergio A.', 'Masculino', 'NULL', "2001-01-01", 'ACADEMICO', 'Contrato Indefinido / Planta', 'Categoría III', 'Instituto de Acústica', 'Ingeniero Acústico', 'Universidad Austral de Chile.', 1993, 'Magister en Teoría de la Señal y Comunicaciones', 'Universidad Politécnica de Madrid, España', 2004, 'Doctor en Cs. de la Ingeniería', 'Technische Universität Berlín, Alemania.', 2013.0, 44.0, 22, 'NULL', 'NULL', 18, 'NULL', 'Dirección de personal // Institutos FCI', 'Decanatura FCI', 'Richard Luco'],
    [10, '16684555-6', 'Figueroa', 'Gómez', 'Felipe', 'Masculino', 'NULL', "2018-08-01", 'ACADEMICO', 'Contrato indefinido / Planta', 'Profesor Adjunto Categoría C', 'Instituto de Acústica', 'Ingeniero Civil Acústico', 'Universidad Austral de Chile', 2017, 'Magister en Acústica y Vibraciones', 'Universidad Austral de Chile', 2017, 'NULL', 'NULL', 'NULL', 33.0, 30, 'NULL', 'NULL', 'NULL', 'NULL', 'Dirección de personal // Institutos FCI', 'Decanatura FCI', 'Richard Luco']


]

/*
const valoresApi = [
  [
    1,
    "12345678-9",
    "Saez",
    "Jara" ,
    "Fabio Antonio",
    "Masculino",
    "correo@gmail.com",
    "2040,Enero",
    "OTRO",
    "Honorario",
    "Categoria1",
    "Instituto de informatica",
    "Ingeniero En ingenieria",
    "Universidad austral de chile"
  ],[
    2,
    "12345678-9",
    "Saez",
    "Jara" ,
    "Fabio Antonio",
    "Masculino",
    "correo@gmail.com",
    "2040,Enero",
    "OTRO",
    "Honorario",
    "Categoria1",
    "Instituto de informatica",
    "Ingeniero En ingenieria",
    "Universidad austral de chile"
  ],
  [
    3,
    "12345678-9",
    "Saez",
    "Jara" ,
    "Fabio Antonio",
    "Masculino",
    "correo@gmail.com",
    "2040,Enero",
    "OTRO",
    "Honorario",
    "Categoria1",
    "Instituto de informatica",
    "Ingeniero En ingenieria",
    "Universidad austral de chile"
  ],
  [
    3,
    "12345678-9",
    "Saez",
    "Jara" ,
    "Fabio Antonio",
    "Masculino",
    "correo@gmail.com",
    "2040,Enero",
    "OTRO",
    "Honorario",
    "Categoria1",
    "Instituto de informatica",
    "Ingeniero En ingenieria",
    "Universidad austral de chile"
  ],

]
*/


const Academicos = () => {
  const [datos2,setDatos] = useState(datos)
  return (
    <div > 
      <Table  striped >
        <thead className='tablasFijas'>
          <tr >
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
                    <td>{valores}</td>
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

export default Academicos