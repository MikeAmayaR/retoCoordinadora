### Video explicativo:
https://youtu.be/UgTNcu_AUlM

### Instalación
npm i - npm install

### Build
npm start

### Collection Postman
Incluido en el repositorio, dentro de la carpeta "docs" está la colleción de postman donde se pueden probar los ejercicios

### Respuesta Preguntas
1.	Con sus propias palabras explique que es una inyección de dependencias y para qué sirve

Es un patrón de diseño, usado para reutilizar código, básicamente nos permite inyectar otras clases y agregar funcionalidad a estas de forma transversal. Podemos hacer que una claseA dependa de una claseB sin importar su implementación. 

2.	Explique con sus propias palabras las diferencias entre asíncrono y síncrono

Un método síncrono espera a que la anterior instrucción se cumpla o de una respuesta, ya sea una un consumo a algún api, alguna validación, etc mientras que uno asíncrono sigue su ejecución sin esperar a que se cumplan las instrucciones que vienen detrás, ya que el método retorne el resultado se muestra al usuario, ya sea este exitoso o no.

3.	Cuál es la importancia del uso de promesas en un proyecto
Una promesa es un objeto el cual tiene como opciones de respuesta a resolve() y reject(), devuelve resolve cuando la petición es exitosa, devuelve reject cuando la petición encuentra un error o tiene algún fallo. Las ventajas de usar promesas poniendo un ejemplo, cuando se deben ejecutar dos métodos asíncronos seguidos, como sabemos un método asíncrono sigue su ejecución sin esperar respuesta, al usar una promesa en este caso, no se va a ejecutar la siguiente asíncrona hasta no obtener una respuesta ya sea que la anterior sea exitosa o de error. Un objeto Promise representa la finalización exitosa o de error de una operación asíncrona y su valor resultante.

4.	Cuál es la importancia de usar ORM dentro de un proyecto, ventaja y desventaja

Ventajas
•	No se escribe sentencias SQL directamente en el código, al usar ORM esta hace ese trabajo
•	Permite la herencia, esto cuando se usa programación orientada a objetos
•	El modelo se tiene en un solo archivo lo que permite su uso en cualquier parte del Código
•	Se evitan ataques de inyección SQL ya que protege los datos que entran y de lo que el mismo ORM va a obtener

Desventajas
Pienso que no hay desventajas en usar ORM, de pronto que la curva de aprendizaje lleva tiempo y que se necita de una buena estructura y arquitectura de codificación

5.	Qué diferencia hay entre una base de datos SQL, NOSQL
La principal diferencia es que SQL permite el uso de bases de datos relacionales y puede tomar información combinada de muchas tablas, además permite la manipulación de los datos, NOSQL no es base de datos relacional, pero permite tomar masivas cantidades de datos y distribuirlos 



6.	¿Si hablo de colección y documentos me refiero a?

Si hablamos en el idioma de firebase, un documento es un registro el cual hace uso mínimo de recursos, contiene campos con valores asignados y cada documento se identifica con un nombre, estos documentos son básicamente un JSON.
Una colección es donde se encuentran almacenados los documentos, una colección solo almacena documentos y estos documentos deben tener campos sin procesar y el nombre de cada documento debe ser único. 
Ej: una colección que contiene los productos de un almacén, cada documento tiene su nombre único con el cual representa un producto. 

7.	¿Si una aplicación está sacando error de CORS a que se está refiriendo?
Cuando hay errores de CORS es porque nuestra aplicación no tiene los permisos suficientes para acceder a algún consumo externo, esto quiere decir que estoy intentando consultar un recurso que no esta dentro del mismo dominio que mi app, por lo tanto, se debe implementar CORS lo cuales tienen cabeceras HTTP adicionales que le dicen al recurso mediante el navegador que mi app ya tiene el acceso para consumirlo, así no este dentro del mismo dominio.

