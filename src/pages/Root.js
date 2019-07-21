import React from 'react'
import { Link } from 'react-router-dom'

const Root = () => (
    <div className="container">
        <h1>FITNESS FRONT-END WITH REACT</h1><br/>
        <Link to="/exercises">
            Go to exercises!
        </Link>
    </div>
)

export default Root