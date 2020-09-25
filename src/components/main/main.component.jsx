import React  ,{useState} from 'react';
import {Route, Switch, Link} from 'react-router-dom';

import RISTORANTE_MENU from '../menu/menu';
import COMENTS from '../menu/review';
import Content from '../content/content.component';
import MenuImage from '../picture/picture.component';
import Arrow from '../arrow/arrow.component';
//https://github.com/jesusvaz/restaurante.git

 
import './main.styles.scss';
 
const Main = () => {
   const [lang,setLang] = useState('en');
   const [menu,setMenu] = useState(RISTORANTE_MENU);
   const [menuCounter,setmenuCounter] = useState(0);
   const [reviews,setReviews] = useState(COMENTS);

const PassProps = () => {
return {lang:lang,comentarios:reviews};

}

   const Advance = (add) => {
       let arrayLength = RISTORANTE_MENU.dishes.length;
      // debugger;
       if( menuCounter < arrayLength ) {
           
           add === '+' ? setmenuCounter(menuCounter + 1) : setmenuCounter(menuCounter - 1)
           localStorage.setItem('menuCounter', menuCounter);
       }
   }

  //  <Link to='/reviews/chuy'>Reviews</Link>

   return (
       <div>
         
           <div className="deaderDropDown">
                    
           <select name="language"
           onChange={
                   e => (setLang(e.target.value))
               }>
               <option value="en">English </option>
               <option value="es">Espanol</option>
          
           </select>
       <div>
       <div className="links">
            <ul>
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
           </ul>
        </div>
       </div>
       
       </div>
       <div  className="main">
            <div className="escription">
               <Content
               lang={lang}
               menuInfo={RISTORANTE_MENU.dishes[menuCounter]}/>
           </div>
           <div className="description-img">
               <MenuImage menuInfo={RISTORANTE_MENU.dishes[menuCounter]} />
           </div>
       </div>
 
       {    
            (menuCounter >= 1) ? (
                    <button onClick={
                        () => Advance('-')
                    }><Arrow label={lang === 'en' ? ' << PREVIOUS' : ' << ANTERIOR'} /></button>
                ) : null
        }
    
         {
              (menuCounter < RISTORANTE_MENU.dishes.length - 1) ? (
                <button onClick={
                    () => Advance('+')
                }><Arrow label={lang === 'en' ? '  NEXT >>' : ' SIGUIENTE >>'} /></button>
                ) : null  
         }
 
       </div>
         
   )
}
 
export default Main