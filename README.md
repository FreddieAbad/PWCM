# Geoportal de la Comunidad de Investigación de Territorio y Movilidad - U Cuenca

## Especificación de Requisitos de Software

Este documento tiene como propósito la definición y la elaboración de una versión 1 del sistema principal y los módulos respectivo del Geoportal Universitario CITMOV que busca publicar mediante un aplicativo web los resultados de los estudios realizados por la Comunidad Investigativa CITMOV de la Facultad de Arquitectura y Urbanismo de la Universidad de Cuenca. 

Dichos módulos (Gestión de Mapas, Gestión de Usuarios, Gestión de Menús,  Mantenimiento), se presenta como un servicio de soporte al portal informativo estático ya existente (www.citmovucuenca.com). En concreto se definirán las características del sistema, los actores involucrados en el mismo y los requisitos funcionales y no funcionales. 

El geoportal en beta, se encuentra alojado en Github Pages (__https://freddieabad.github.io/PWCM/index.html__), __para acceder y tener una buena experiencia de uso se recomienda usar una pantalla de resolución mediana__ (1366 x 768 px).

Para la __revisión del código fuente__, se encuentra en el siguiente Repositorio: https://github.com/FreddieAbad/PWCM 

Los __diagramas__ citados en la siguientes secciones se encuentran alojados en: https://www.lucidchart.com/invitations/accept/e2c450ea-4065-4db7-bd8c-409f40d81aec 

Dada la información detallada, se podrá tener una visión clara de los objetivos del módulo del sistema de gestión del consultorio odontológico.

#### OBJETIVOS DEL SISTEMA

* Elaborar un Portal Web SIG (Sistema de información geográfica) que gestione los usuarios existentes y de soporte a nuevos usuarios.
* Modelar e implementar una base de datos del Grupo de Investigación CITMOV -  Universidad de Cuenca.
* Publicar los mapas en un Geoportal accesible para cualquier usuario, con accesos restringidos para la descarga de los resultados.

#### USUARIOS DEL SISTEMA

* *Usuario Web:* Usuario del Subsistema Web Geoportales, Usuarios y Menús, tiene restricción a sólo visualización.
* *Usuario Registrado:* Usuario del Subsistema Web Geoportales, Usuarios y Menús, tiene restricción a visualización y descarga de datos.
* *Sistema:* Usuario que representa las acciones automáticas del sistema y su acceso para mantenimiento.
* *Administrador:* Usuario que permite la gestión de los Subsistemas de Usuarios, Menús, Geoportal y Mantenimiento, tiene acceso ilimitado al sistema.

![fig1](https://user-images.githubusercontent.com/38579765/69000800-55c6ba00-08a3-11ea-8483-88c4c755b7bf.jpg)

*Figura 1: Usuarios del Sistema de Geoportal Universitario del Grupo de Investigación CITMOV de la Universidad de Cuenca*

#### CARACTERÍSTICAS

El sistema estará dividido en 3 subsistemas, cada uno de los cuales tendrá características asociadas; estos subsistemas son:
* *Módulo de Gestión de Usuarios:* Este módulo tiene el fin de crear, modificar o eliminar usuarios, registrados o no, para tener un perfil de usuario, se debe ser de algún grupo de investigación o entidad publica asociada a CITMOV.
* *Modulo de Gestion de Mapas:* Este módulo permite el mantenimiento de los mapas resultantes de las investigaciones realizadas. Los mapas que se manipulen en el lado del cliente se hará en un formato html, css, javascript. Utilizando un principio de arquitectura serverless, heavy customer. Los mapas son indexados a cada menú de investigación mediante items.
* *Módulo de Menús:* El módulo permite gestionar el número de menús y mapas indexados. A nivel de diseño de base de datos, se contempla esta abstracción, sin embargo por tiempos de entrega, la implementación web se hizo de manera estática.
* *Módulo de Mantenimiento:* El módulo permite gestionar el registro de errores a nivel de usuario registrado y no registrado. Los errores registrados serian manejados por el encargado del sistema (administrador).

#### REQUISITOS NO FUNCIONALES

Dentro de los requisitos no funcionales tenemos el estándar ISO 9126 (estándar internacional para la evaluación de la calidad del software) para su descripción en cuanto a factores que deben ser tomados en cuenta para detallar cada uno de los requisitos. 
Las características que deben cumplir para obtener un producto de calidad son:
* *Disponibilidad:* El sistema al estar en un entorno web debe estar disponible las 24 horas, 7 días a la semana y 365 días al año.
* *Funcionalidad:* Nos permitirá cumplir con todas las funciones y propiedades que el usuario del sistema demanda:
El usuario podrá acceder al sistema mediante dispositivos de escritorio con monitores medianos (1280 x 720 px / 1280 x 800 px / 1366 x 768 px) con conexión a Internet y un navegador .
El sistema se desarrollará con lenguajes de interpretado en sus recientes versiones para un mejor performance en la mayoría de navegadores populares en la actualidad.
* *Fiabilidad:* Para que el sistema cumpla con este requisito no funcional pero muy importante deberá tener las siguientes características:
El sistema permitirá trabajar en forma muy transparente sin ambigüedades para el usuario; su navegación será fluida y muy natural, sin necesidad de un conocimiento tecnológico muy avanzado. 
El sistema también debe ser tolerante a nivel de software y base de datos, teniendo presente siempre la recuperabilidad para poder así obtener siempre información precisa y veraz en el caso de una caída del sistema, como también un sistema que permita evitar las inconsistencias de la información.
* *Usabilidad:* Las interfaces del sistema serán amigables, que permitan un aprendizaje fácil, una operatividad adecuada y que sean muy atractivos.
* *Eficiencia:* El sistema debe ser eficiente y tener un adecuado uso de recursos, ya que este debe interactuar con otros sistemas y esta interoperabilidad debe hacerse de forma eficiente, así como también los procesos y consultas deben estar optimizados para realizarse en forma rápida.
* *Mantenibilidad:* El software debe permitir escalar en número de ítems sin ningún problema, además de solicitudes de compras públicas y proformas.
* *Portabilidad:* El software tendrá disponibilidad en cualquier dispositivo que tenga conexión a Internet y un navegador web.

#### DIAGRAMA DE DOMINIO
![fig3](https://user-images.githubusercontent.com/38579765/69000801-55c6ba00-08a3-11ea-8f05-d62484cbb2a1.jpg)
*Figura 3:Diagrama de dominio del Geoportal CITMOV.*

#### DIAGRAMA DE CONTEXTO

Diagrama de Contexto General: El siguiente diagrama, permite abstraer generalmente el funcionamiento del geoportal desarrollado. La interacción de cada uno de los usuarios con los módulos.  
![fig4](https://user-images.githubusercontent.com/38579765/69000802-55c6ba00-08a3-11ea-9de7-47085e576995.jpg)
*Figura 4: Actores representados jerárquicamente del Sistema de Geoportal Universitario del Grupo de Investigación CITMOV de la Universidad de Cuenca*

Diagrama de Contexto - Cliente

![fig5](https://user-images.githubusercontent.com/38579765/69000803-565f5080-08a3-11ea-8583-282018096749.jpg)
*Figura 5: Diagrama de contexto del Usuario Cliente, y su interacción con los módulos del Geoportal.*

Diagrama de Contexto - Sistema
![fig6](https://user-images.githubusercontent.com/38579765/69000804-565f5080-08a3-11ea-8234-ded5504e470a.jpg)
*Figura 6: Diagrama de contexto del Usuario Sistema, y su interacción con los módulos del Geoportal.*

Diagrama de Contexto - Administrador
![fig7](https://user-images.githubusercontent.com/38579765/69000805-56f7e700-08a3-11ea-8808-b8f660a62667.jpg)
*Figura 7: Diagrama de contexto del Usuario Administrador, y su interacción con los módulos del Geoportal.*



#### FUNCIONES PRINCIPALES SEGUN USUARIOS
##### ADMINISTRADOR

![fig8](https://user-images.githubusercontent.com/38579765/69000806-56f7e700-08a3-11ea-853a-db46a29a1b50.jpg)
*Figura 8: Diagrama de Uso de Administrador, y su interacción con los módulos del Geoportal.*
![fig9](https://user-images.githubusercontent.com/38579765/69000807-56f7e700-08a3-11ea-82ff-d794dc6c023f.jpg)
*Figura 9: Diagrama de Uso de Cliente Pago y No Pago, y su interacción con los módulos del Geoportal.*

![fig10](https://user-images.githubusercontent.com/38579765/69000808-58291400-08a3-11ea-8021-b8bba6417eb4.jpg)
*Figura 10: Diagrama de Uso de Sistema, y su interacción con los módulos del Geoportal.*

#### FUNCIONES PRINCIPALES DE MÓDULOS - USUARIOS

##### Módulo de Gestión de Menús
![fig11](https://user-images.githubusercontent.com/38579765/69000809-58c1aa80-08a3-11ea-88ab-2d92109e8816.jpg)
*Figura 11: Diagrama de Interacción de los distintos Usuarios con el Módulo de Gestión de Mapas del Geoportal.*

##### Módulo Gestión de Menús
![fig12](https://user-images.githubusercontent.com/38579765/69000810-58c1aa80-08a3-11ea-93c9-d9bc881a3d7c.jpg)
*Figura 12: Diagrama de Interacción de los distintos Usuarios con el Módulo de Gestión de Menús del Geoportal.*

##### Módulo Gestión de Usuarios
![fig13](https://user-images.githubusercontent.com/38579765/69000811-595a4100-08a3-11ea-825f-9930d74bc902.jpg)
*Figura 13: Diagrama de Interacción de los distintos Usuarios con el Módulo de Gestión de Usuarios del Geoportal, este módulo en especial, necesita de la gestión de acuerdos con los departamentos externos a CITMOV.*

#### DIAGRAMA E/R DE BASE DE DATOS
![fig14](https://user-images.githubusercontent.com/38579765/69000812-595a4100-08a3-11ea-9e2d-2ab2eca83435.jpg)
*Figura 14: Diagrama Entidad Relación de la Base de Datos Implementada para el Geoportal.*
