import React from 'react'
import moment from 'moment-timezone'
import MatchRow from './match-row'
import ChampionshipRow from './championship-row'

moment.locale('pt-br')

const MatchesList = (props) => {
    var lastUpdate = moment.tz(props.lastUpdate, 'America/Sao_Paulo');

    return (
        <div style={css.matches}>
            <span style={css.lastUpdate}>última atualização: {lastUpdate.format('HH:mm::ss')}</span>

            {props.matches.map((match, i, matches) =>
                {
                    if (i === 0 || match.nome_campeonato !== matches[i-1].nome_campeonato) {
                        return (
                            <div>
                                <ChampionshipRow
                                    name={match.nome_campeonato}
                                />
                                <MatchRow
                                    key={match.id}
                                    {...match}
                                />
                            </div>
                        )
                    }

                    return (
                        <MatchRow
                            key={match.id}
                            {...match}
                        />
                    )
                }
            )}

        </div>
    );
}

export default MatchesList

var css = {
    matches: {
        padding: '0 10px',
        fontWeight: '600',
        fontSize: '13px'
    },
    lastUpdate: {
        fontSize: '11px',
        color: 'rgb(210, 210, 210)'
    }
}
