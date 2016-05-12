import React from 'react';
import { Link } from 'react-router';
// import moment from 'moment'
// import 'moment-timezone'
import moment from 'moment-timezone'


export default function(props) {
    var lastUpdate = moment.tz(props.lastUpdate, 'America/Sao_Paulo');

    return (
        <div className="matches-list">
            <h4>{props.date} - última atualização: {lastUpdate.fromNow()}</h4>

            {props.matches.map(match => {
                var hour = moment.tz(match.data + ' '+ match.hora, 'DD/MM/YYYY HH:mm', 'America/Sao_Paulo');
                var hasStarted = hour.isSameOrBefore(moment());

                return (
                    <div className="data-list-item">
                        <div style={css.match}>
                            <div style={css.teamLeft}>
                                {match.time_casa.nome}
                                <img src={match.time_casa.escudo} style={css.shield}/>
                            </div>
                            {(() => {
                                switch (hasStarted) {
                                    case true:
                                        return (
                                            <div style={css.versus}>
                                                <strong style={css.versusInner}>{match.time_casa.placar}</strong>
                                                <div style={css.versusInner}>x</div>
                                                <strong style={css.versusInner}>{match.time_visitante.placar}</strong>
                                            </div>
                                        )
                                        break;
                                    case false:
                                        return <div style={css.versus}>{hour.format('HH:mm')}</div>
                                        break;
                                }
                            })()}
                            <div style={css.teamRight}>
                                <img src={match.time_visitante.escudo} style={css.shield}/>
                                {match.time_visitante.nome}
                            </div>
                        </div>
                    </div>
                );
            })}

        </div>
    );
}

var css = {
    match: {
        clear: 'both',
        margin: '10px 0',
        padding: '5px',
        background: '#eaeaea'
    },
    teamLeft: {
        display: 'inline-block',
        width: 'calc(50% - 20px)',
        textAlign: 'right'
    },
    teamRight: {
        display: 'inline-block',
        width: 'calc(50% - 20px)',
        textAlign: 'left'
    },
    versus: {
        display: 'inline-block',
        width: '40px',
        textAlign: 'center'
    },
    versusInner: {
        display: 'inline-block',
    },
    shield: {
        margin: '0 10px',
        verticalAlign: 'middle'
    }
}
