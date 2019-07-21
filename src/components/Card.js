import React, {Component} from 'react'
import circlesImg from '../images/circles.png'
import './styles/Card.css'

class Card extends Component {

    render() {
        const { title, description, img, leftColor, rightColor } = this.props

        return (
            <div className="card mx-auto Fitness-Card"
            style={{
                backgroundImage: `url(${ circlesImg }), linear-gradient(to right, ${ leftColor || 'BLACK' }, ${ rightColor || 'BLACK' })`
            }}
            >
                <div className="card-body">
                    <div className="row center">
                        <div className="col-6">
                            <img src={ img || 'https://firebasestorage.googleapis.com/v0/b/tutoriales-e4830.appspot.com/o/exercise03.png?alt=media' }
                                alt="A card" className="float-right" />
                        </div>
                        <div className="col-6 Fitness-Card-Info">
                            <h1>{ title || 'Test' }</h1>
                            <p>{ description || 'Description' }</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Card