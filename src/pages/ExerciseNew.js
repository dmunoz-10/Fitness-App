import React from 'react'
import ExerciseForm from '../components/ExerciseForm'
import Card from '../components/Card'
import { Link } from 'react-router-dom'

const ExerciseNew = ({ form, onChange, onSubmit }) => (
    <div className="container">
        <div className="row">
            <div className="col-sm">
                <Card
                    {...form}
                />
            </div>
            <div className="col-sm">
                <ExerciseForm
                    onChange={onChange}
                    onSubmit={onSubmit}
                    form={form}
                />
            </div>
        </div>
        <Link to="/exercises">
            <button className="btn btn-primary">Back</button>
        </Link>
    </div>
)

export default ExerciseNew