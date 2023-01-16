//Dentro de lo que son los Hooks tenemos useEffect, useState y
//El useEffect tiene algunas aplicaciones pero lo mas normal es utilizarlo cuando queremos que pase algo al
//inicio y al final del componente, basicamente maneja los ciclos de vida de los componentes
//primero hay que importar los "use" como sigue
import {useEffect} from "react" 
//luego le damos utilidad
//La sintaxys del useEffect consiste en 
//useEffect(), entre parentesis van las variantes y generalmente son una funcion y otra cosa variante mas, dependiendo la variante tendremos
//distintos efectos, las variantes son:
//[] On mount, o sea se ejecuta una sola vez
//[prop1, prop2], o sea se ejecuta cada vez que varía la propiedad 1 y/o la propiedad 2
//undefined, o sea no posee nada, se ejecuta cada vez que se renderiza el componente 
useEffect(() => {
    //montaje
    console.log("Acá está pasando algo mientras el componente se esta inicializando")
    //desmontaje
    return() => {
        console.log("Acá está pasando algo mientras el componente está finalizando")
    }
}
)
//los hooks siempre se ejecutan del tipo accion => limpieza => accion => limpieza, para evitar errores