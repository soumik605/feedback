import * as React from "react";
import Button from "@mui/material/Button";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import FeedbackIcon from "@mui/icons-material/Feedback";
import makeStyles from '@mui/styles/makeStyles';


export interface FeedbackChatboxProps {
  open: boolean;
  onClose: () => void;
}

const useStyles = makeStyles({
  dialog: {
    position: 'absolute',
    right: 5,
    bottom: 50
  }
})

function FeedbackChatbox(props: FeedbackChatboxProps) {
  const { onClose, open } = props;
  const classes = useStyles();

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog onClose={handleClose} open={open} maxWidth={"sm"} classes={{
      paper: classes.dialog
    }}>
      <DialogTitle>Feedback Form</DialogTitle>
    </Dialog>
  );
}

export default function FeedbackChatboxDemo() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        <FeedbackIcon />
      </Button>
      <FeedbackChatbox open={open} onClose={handleClose} />
    </div>
  );
}