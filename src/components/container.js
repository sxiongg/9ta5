//list of dependencies

import React from 'react'

import Menu from './menu'
import Title from './title'

class Container extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='container-fluid'>
                <Title />
                <Menu />
            </div>
        )
    }
}

export default Container