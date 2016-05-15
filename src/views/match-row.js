import React from 'react'
import moment from 'moment-timezone'

const MatchRow = (match) => {
    var hour = moment.tz(match.data + ' '+ match.hora, 'DD/MM/YYYY HH:mm', 'America/Sao_Paulo')
    var hasStarted = hour.isSameOrBefore(moment())

    return (
        <div style={css.match}>
            <div style={css.teamLeft}>
                <img src={match.time_casa.escudo} style={css.shield}/>
                <span style={css.teamNameLeft}>{match.time_casa.nome}</span>
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
                <span style={css.teamNameRight}>{match.time_visitante.nome}</span>
                <img src={match.time_visitante.escudo} style={css.shield}/>
            </div>
        </div>
    );
}

export default MatchRow

var css = {
    match: {
        padding: '15px 0',
        borderBottom: '1px solid rgb(236, 236, 236)'
    },
    teamLeft: {
        display: 'inline-block',
        width: 'calc(50% - 30px)',
        position: 'relative',
        textAlign: 'left'
    },
    teamRight: {
        display: 'inline-block',
        width: 'calc(50% - 30px)',
        position: 'relative',
        textAlign: 'right'
    },
    teamNameLeft: {
        display: 'inline-block',
        width: 'calc(100% - 50px)',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        position: 'absolute',
        right: 0,
        top: '50%',
        transform: 'translateY(-50%)'
    },
    teamNameRight: {
        display: 'inline-block',
        width: 'calc(100% - 50px)',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        position: 'absolute',
        left: 0,
        top: '50%',
        transform: 'translateY(-50%)'
    },
    versus: {
        display: 'inline-block',
        width: 60,
        textAlign: 'center'
    },
    versusInner: {
        display: 'inline-block',
    },
    shield: {
        margin: '0 10px',
        verticalAlign: 'middle',
        width: 30
    }
}
