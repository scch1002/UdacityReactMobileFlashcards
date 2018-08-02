import React, { Component } from 'react'
import { connect } from 'react-redux'
import { initialStorageCheck } from './utils/storageHelpers'
import { retreiveLoadDecks } from './actions/decks'

class AppWrapper extends Component {
    async componentDidMount() {
        await initialStorageCheck()
        await this.props.dispatch(retreiveLoadDecks)
    }
    render() {
        return this.props.children
    }
}

export default connect()(AppWrapper)