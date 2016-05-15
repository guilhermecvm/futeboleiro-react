import React from 'react'

const ChampionshipRow = (championhship) => {
    return (
        <div style={css.championhship}>
            {championhship.name}
        </div>
    );
}

export default ChampionshipRow

var css = {
    championhship: {
        padding: '20px 0',
        borderBottom: '1px solid rgb(236, 236, 236)',
        textAlign: 'center'
    }
}
