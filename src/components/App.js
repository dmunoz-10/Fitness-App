import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import ExercisesContainer from '../pages/ExercisesContainer'
import ExerciseNewContainer from '../pages/ExerciseNewContainer'
import NotFound from '../pages/NotFound'
import Root from '../pages/Root'

const App = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Root} />
            <Route path="/exercises" component={ExercisesContainer} />
            <Route path="/exercise/new" component={ExerciseNewContainer} />
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>
)

export default App