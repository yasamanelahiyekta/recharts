import React from 'react'
import { Area, AreaChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts'

const Areachart = () => {
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
        <div className="flex justify-center items-center">
            <AreaChart width={ 700 } height={ 500 } data={ data }
                margin={ { top: 10, right: 30, left: 0, bottom: 0 } }>
                <defs>
                    <linearGradient id='coloruv' x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor='#6A5ACD' stopOpacity={ 0.8 } />
                        <stop offset="95%" stopColor='#6A5ACD' stopOpacity={ 0 } />
                    </linearGradient>
                    <linearGradient id='colorpv' x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor='#FFFF00' stopOpacity={ 0.8 } />
                        <stop offset="95%" stopColor='#FFFF00' stopOpacity={ 0 } />
                    </linearGradient>
                </defs>
                <YAxis />
                <Tooltip />
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis />
                <Legend />
                <Area type={ 'monotone' } dataKey="uv" stroke='#6A5ACD' fillOpacity={ 1 } fill='url(#coloruv)' />
                <Area type={ 'bump' } dataKey="pv" stroke='#FFFF00' fillOpacity={ 1 } fill='url(#colorpv)' />
            </AreaChart>
        </div>
    )
}

export default Areachart