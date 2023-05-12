import React, { useEffect } from 'react';
import { useState } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';
import Modal from '@mui/material/Modal';
import Header from "./Header";
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

function Image(props) {
    const Name ="Name"
    const RollNo ="Rollno"
    const Section ="Section"
    const Class ="Class"
    const Major ="Major"

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [student, setStudent] = useState({
        "Name": "",
        "Rollno": "",
        "Class": "",
        "Section": "",
        "Major": ""
    })

    const geturl = "http://127.0.0.1:5000/getStudent"
    const posturl = "http://127.0.0.1:5000/postStudent"


    const [column, setColumn] = useState([]);
    const [records, setRecords] = useState([]);


    useEffect(() => {
        fetch(geturl)
            .then(res => res.json())
            .then(data => {
                // console.log(column, records, data);
                setColumn(Object.keys(data));
                setRecords(data);
            })
    },[records])
const handleChange = (evt,label)=>{
    let data = student
    console.log(data[label])
    data[label]=evt.target.value
    console.log(data)
    setStudent(data)    
}
const handleSubmit = ()=>{
    axios({
        url:posturl,
        method:"POST",
        data:student,
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(res=>{
        console.log(res)
        handleOpen()
    })
    .catch(e=>{
        console.log(e)
    })
    
    
}

    return (
        <div>
            <Header />
            
            <div>
                <Button onClick={handleOpen}>Open modal</Button>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <TextField id="outlined-basic" label={Name}  variant="outlined" style={{ width: "100%" }} onChange={(evt)=>handleChange(evt,"Name")}/>
                        <br />
                        <br />
                        <TextField id="outlined-basic" label={RollNo} variant="outlined" style={{ width: "100%" }} onChange={(evt)=>handleChange(evt,"Rollno")} />
                        <br />
                        <br />
                        <TextField id="outlined-basic" label={Class} variant="outlined" style={{ width: "100%" }} onChange={(evt)=>handleChange(evt,"Class")}/>
                        <br />
                        <br />
                        <TextField id="outlined-basic" label={Section} variant="outlined" style={{ width: "100%" }} onChange={(evt)=>handleChange(evt,"Section")}/>
                        <br />
                        <br />
                        <TextField id="outlined-basic" label={Major} variant="outlined" style={{ width: "100%" }} onChange={(evt)=>handleChange(evt,"Major")}/>
                        <br />
                        <br />

                        <Button variant="contained" onClick={handleSubmit} >Submit</Button>
                    </Box>
                </Modal>
            </div>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Name</StyledTableCell>
                            <StyledTableCell align="right">Roll No</StyledTableCell>
                            <StyledTableCell align="right">Class</StyledTableCell>
                            <StyledTableCell align="right">Section</StyledTableCell>
                            <StyledTableCell align="right">Major</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {records.map((row) => (
                            <StyledTableRow key={row.Name}>
                                <StyledTableCell component="th" scope="row">
                                    {row.Name}
                                </StyledTableCell>
                                <StyledTableCell align="right">{row["Rollno"]}</StyledTableCell>
                                <StyledTableCell align="right">{row.Class}</StyledTableCell>
                                <StyledTableCell align="right">{row.Section}</StyledTableCell>
                                <StyledTableCell align="right">{row.Major}</StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}

export default Image;