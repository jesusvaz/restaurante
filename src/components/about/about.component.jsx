import React from 'react'

const About = (props) => {
   
    return (
        <>
            {
               props.location.state.data.lang === "en"?
               <>
                <h3>Our History</h3>
                <p>
                    Traditional Mexican food since 2000
                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words
                </p>
               </>
               :
               <>
                <h3>Nuestra historia</h3>
                <p> 
                    Comida tradicional mexicana ofreciendo  comida desde el año 2000
                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words
                </p>
               </>

            }
        </>
    )
}

export default About

