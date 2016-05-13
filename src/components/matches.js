import React, { Component } from 'react'
import { connect } from 'react-redux'
import MatchesList from '../views/matches-list'
import { getMatches } from '../actions'

class Matches extends Component {

    componentDidMount() {
        const { dispatch } = this.props;

        var timer = (cb) => {
            dispatch(getMatches())
            setTimeout(() => {
                timer()
            }, 30000)
        }

        timer()
    }

    render() {
        return (
            <MatchesList matches={this.props.matches} date={this.props.date} lastUpdate={this.props.lastUpdate} />
        );
    }
}

const mapStateToProps = (store) => {
    return {
        matches: store.matchesState.matches,
        date: store.matchesState.date,
        lastUpdate: store.matchesState.lastUpdate
    }
}

Matches = connect(mapStateToProps)(Matches);

export default Matches;
