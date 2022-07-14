import dynamic from 'next/dynamic' 
import { Area, AreaChart, CartesianGrid, XAxis, YAxis,Tooltip, ResponsiveContainer } from 'recharts'

import styles from '../styles/Chart.module.scss'
const Chart = () => {
  
  const data = [
    {
      name:"January",
      total:1200
    },
    {
      name:"February",
      total:2100
    },
    {
      name:"March",
      total:800
    },
    {
      name:"April",
      total:1600
    },
    {
      name:"May",
      total:500
    },
    {
      name:"June",
      total:400
    }
  ]
  return (
    <div className={styles.container}>
      <div className={styles.title}>Last six months (Revenue)</div>
      <ResponsiveContainer
        width = '100%'
        aspect={2 / 1}
      >
        <AreaChart 
          width={730} 
          height={250} 
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
            </linearGradient>
          
          </defs>
          <XAxis dataKey="name" />
          <YAxis stroke='gray'/>
          <CartesianGrid strokeDasharray="3 3" className={styles.grid}/>
          <Tooltip/>
          <Area 
            type="monotone" 
            dataKey="total" 
            stroke="#8884d8" 
            fillOpacity={1} 
            fill="url(#total)" 
          />
    
        </AreaChart>
</ResponsiveContainer>
    </div>
  )
}

export default Chart