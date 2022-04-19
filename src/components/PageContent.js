import React from 'react';
import Pagefeatures from './PageFeatures';

const Pagecontent = (props) => {
    let contenido;
    if (props.data.gif == "") {
        contenido = <h3>Cargando....</h3>
    } else{
        contenido = <div className="row text-center">
        {props.data.gif.data.map((gif, i) => (

            <Pagefeatures key={gif.title + i} gif={gif.images} title={gif.title}/>
        ))} 
        
    </div>
    }

    return (
        <div className="container">

            {contenido}
            
        </div>
    );
}

export default Pagecontent;
