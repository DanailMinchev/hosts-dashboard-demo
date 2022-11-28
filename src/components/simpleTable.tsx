import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {Button} from "@mui/material";

function createData(
    charger: string,
    postcode: string,
    available: string,
    avgUptime: string,
    utilisation: number,
    kwh: number,
    warrantyExpires: string,
    lastMaintenance: string
) {
    return { charger, postcode, available, avgUptime, utilisation, kwh, warrantyExpires, lastMaintenance };
}

const rows = [
    createData('0001', 'E3HFG', 'Yes', '60%', 45, 18.7, '24/09/2023', '08/10/2022'),
    createData('0002', 'E141PQ', 'No', '20%', 8, 5.8, '03/01/2023', '07/08/2022'),
];

export default function BasicTable() {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Charger</TableCell>
                        <TableCell align="left">Postcode</TableCell>
                        <TableCell align="left">Available</TableCell>
                        <TableCell align="left">Avg. uptime</TableCell>
                        <TableCell align="left">Utilisation</TableCell>
                        <TableCell align="left">kWh</TableCell>
                        <TableCell align="left">Warranty expires</TableCell>
                        <TableCell align="left">Last Maintenance</TableCell>
                        <TableCell align="center">Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.charger}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.charger}
                            </TableCell>
                            <TableCell align="left">{row.postcode}</TableCell>
                            <TableCell align="left">{row.available}</TableCell>
                            <TableCell align="left">{row.avgUptime}</TableCell>
                            <TableCell align="left">{row.utilisation}</TableCell>
                            <TableCell align="left">{row.kwh}</TableCell>
                            <TableCell align="left">{row.warrantyExpires}</TableCell>
                            <TableCell align="left">{row.lastMaintenance}</TableCell>
                            <TableCell align="center">
                                <Button
                                    variant="contained"
                                    color="primary"
                                    size="small"
                                    style={{ marginLeft: 16 }}
                                    onClick={() => {
                                        return
                                    }}
                                >
                                    Action
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
