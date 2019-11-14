import React from 'react';
import {Link} from 'react-router-dom'

export default function Projects() {
    return (
        <>
        <h1>Projects I've Worked On</h1>
            <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
                <h2>Beer Hopper</h2>
                <h2>weJay</h2>
                <h2>Plantify</h2>
                <h2>Trump Tweet Generator</h2>
            </div>
        <Link to="/">Home</Link>
        </>
    )
}