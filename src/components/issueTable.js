import React, { useState } from "react"
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@mui/material"
import { createData } from "./simpleTable"

const DialogForm = props => {
  const [open, setOpen] = React.useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const updateAvailability = () => {
    const newTableRows = props.tableRows.map(currentRow => {
      if (currentRow.charger !== props.row.charger) {
        // No change
        return currentRow
      } else {
        return createData(
          currentRow.charger,
          currentRow.postcode,
          !currentRow.available,
          currentRow.avgUptime,
          currentRow.utilisation,
          currentRow.kwh,
          currentRow.warrantyExpires,
          currentRow.lastMaintenance
        )
      }
    })
    // Re-render with the new array
    props.setTableRows(newTableRows)
  }
  const handleClose = () => {
    setOpen(false)
    props.actionTakenHandler(false)
    updateAvailability()
  }

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        size="small"
        onClick={handleClickOpen}
      >
        Make unavailable
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Mark charging point as unavailable</DialogTitle>
        <DialogContent>
          <DialogContentText>Start date</DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            type="date"
            fullWidth
            variant="standard"
          />
          <DialogContentText>End date</DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            type="date"
            fullWidth
            variant="standard"
          />
        </DialogContent>

        <DialogActions>
          <Button
            onClick={() => {
              setOpen(false)
            }}
          >
            Cancel
          </Button>
          <Button onClick={handleClose}>Ok</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export const ActionButton = props => {
  const [anchorEl, setAnchorEl] = React.useState(null)

  const handleClick = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const open = Boolean(anchorEl)
  const id = open ? "simple-popover" : undefined
  const [actionTaken, changeActionTaken] = useState(true)

  return (
    <div>
      <DialogForm
        actionTakenHandler={changeActionTaken}
        tableRows={props.tableRows}
        setTableRows={props.setTableRows}
        row={props.row}
      />
    </div>
  )
}

const columns = [
  {
    field: "charger",
    headerName: "Charger",
    flex: 1,
    editable: true,
    align: "left",
    headerAlign: "left",
  },
  {
    field: "postcode",
    headerName: "Postcode",
    flex: 1,
    editable: true,
    align: "left",
    headerAlign: "left",
  },
  {
    field: "available",
    headerName: "Available",
    flex: 1,
    editable: true,
    align: "left",
    headerAlign: "left",
  },
  {
    field: "avgUptime",
    headerName: "Avg. uptime",
    flex: 1,
    editable: true,
    align: "left",
    headerAlign: "left",
  },
  {
    field: "utilisation",
    headerName: "Utilisation",
    type: "number",
    flex: 1,
    editable: true,
    align: "left",
    headerAlign: "left",
  },
  {
    field: "kWh",
    headerName: "kWh",
    type: "number",
    flex: 1,
    editable: true,
    align: "left",
    headerAlign: "left",
  },
  {
    field: "warrenty",
    headerName: "Warrenty expires",
    flex: 1,
    editable: true,
    align: "left",
    headerAlign: "left",
  },
  {
    field: "lastMaintenence",
    headerName: "Last Maintenence",
    flex: 1,
    editable: true,
    align: "left",
    headerAlign: "left",
  },
  {
    field: "action",
    headerName: "Action",
    flex: 1,
    renderCell: ActionButton,
    align: "left",
    headerAlign: "left",
  },
]
const rows = [
  {
    charger: "0001",
    postcode: "E3HFG",
    available: "Yes",
    avgUptime: "60%",
    utilisation: 45,
    kWh: 18.7,
    warrenty: "24/09/2023",
    lastMaintenence: "08/10/2022",
    id: 1,
  },
  {
    charger: "0002",
    postcode: "E141PQ",
    available: "No",
    avgUptime: "20%",
    utilisation: 8,
    kWh: 5.8,
    warrenty: "03/01/2023",
    lastMaintenence: "07/08/2022",
    id: 2,
  },
]
