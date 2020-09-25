import React from 'react';
import '../picture/picture.styles.scss';
 
function MenuImage({menuInfo}) {
   return (
       <div>
           <img className="responsive" 

           src={menuInfo.imageUrl}></img>
       </div>
   )
}
 
export default MenuImage