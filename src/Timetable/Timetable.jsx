import AddBoxIcon from '@mui/icons-material/AddBox';
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import React, { useCallback, useState } from "react";
import InputModal from '../InputModal/InputModal';
// import { useRecoilValue } from "recoil";
// import { timeTableState } from "../store/store";
import TimetableRow from "./TimetableRow";

// [9, 10, ... 19]
const hourData = Array.from({length: 11}, (i, j) => j + 9);


function Timetable() {

  const [showModal, setShowModal] = useState(false);
  const handleClose = useCallback(() => {
    setShowModal(false);
  }, [])
  // const timeTableData = useRecoilValue(timeTableState);

  return (
    <>
    <TableContainer sx={{width: "100%", maxWidth: "700px", margin:"1rem auto"}}>
      <Typography variant="h4" color={"#064420"} fontWeight={10} component="div" align="center" lineHeight={1.6}>
        강의시간표
      </Typography>
      <Button
        variant="contain"
        sx={{float: "right", color: "#064420"}}
        endIcon={<AddBoxIcon />}
        onClick={() => setShowModal(true)}
      >
        강의입력
      </Button>
      <Table>
        <TableHead>
          <TableRow style={{ backgroundColor: "#E4EFE7" }}>
            <TableCell align="center" width={"10%"}>Time</TableCell>
            <TableCell align="center" width={"18%"}>Mon</TableCell>
            <TableCell align="center" width={"18%"}>Tue</TableCell>
            <TableCell align="center" width={"18%"}>Wed</TableCell>
            <TableCell align="center" width={"18%"}>Thu</TableCell>
            <TableCell align="center" width={"18%"}>Fri</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            hourData.map((time, index) => (
              <TableRow key={index}>
                <TableCell style={{ backgroundColor: "#E4EFE7" }} align="center">{`${time}:00 - ${time+1}:00`}</TableCell>
                <TimetableRow timeNum={time}/>
              </TableRow>
            ))
          }
        </TableBody>
      </Table>
    </TableContainer>
    <InputModal showModal={showModal} handleClose={handleClose}/>
    </>
  );
}

export default Timetable;