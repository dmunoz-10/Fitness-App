import React from 'react'
import imageAdd from '../images/add.png'
import { Link } from 'react-router-dom'

const Add = () => (
    <div className="container text-center mt-15">
        <Link to="/exercise/new">
            <img src={imageAdd} alt="Add" />
        </Link>
    </div>
)

export default Add