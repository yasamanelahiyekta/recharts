import React from 'react'
import { Area, Bar, CartesianGrid, ComposedChart, Legend, Line, Tooltip, XAxis, YAxis } from 'recharts'

const Composedchart = () => {
    const data = [
        {
            "name": "Page A",
            "uv": 4000,
            "pv": 2400,
            "amt": 2400
        },
        {
            "name": "Page B",
            "uv": 3000,
            "pv": 1398,
            "amt": 2210
        },
        {
            "name": "Page C",
            "uv": 2000,
            "pv": 9800,
            "amt": 2290
        },
        {
            "name": "Page D",
            "uv": 2780,
            "pv": 3908,
            "amt": 2000
        },
        {
            "name": "Page E",
            "uv": 1890,
            "pv": 4800,
            "amt": 2181
        },
        {
            "name": "Page F",
            "uv": 2390,
            "pv": 3800,
            "amt": 2500
        },
        {
            "name": "Page G",
            "uv": 3490,
            "pv": 4300,
            "amt": 2100
        }
    ]
    return (
        <div className='flex justify-center items-center'>
            <ComposedChart width={ 730 } height={ 650 } data={ data }>
                <YAxis />
                <XAxis />
                <defs>
                    <linearGradient id='coloruv' x1={ 0 } y1={ 0 } x2={ 0 } y2={ 1 }>
                        <stop offset="5%" stopColor='#8B008B' stopOpacity={ 0.8 } />
                        <stop offset="95%" stopColor='#8B008B' stopOpacity={ 0 } />
                    </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Legend />
                <Area type={ 'monotone' } dataKey="pv" stroke='#8B008B' fillOpacity={ 1 } fill='url(#coloruv)' />
                <Bar dataKey="uv" fill='#FF4500' radius={ 5 } />
                <Line type={ 'monotone' } dataKey="amt" fill='#4169E1' />

            </ComposedChart>
        </div>
    )
}

export default Composedchart