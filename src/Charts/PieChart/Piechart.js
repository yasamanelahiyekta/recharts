import React from 'react'
import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts'

const Piechart = () => {
    const data = [
        {
            "name": "Group A",
            "value": 400
        },
        {
            "name": "Group B",
            "value": 300
        },
        {
            "name": "Group C",
            "value": 300
        },
        {
            "name": "Group D",
            "value": 200
        },
        {
            "name": "Group E",
            "value": 278
        },
        {
            "name": "Group F",
            "value": 189
        }
    ];
    const data2 = [
        {
            "name": "Group A",
            "value": 2400,
            "color": "#FFC0CB"
        },
        {
            "name": "Group B",
            "value": 4567,
            "color": "#BDB76B"
        },
        {
            "name": "Group C",
            "value": 1398,
            "color": "#663399"
        },
        {
            "name": "Group D",
            "value": 9800,
            "color": "#EE82EE"
        },
        {
            "name": "Group E",
            "value": 3908,
            "color": "#FFC0CB"
        },
        {
            "name": "Group F",
            "value": 4800,
            "color": "#ADFF2F"
        }
    ];
    const COLORS = ["#1E90FF", "#008080", "#7B68EE", "#FFD700", "#FF1493", "#DC143C"]
    return (
        <div className='flex justify-center items-center '>
            <PieChart width={ 600 } height={ 500 } >
                <Tooltip />

                <Pie data={ data } dataKey="value" cx="50%" cy="50%" outerRadius={ 60 } paddingAngle={ 5 }>
                    { data.map((entry, index) => (
                        <Cell key={ `cell-${index}` } fill={ COLORS[index % COLORS.length] } />
                    )) }
                </Pie>
                <Legend />
                <Pie data={ data2 } dataKey="value" cx="50%" cy="50%" innerRadius={ 110 } label paddingAngle={ 6 } >
                    { data2.map((entry, index) => (
                        <Cell key={ `cell-${index}` } fill={ COLORS[index % COLORS.length] } />
                    )) }
                </Pie>
            </PieChart>
        </div>
    )
}

export default Piechart