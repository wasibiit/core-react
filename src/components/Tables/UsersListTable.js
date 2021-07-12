import {useEffect, useState, Fragment} from 'react';
import {withStyles} from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import {useDispatch, useSelector} from "react-redux";
import {getters} from "../../redux/selectors/selectors";
import {dispatchers} from "../../redux/dispatchers/dispatchers";
import {AuthRequest} from "../../data/requests";
import {getUsersListQuery} from "../../data/queries";
import {getCookie} from "../../utils/common";
import UserStyles from "../../styles/users";
import {Card} from "@material-ui/core";

function createData(firstName, lastName, dob, email, role) {
    return {
        firstName,
        lastName,
        dob,
        email,
        role
    };
}

export const Row = (props) => {
    const { row } = props;
    const [open, setOpen] = useState(false);
    return (
        <>
            <TableRow className={UserStyles.rowStyle} onClick={() => setOpen(!open)}>
                <TableCell >
                    <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
                <TableCell>{row["firstName"] + ' ' + row["lastName"]}</TableCell>
                <TableCell>{row["email"]}</TableCell>
                <TableCell>{row["role"]}</TableCell>
            </TableRow>
            <TableRow >
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 ,backgroundColor:"#E1E2E2"}} colSpan={6}>
                    <Collapse style={{backgroundColor:"#E1E2E2"}} in={open} timeout="auto" unmountOnExit >
                        <Box  margin={1}>
                            <Typography  variant="h6" gutterBottom component="div">
                                {row["firstName"] + ' ' + row["lastName"]}
                            </Typography>
                            <Paper elevation={24}>
                            <Card style={{padding:"30px", backgroundColor:"#E1E2E2"}}>
                            <Table  size="small" aria-label="purchases">
                                <TableHead style={{ backgroundColor:"#1D2228"}}>
                                    <TableRow>
                                        <TableCell style={{color:"white"}}>FirstName</TableCell>
                                        <TableCell style={{color:"white"}}>LastName</TableCell>
                                        <TableCell style={{color:"white"}}>Email</TableCell>
                                        <TableCell style={{color:"white"}}>Date Of Birth</TableCell>
                                        <TableCell style={{color:"white"}}>Role</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody  >
                                    <TableCell component="th" scope="row">{row["firstName"]}</TableCell>
                                    <TableCell>{row["lastName"]}</TableCell>
                                    <TableCell >{row["email"]}</TableCell>
                                    <TableCell>{row["dob"]}</TableCell>
                                    <TableCell>{row["role"]}</TableCell>
                                </TableBody>
                            </Table>
                                </Card>
                            </Paper>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </>
    );
}

export const UsersListTable = (props) => {
    const {usersList} = useSelector(getters.getUsersList);
    const {setUsersList} = dispatchers.usersListDispatcher(useDispatch())
    const classes = props;
    useEffect(() => {
        AuthRequest(getUsersListQuery(), setUsersList, "getUsersList", getCookie("user"))
        // handleAlert("Welcome Back " + user["firstName"] + ' ' + user["lastName"] + '!')
    }, [])
    const rows = usersList.map((user) =>
        createData(user.firstName, user.lastName, user.dob, user.email, user["role"]["id"])
    )
    return (
        <TableContainer component={Paper}>
            <Table aria-label="collapsible table">
                <TableHead style={{ backgroundColor:"#1D2228"}}>
                    <TableRow>
                        <TableCell />
                        <TableCell style={{color:"white"}} >Name</TableCell>
                        <TableCell style={{color:"white"}}>Email</TableCell>
                        <TableCell style={{color:"white"}}>Type</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row, index) => (
                        <Row key={index} row={row}  />
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
