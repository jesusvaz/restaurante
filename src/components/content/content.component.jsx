import React from 'react';
import './content.styles.scss';
 
function Content({lang, menuInfo}) {
   return (
       <div>
          
           <h2> {lang === 'en' ? menuInfo.dish.en : menuInfo.dish.es} </h2>
          
           <p>
              {lang === 'en' ? menuInfo.content.en : menuInfo.content.es}
           </p>
       </div>
   )
}
 
export default Content