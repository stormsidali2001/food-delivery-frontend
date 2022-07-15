import styles from '../styles/Table.module.scss'
import Table  from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
const TableComponent = () => {
    const rows:any= [
        {
            id:1,
            product:"Humburger",
            img:'/sidali.jpg',
            customer:'sidali assoul',
            date:"1 april",
            amount:2000,
            method:"Online",
            status:"Pending"
        },
        {
            id:2,
            product:"Humburger",
            img:'/sidali.jpg',
            customer:'sidali assoul',
            date:"1 april",
            amount:2000,
            method:"Online",
            status:"Pending"
        },
        {
            id:3,
            product:"Humburger",
            img:'/sidali.jpg',
            customer:'sidali assoul',
            date:"1 april",
            amount:2000,
            method:"Online",
            status:"Pending"
        },
        {
            id:4,
            product:"Humburger",
            img:'/sidali.jpg',
            customer:'sidali assoul',
            date:"1 april",
            amount:2000,
            method:"Online",
            status:"Approved"
        }
    ]
  return (
    <TableContainer component={Paper} className={styles.container}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell className={styles.cell}>Tracking ID</TableCell>
          <TableCell className={styles.cell}>Product</TableCell>
          <TableCell className={styles.cell}>Customer</TableCell>
          <TableCell className={styles.cell}>Date</TableCell>
          <TableCell className={styles.cell}>Amount</TableCell>
          <TableCell className={styles.cell}>Payment Method</TableCell>
          <TableCell className={styles.cell}>Status</TableCell>

        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row:any) => (
          <TableRow
            key={row.id}
          >
            <TableCell className={styles.cell}>{row.id}</TableCell>
            <TableCell className={styles.cell}>
                <div className={styles.cellWrapper}>
                    <img
                        src = {row.img}
                    />
                    {row.product}
                </div>
            </TableCell>
            <TableCell className={styles.cell}>{row.customer}</TableCell>
            <TableCell className={styles.cell}>{row.date}</TableCell>
            <TableCell className={styles.cell}>{row.amount}</TableCell>
            <TableCell className={styles.cell}>{row.method}</TableCell>
            <TableCell className={styles.cell}><span className={`${styles.status} ${row.status === 'Approved'?styles.approved:styles.pending}`}>{row.status}</span></TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  )
}

export default TableComponent