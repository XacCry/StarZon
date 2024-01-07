// import React from 'react'
import { NavLink } from 'react-router-dom'
import img1 from '../assests/img/Coffee_cherry_spices_9de46c3e1b.jpg'
import '../page/css/Blog1.css';

const Blogs1 = () => {
    return (
        <div>
            <div className='tag'>
                <div className="flex row">
                <NavLink to="/">Home </NavLink>
                <h1>&nbsp;&gt;&nbsp;</h1>
                <NavLink to=""> Coffee Culture</NavLink>
                </div>
            </div>
            <div className="image-container">
                <img src={img1} alt="" />
            </div>
            <section className='coffee-blog-content'>
                <div className="container pt-5 rounded-tl-3xl rounded-tr-3xl">
                    <div className="row">
                        <div className='col-12 coffee-blog-space-m'>
                            <div className="title mb-2">
                                <h3> Species of Coffee Trees </h3>
                            </div>
                            <div className="text-content pt-2">
                                <div className="text">
                                    <p>
                                    Not all coffee is created equal. You already know that the two most recognized species of commercially grown coffee trees are arabica and robusta. They greatly differ from each other, and here’s why we only purchase arabica coffee 
                                    </p>
                                    <img src="https://preprodtsbstorage.blob.core.windows.net/cms/uploads/Bean_comparision_robusta_Arabica_04f59803e8.jpg" alt="" width="250px"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Blogs1