import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
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
import {useSelector} from "react-redux";
import {getters} from "../../redux/selectors/selectors";
import {Card} from "@material-ui/core";
const useRowStyles = makeStyles({
    root: {
        '& > *': {
            borderBottom: 'unset',
        },
    },
});

function createData(id, duration) {
    return {
        id,
        duration
    };
}

function Row(props) {
    const { row } = props;
    const [open, setOpen] = useState(false);
    const classes = useRowStyles();

    return (
        <>
            <TableRow className={classes.root} onClick={() => setOpen(!open)}>
                <TableCell>
                    <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
                <TableCell>{row["id"]}</TableCell>
                <TableCell>{row["duration"]}</TableCell>
            </TableRow>
            <TableRow >
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 ,backgroundColor:"#E1E2E2"}} colSpan={6}>
                    <Collapse style={{backgroundColor:"#E1E2E2"}} in={open} timeout="auto" unmountOnExit>
                        <Box margin={1} >
                            <Typography variant="h6" gutterBottom component="div">
                                {row["id"]}
                            </Typography>
                            <Paper elevation={24}>
                            <Card style={{padding:"30px", backgroundColor:"#E1E2E2"}}>
                            <Table size="small" aria-label="purchases">
                                <TableHead style={{backgroundColor:"#1D2228"}}>
                                    <TableRow>
                                        <TableCell style={{color:"white"}}>Program</TableCell>
                                        <TableCell style={{color:"white"}}>Duration</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody >
                                    <TableCell component="th" scope="row">{row["id"]}</TableCell>
                                    <TableCell>{row["duration"]}</TableCell>
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

export default function ProgramsListTable() {
    const {programsList} = useSelector(getters.getProgramsList);
    const rows = programsList.map((program) => createData(program.id, program.duration))

    return (
        <TableContainer component={Paper}>
            <Table aria-label="collapsible table">
                <TableHead style={{backgroundColor:"#1D2228"}}>
                    <TableRow >
                        <TableCell />
                        <TableCell style={{color:"white"}}>Program</TableCell>
                        <TableCell style={{color:"white"}}>Duration</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row, index) => (
                        <Row key={index} row={row} />
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
