import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import React from "react";

function InputModal({showModal, handleClose}) {
  return (
    <Dialog open={showModal} onClose={handleClose}>
      <DialogTitle>강의정보입력</DialogTitle>
      <DialogContent style={{width:"300px"}}>
      
      </DialogContent>
    </Dialog>
  );
}

export default InputModal;