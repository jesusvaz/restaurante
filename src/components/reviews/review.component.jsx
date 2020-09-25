import React  from 'react';

//  menuInfo={RISTORANTE_MENU.dishes[menuCounter]}/>

const Review =(props) => {

    // console.log('Coments has');
    // console.log(props.location.state.comenents);
    // console.log('lang has');
    // console.log(props.location.state.lang);
   
    // console.log('state has');
    // console.log(props.location.state);
    // console.log('location has');
    // console.log(props.location);
     console.log('new way has');
     console.log(props.location.state.data.comentarios.comments);

     console.log(props.location.state.data.lang);
    

    const listItems = props.location.state.data.comentarios.comments.map(comment =>
        <p key={comment.number}>

        {
        props.location.state.data.lang === "en" ?
        comment.language.en
        :
        comment.language.es
        }
        </p>
   );

   const lang = props.location.state.data.lang;

    return (
        <div>
           <p>{lang === "es"?"Comentarios":"Reviews"}</p> 
            {listItems}
        </div>
    )
}

export default Review
