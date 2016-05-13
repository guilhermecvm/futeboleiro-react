import React from 'react'
import moment from 'moment-timezone'

const MatchRow = (match) => {
    var hour = moment.tz(match.data + ' '+ match.hora, 'DD/MM/YYYY HH:mm', 'America/Sao_Paulo')
    var hasStarted = hour.isSameOrBefore(moment())

    return (
        <div style={css.match}>
            <div style={css.teamLeft}>
                <img src={match.time_casa.escudo} style={css.shield}/>
                {match.time_casa.nome}
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
                {match.time_visitante.nome}
                <img src={match.time_visitante.escudo} style={css.shield}/>
            </div>
        </div>
    );
}

export default MatchRow

var css = {
    match: {
        padding: '15px 0',
        borderTop: '1px solid rgb(236, 236, 236)'
    },
    teamLeft: {
        display: 'inline-block',
        width: 'calc(50% - 30px)',
        textAlign: 'left'
    },
    teamRight: {
        display: 'inline-block',
        width: 'calc(50% - 30px)',
        textAlign: 'right'
    },
    versus: {
        display: 'inline-block',
        width: '60px',
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
