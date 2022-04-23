## Pasos para ejecutar
1. configurar el archivo config con los valores correspondientes a la base de datos
2. asegurarse de tener la base de datos creada
3. ejecutar:
```
    npm run dev
```

* endpoints

    - /api/v1/ejes -> retorna un arreglo con objetos json, que contienen los nombres, y el porcentaje de completado de los ejes

    - /api/v1/idicadores/eje -> retorna un arreglo con objetos json que contienen los nombres, id y metricas de los indicadores, de un eje especifico
