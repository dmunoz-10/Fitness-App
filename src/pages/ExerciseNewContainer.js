import React, {Component} from 'react'
import FatalError from './500'
import Loading from '../components/Loading'
import ExerciseNew from './ExerciseNew'
import url from '../config'

class ExerciseNewContainer extends Component {

    state = {
        form: {
            title: '',
            description: '',
            img: '',
            leftColor: '',
            rightColo: ''
        },
        error: null,
        loading: false
    }

    handleChange = e => {
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        })
    }

    handleSubmit = async e => {
        this.setState({
            loading: true
        })
        e.preventDefault()
        try {
            let config = {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.state.form)
            }

            /* let response = */ await fetch(`${url}/exercises`, config)
            // let json = await response.json()

            this.setState({
                loading: false
            })
            this.props.history.push('/exercises')
        } catch (error) {
            this.setState({
                loading: false,
                error
            })
        }
    }

    render() {
        if (this.state.loading)
            return <Loading />

        if (this.state.error)
            return <FatalError />

        return <ExerciseNew
                form={this.state.form}
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
               />
    }
}

export default ExerciseNewContainer