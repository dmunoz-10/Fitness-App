import React, {Component} from 'react'

class ExerciseForm extends Component {

    render() {
        const { onChange, onSubmit, form } = this.props

        return (
            <div className="container">
                <h1>New Exercise</h1>
                <form onSubmit={onSubmit}>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Title"
                            name="title"
                            onChange={onChange}
                            value={form.title}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Description"
                            name="description"
                            onChange={onChange}
                            value={form.description}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Url of an image"
                            name="img"
                            onChange={onChange}
                            value={form.img}
                        />
                    </div>
                    <div className="form-group">
                        <div className="row">
                            <div className="col-6">
                                <label>Left Color:</label>
                                <input
                                    type="color"
                                    className="form-control"
                                    title="Left Color"
                                    name="leftColor"
                                    onChange={onChange}
                                    value={form.leftColor}
                                />
                            </div>
                            <div className="col-6">
                                <label>Right Color:</label>
                                <input
                                    type="color"
                                    className="form-control"
                                    title="Right Color"
                                    name="rightColor"
                                    onChange={onChange}
                                    value={form.rightColor}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="text-center">
                        <button
                            type="submit"
                            className="btn btn-primary"
                        >
                            Submit
                    </button>
                    </div>
                </form>
            </div>
        )
    }
}

export default ExerciseForm