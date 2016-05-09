import React from 'react';
import { connect } from 'react-redux';
import MatchesList from '../views/matches-list';
import { getMatches } from '../actions';

const Matches = React.createClass({

    componentDidMount: function() {
        const { dispatch } = this.props;
        dispatch(getMatches())
    },

    render: function() {
        return (
            <MatchesList matches={this.props.matches} />
        );
    }

});

const mapStateToProps = function(store) {
    return {
        matches: store.matchesState.matches,
        date: store.matchesState.date,
        lastUpdate: store.matchesState.lastUpdate
    };
};

export default connect(mapStateToProps)(Matches);
