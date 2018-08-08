import React, { Component } from 'react'
import { connect } from 'react-redux'
import { retreiveLoadDecks, addNewDeck } from './actions/decks'

class AppWrapper extends Component {
    componentDidMount() {
        debugger
        this.props.dispatch(retreiveLoadDecks())
    }
    render() {
        return this.props.children
    }
}

export default connect()(AppWrapper)