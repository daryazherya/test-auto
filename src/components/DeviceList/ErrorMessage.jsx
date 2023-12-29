import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';


const ErrorMessage = ({ message, open, onClose }) => {

    const handleClose = () => {
        // console.log(message)
        onClose(null);
    };
      
    return (
        <Dialog
            open={open}
            onClose={onClose}
            >
            <DialogTitle >
                {"There is no access to this operation"}
            </DialogTitle>
            <DialogContent>
                <DialogContentText>
                {message}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>
                    Ok
                </Button>
            </DialogActions>
        </Dialog>
    );
}
 
export default ErrorMessage;