

import React from 'react'
import {data} from "../restApi.json"
const Menu = () => {
  return (
    <section className='menu'  id='menu'>
        <div className='container'>
          <div className='heading_secion'>
            <h1 className='heading'>POPULAR DISHES</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error corrupti odio quidem modi dolores nulla obcaecati, inventore cumque tenetur molestiae odit optio ipsum omnis non, accusantium laudantium? Velit, aperiam molestiae.</p>
          </div>
          <div className='dishes_container'>
            {data[0].dishes.map((element)=>{
            return(
                <div className='card' key={element.id}>
                 <img src={element.image} alt={element.id} />   
                   <h3>{element.title}</h3>
                   <button>{element.category}</button>
                </div>
            );


            }
            )}
          </div>
        </div>

    </section>
  )
}

export default Menu