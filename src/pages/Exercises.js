import React from 'react'
import ExerciseList from '../components/ExerciseList'
import Welcome from '../components/Welcome'
import Add from '../components/Add'

const Exercises = ({data}) => (
    <React.Fragment>
        <Welcome
            username="Daniel"
        />
        <ExerciseList
            exercises={data}
        />
        <Add />
    </React.Fragment>
)

export default Exercises