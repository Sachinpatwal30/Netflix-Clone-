import "./chart.css"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';



export default function Chart({ title, data, grid, dataKey }) {


  return (
    <div className='chart'>




      <h3 className="chartTitle">{title}</h3>

      {/* aspect: Ratio of width to height, if W=100 then H=25 */}
      <ResponsiveContainer width="100%" aspect={4 / 1}>

        <LineChart data={data} >

          {/* Stroke is the color of the line */}
          <XAxis dataKey="name"   stroke="#5550bd" />

          {/* TickLine is the -(minus) sign in X-axis and Y-axis */}
          <YAxis dataKey={dataKey} tickLine={false} tickCount={8} />

          {/* monotone type is Curve line otherwise graph will be in straight line */}
          <Line type="monotone" dataKey={dataKey} stroke="#5550bd" />

          {/*  message which appears when a cursor is positioned over graph  */}
          <Tooltip />

          {/* Cartesian grids are composed of squares (cubes in 3D), which are aligned with coordinate axes */}
          {grid && <CartesianGrid stroke="#e0dfdf" vertical={false} strokeDasharray=" 5 5" />}

          {/* Legend: tool to help explain a graph  (ex: Active User below Graph) */}
          <Legend />

        </LineChart>

      </ResponsiveContainer>
    </div>
  )
}
