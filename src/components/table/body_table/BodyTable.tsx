import Paper from "@mui/material/Paper/Paper"
import TableContainer from "@mui/material/TableContainer/TableContainer"
import TableHead from "@mui/material/TableHead/TableHead"
import TableRow from "@mui/material/TableRow/TableRow"
import { StyledTableCell, StyledTableRow } from "../UsersTable.styles"
import TableBody from "@mui/material/TableBody/TableBody"
import Table from "@mui/material/Table/Table"
import { Users } from "../../../bll/table/operations"
import { Done, Settings } from "@mui/icons-material"

type BodyTableType = {
    users: Users[]
    editableRowId: number | null
    formData: Users
    changeInputHandler: (event: React.ChangeEvent<HTMLInputElement>) => void
    onChangeHandler: (id: number) => void
    onDoneHandler: () => void
}

export const BodyTable = ({
    users,
    editableRowId,
    formData,
    changeInputHandler,
    onChangeHandler,
    onDoneHandler
}: BodyTableType) => {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: "auto", minHeight: "auto" }} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell align="left">Name</StyledTableCell>
                        <StyledTableCell align="left">Address</StyledTableCell>
                        <StyledTableCell align="left">Birth Date</StyledTableCell>
                        <StyledTableCell align="left">Email</StyledTableCell>
                        <StyledTableCell align="left">Phone Number</StyledTableCell>
                        <StyledTableCell></StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {users &&
                        users.map((row) => (
                            <StyledTableRow key={row.id}>
                                {row.id === editableRowId ? (
                                    <StyledTableCell component="th" scope="row">
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={changeInputHandler}
                                            style={{ width: '100px' }}
                                        />
                                    </StyledTableCell>
                                ) : (
                                    <StyledTableCell component="th" scope="row">
                                        {row.name}
                                    </StyledTableCell>
                                )}

                                {row.id === editableRowId ? (
                                    <StyledTableCell component="th" scope="row">
                                        <input
                                            type="text"
                                            name="address"
                                            value={formData.address}
                                            onChange={changeInputHandler}
                                            style={{ width: '200px' }}
                                        />
                                    </StyledTableCell>
                                ) : (
                                    <StyledTableCell component="th" scope="row">
                                        {row.address}
                                    </StyledTableCell>
                                )}

                                {row.id === editableRowId ? (
                                    <StyledTableCell component="th" scope="row">
                                        <input
                                            type="date"
                                            name="birthday_date"
                                            value={formData.birthday_date}
                                            onChange={changeInputHandler}
                                            style={{ width: '107px' }}
                                        />
                                    </StyledTableCell>
                                ) : (
                                    <StyledTableCell component="th" scope="row">
                                        {row.birthday_date}
                                    </StyledTableCell>
                                )}

                                {row.id === editableRowId ? (
                                    <StyledTableCell component="th" scope="row">
                                        <input
                                            type="text"
                                            name="email"
                                            value={formData.email}
                                            onChange={changeInputHandler}
                                            style={{ width: '150px' }}
                                        />
                                    </StyledTableCell>
                                ) : (
                                    <StyledTableCell component="th" scope="row">
                                        {row.email}
                                    </StyledTableCell>
                                )}

                                {row.id === editableRowId ? (
                                    <StyledTableCell component="th" scope="row">
                                        <input
                                            type="text"
                                            name="phone_number"
                                            value={formData.phone_number}
                                            onChange={changeInputHandler}
                                            style={{ width: '100px' }}
                                        />
                                    </StyledTableCell>
                                ) : (
                                    <StyledTableCell component="th" scope="row">
                                        {row.phone_number}
                                    </StyledTableCell>
                                )}

                                {row.id === editableRowId ? (
                                    <StyledTableCell align="left">
                                        <Done onClick={onDoneHandler} />
                                    </StyledTableCell>
                                ) : (
                                    <StyledTableCell align="left">
                                        <Settings onClick={() => onChangeHandler(row.id)} />
                                    </StyledTableCell>
                                )}
                            </StyledTableRow>
                        ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}