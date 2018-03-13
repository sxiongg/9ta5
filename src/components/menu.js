import React from 'react'
import { Link, Switch, Route } from 'react-router-dom'

import JobSearch from './job-search'
import SavedResults from './saved-results'
import Container from './container'


class Menu extends React.Component {
    render() {
        return (

            <div>
                <ul className="nav-bar">
                    <Link to="/" className="nav-item nav-link">Home</Link>
                    <Link to="/people" className="nav-item nav-link">Saved Jobs</Link>
                </ul>
                <Switch>
                    <Route exact path='/' component={JobSearch} />
                    <Route path='/people' component={SavedResults} />
                </Switch>
            </div>

    )
    }
}



export default Menu;