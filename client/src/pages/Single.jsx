import React from 'react'
import Edit from "../images/edit.png"
import Delete from "../images/delete.png"
import {Link} from 'react-router-dom'
import Menu from '../components/Menu'

const Single = () => {
  return (
    <div className='single'>
      <div className="content">
        <img src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt="" />
      <div className="user">
        <img src="https://images.unsplash.com/photo-1661956600684-97d3a4320e45?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
        <div className="info">
          <span>
            John
          </span>
          <p>Posted 2 days ago</p>
        </div>
        <div className="edit">
          <Link to={`/write?edit=2`}>
          <img src={Edit} alt="" />
          </Link>
          <img src={Delete} alt="" />
        </div>
      </div>
      <h1>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h1>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia, laboriosam. Enim repellat facilis dignissimos, quae minima nam corrupti neque iure atque aperiam nobis, totam aut explicabo sint quam deserunt facere.
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut minima debitis iusto harum quos, provident vitae non quidem, quasi sapiente quis porro in velit facere magnam, atque perspiciatis voluptates facilis.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel sit fugit quos dignissimos quaerat veritatis officia dolor, omnis cumque doloremque expedita reiciendis voluptate amet in molestias ipsam nihil laborum deleniti.
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus porro est odio! Magni doloribus repudiandae quia tempora? Fugiat fuga iste reiciendis placeat doloremque harum itaque voluptate, nihil quam temporibus sit.</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus eveniet dignissimos, laudantium dolores aspernatur impedit, facilis animi veritatis debitis blanditiis architecto. Earum eius, error inventore voluptatum corrupti iure numquam nulla!
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa exercitationem dolorum eaque debitis nemo ea sunt earum placeat iste pariatur eum expedita est deserunt odit, fuga quae impedit. Saepe, optio.
        </p>
      </p>
      </div>
    <Menu/>
    </div>
  )
}

export default Single