import React from "react"
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
import Grid from "@mui/material/Unstable_Grid2"

const DialogForm = props => {
  const [open, setOpen] = React.useState(false)

  const handleMarkAsUnavailableOpen = () => {
    setOpen(true)
  }

  const updateAvailability = available => {
    const newTableRows = props.tableRows.map(currentRow => {
      if (currentRow.charger !== props.row.charger) {
        // No change
        return currentRow
      } else {
        return createData(
          currentRow.charger,
          currentRow.postcode,
          available,
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
  const handleMarkAsUnavailableClose = () => {
    setOpen(false)
    updateAvailability(false)
  }
  const handleMarkAsAvailable = () => {
    updateAvailability(true)
  }

  return (
    <div>
      {props.row.available && (
        <Button
          variant="contained"
          color="primary"
          size="small"
          onClick={handleMarkAsUnavailableOpen}
        >
          Mark as unavailable
        </Button>
      )}
      <Dialog open={open} onClose={handleMarkAsUnavailableClose}>
        <DialogTitle>Mark charging point as unavailable</DialogTitle>
        <DialogContent>
          <DialogContentText>Start date</DialogContentText>
          <TextField
            margin="dense"
            id="name"
            type="date"
            fullWidth
            variant="standard"
          />
          <DialogContentText>End date</DialogContentText>
          <TextField
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
          <Button onClick={handleMarkAsUnavailableClose}>Ok</Button>
        </DialogActions>
      </Dialog>
      {!props.row.available && (
        <>
          <Button
            variant="contained"
            color="primary"
            size="small"
            onClick={handleMarkAsAvailable}
          >
            Mark as available
          </Button>
          &nbsp;
          <Button
            variant="contained"
            color="primary"
            size="small"
            onClick={handleMarkAsAvailable}
          >
            Extend downtime
          </Button>
        </>
      )}
    </div>
  )
}

export const ActionButton = props => {
  return (
    <div>
      <DialogForm
        tableRows={props.tableRows}
        setTableRows={props.setTableRows}
        row={props.row}
      />
    </div>
  )
}
