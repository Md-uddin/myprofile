import React from 'react'

const Copyright = () => {
    const mystyle = {
        background: 'var(--darkblue)',
        color: 'white',
        dispaly: 'grid',
        placeItems: 'center',
        fontSize: '.9rem',
        margin: '.5rem'
    }
    return (
        <div style={mystyle}>
            <p> copyright &copy; Inc. All Right Reserved to md uddin. </p>
        </div>
    )
}

export default Copyright
