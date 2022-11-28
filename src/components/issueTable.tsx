import { Box, Button } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';



function IssueTable () {
    return (
        <Box sx={{ height: 400, width: '100%' }}>
          <DataGrid
            style={{padding: '30px 30px 30px 30px'}}
            rows={rows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}

            disableSelectionOnClick
            experimentalFeatures={{ newEditingApi: true }}
          />
        </Box>
      );
}

const renderDetailsButton = () => {
  return (
      <strong>
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
      </strong>
  )
}



const columns: GridColDef[] = [
    {
      field: 'charger',
      headerName: 'Charger',
      flex: 1,
      editable: true,
      align:'left',
      headerAlign:'left'
    },
    {
      field: 'postcode',
      headerName: 'Postcode',
      flex: 1,
      editable: true,
      align:'left',
      headerAlign:'left'
    },
    {
      field: 'available',
      headerName: 'Available',
      flex: 1,
      editable: true,
      align:'left',
      headerAlign:'left'
    },
    {
      field: 'avgUptime',
      headerName: 'Avg. uptime',
      flex: 1,
      editable: true,
      align:'left',
      headerAlign:'left'
    },
    {
      field: 'utilisation',
      headerName: 'Utilisation',
      type: 'number',
      flex: 1,
      editable: true,
      align:'left',
      headerAlign:'left'

    },
    {
      field: 'kWh',
      headerName: 'kWh',
      type: 'number',
      flex: 1,
      editable: true,
      align:'left',
      headerAlign:'left'
    },
    {
      field: 'warrenty',
      headerName: 'Warrenty expires',
      flex: 1,
      editable: true,
      align:'left',
      headerAlign:'left'
    },
    {
      field: 'lastMaintenence',
      headerName: 'Last Maintenence',
      flex: 1,
      editable: true,
      align:'left',
      headerAlign:'left'
    },
    { 
      field: 'action', 
      headerName: 'Action', 
      flex: 1,
      renderCell: renderDetailsButton,
      align:'left',
      headerAlign:'left'

    },
    
  ];
const rows = [
    {  charger: '0001', postcode: 'E3HFG', available: 'Yes', avgUptime: '60%', utilisation: 45, kWh:18.7, warrenty: '24/09/2023', lastMaintenence: '08/10/2022', id: 1},
    {  charger: '0002', postcode: 'E141PQ', available: 'No', avgUptime: '20%', utilisation: 8, kWh:5.8, warrenty: '03/01/2023', lastMaintenence: '07/08/2022', id:  2 },
]

export default IssueTable;