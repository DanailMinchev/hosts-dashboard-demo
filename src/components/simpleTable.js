import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {Chip} from "@mui/material";
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
import { ActionButton } from './issueTable';

export function createData(
    charger,
    postcode,
    available,
    avgUptime,
    utilisation,
    kwh,
    warrantyExpires,
    lastMaintenance
) {
    return {charger, postcode, available, avgUptime, utilisation, kwh, warrantyExpires, lastMaintenance};
}

export default function BasicTable(props) {
    return (
        <TableContainer component={Paper}>
            <Table sx={{minWidth: 650}} aria-label="simple table">
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
                    {props.tableRows.map((row) => (
                        <TableRow
                            key={row.charger}
                            sx={{'&:last-child td, &:last-child th': {border: 0}}}
                        >
                            <TableCell component="th" scope="row">
                                {row.charger}
                            </TableCell>
                            <TableCell align="left">{row.postcode}</TableCell>
                            <TableCell align="left">{row.available ? <Chip label="Yes" style={{
                                color: 'white',
                                backgroundColor: 'green'
                            }}/> : <Chip label="No" style={{
                                color: 'white',
                                backgroundColor: 'red'
                            }}/>}</TableCell>
                            <TableCell align="left">{row.avgUptime < 50 ? (<span style={{
                                color: 'red'
                            }}>{row.avgUptime}% <PriorityHighIcon style={{
                                color: 'red',
                                verticalAlign: 'middle'
                            }}/></span>) : (<>{row.avgUptime}%</>)}</TableCell>
                            <TableCell align="left">{row.utilisation}</TableCell>
                            <TableCell align="left">{row.kwh}</TableCell>
                            <TableCell align="left">{row.warrantyExpires}</TableCell>
                            <TableCell align="left">{row.lastMaintenance}</TableCell>
                            <TableCell align="center">
                                <ActionButton tableRows={props.tableRows} setTableRows={props.setTableRows} row={row}/>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
