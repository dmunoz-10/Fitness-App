import React from 'react'
import Card from './Card'

const ExerciseList = ({exercises}) => (
    <div>
        {exercises.map(({id, title, description, img, leftColor, rightColor}) => {
            return (
                <Card
                    key={id}
                    title={title}
                    description={description}
                    img={img}
                    leftColor={leftColor}
                    rightColor={rightColor}
                />
            )
        })}
    </div>
)

export default ExerciseList