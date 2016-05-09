import React from 'react';
import { Link } from 'react-router';

export default function(props) {
    return (
        <div className="matches-list">
            <h4>{props.date}</h4>

            {props.matches.map(match => {
                return (
                    <div className="data-list-item">
                        <div className="details">
                            <strong>{match.time_casa.nome}</strong> {match.time_casa.placar} x {match.time_visitante.placar} <strong>{match.time_visitante.nome}</strong>
                        </div>
                    </div>
                );
            })}

        </div>
    );
}
