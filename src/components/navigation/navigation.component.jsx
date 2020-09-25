import React from 'react';
import {Route, Switch, Link} from 'react-router-dom';

const Navigation = ({lang}) => {
    return (
        <>
                {
            lang === "en"?  
            <>
                <li><Link to="/" >Home</Link></li>
                <li><Link to={{ pathname: '/about', state: {  data:PassProps()   }  }}   >About</Link></li>
                <li><Link to={{ pathname: '/reviews', state: {  data:PassProps()   }  }}   >ReviewsComents</Link></li>
            </> : 
            <>
                <li><Link to="/" >Home</Link></li>
                <li><Link to={{ pathname: '/about', state: {  data:PassProps()   }  }}   >Conocenos</Link></li>
               <li><Link to={{ pathname: '/reviews', state: {  data:PassProps()   }  }}   >Comentarios</Link></li>
            </>
           } 
        </>
    )
}

export default Navigation;

