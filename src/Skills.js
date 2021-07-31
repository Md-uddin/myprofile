import React from 'react';
import './styles/Skills.css';

const Skills = () => {
    google.charts.load('current', {'packages':['bar']});
    google.charts.setOnLoadCallback(drawStuff);

    function drawChart() {
        var data = google.visualization.arrayToDataTable([
            ['Year', 'Visitations', { role: 'style' }],
            ['2010', 10, 'color: gray'],
            ['2020', 14, 'color: #76A7FA'],
            ['2030', 16, 'opacity: 0.2'],
            ['2040', 22, 'stroke-color: #703593; stroke-width: 4; fill-color: #C5A5CF'],
            ['2050', 28, 'stroke-color: #871B47; stroke-opacity: 0.6; stroke-width: 8; fill-color: #BC5679; fill-opacity: 0.2']
        ])
    }
    
 
    return (
        <div>
            <section className="skills">
                <h1><span>Expereince</span> <span>&</span> <span>Skills</span></h1>
                {/* Charts  */}
                <div className="charts">
                    
    
            </div>
        </section>
        </div>
    )
}

export default Skills;
