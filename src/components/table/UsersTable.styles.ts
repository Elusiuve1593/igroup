import TableCell from "@mui/material/TableCell/TableCell"
import tableCellClasses from "@mui/material/TableCell/tableCellClasses"
import TableRow from "@mui/material/TableRow/TableRow"
import styled from "@mui/material/styles/styled"

export const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    }
  }))
  
  export const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    '&:last-child td, &:last-child th': {
      border: 0,
    }
  }))