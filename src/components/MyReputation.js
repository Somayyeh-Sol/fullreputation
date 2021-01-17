import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import Box from "@material-ui/core/Box";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Tooltip from "@material-ui/core/Tooltip";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import ScoreIcon from "@material-ui/icons/Score";
import PersonIcon from "@material-ui/icons/Person";
import PhotoIcon from "@material-ui/icons/Photo";
import Grid from "@material-ui/core/Grid";

export default function MyReputation(props) {
  const { reputation, name, email, picture } = props.match.params;

  const [copySuccess, setCopySuccess] = useState("");
  const [open, setOpen] = React.useState(false);

  const shareLink = window.location.href;

  const handleTooltipClose = () => {
    setOpen(false);
  };

  const copyToClipboard = (e) => {
    navigator.clipboard.writeText(shareLink);
    setCopySuccess("Copied!");
    setOpen(true);
  };

  const generateWidget = () => {
    props.history.push("/");
  };

  return (
    <div
      className="container"
      style={{
        width: "400px",
        margin: "auto",
        background: "#ebebeb",
        padding: "20px",
      }}
    >
      <div>
        <Grid item xs={12}>
          <Typography variant="h6" component="p" display="inline">
            <ScoreIcon />
            Your Reputation:
          </Typography>
          <Typography variant="subtitle1" component="p" display="inline">
            {" "}
            {reputation}{" "}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6" component="h2" display="inline">
            <PersonIcon /> Name:
          </Typography>
          <Typography variant="subtitle1" component="h2" display="inline">
            {" "}
            {name}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6" component="h2" display="inline">
            <MailOutlineIcon /> Email:
          </Typography>
          <Typography variant="subtitle1" component="h2" display="inline">
            {" "}
            {email}{" "}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6" component="h2">
            <PhotoIcon /> Picture:
          </Typography>
          <img src={atob(picture)} alt={name} />
        </Grid>
        <Typography variant="h6" component="h2">
          Share Link:
        </Typography>
        <TextField
          id="outlined-multiline-static"
          multiline
          rows={4}
          defaultValue={shareLink}
          fullWidth
          variant="outlined"
        />
        <Box p={1}>
          <ClickAwayListener onClickAway={handleTooltipClose}>
            <div>
              <Tooltip
                PopperProps={{
                  disablePortal: true,
                }}
                onClose={handleTooltipClose}
                open={open}
                disableFocusListener
                disableHoverListener
                disableTouchListener
                title={copySuccess}
                placement="right"
              >
                <Button
                  variant="contained"
                  color="secondary"
                  startIcon={<FileCopyIcon />}
                  fullWidth
                  onClick={copyToClipboard}
                >
                  Copy Link
                </Button>
              </Tooltip>
            </div>
          </ClickAwayListener>
        </Box>
        <Typography variant="body1" component="p">
          You can generate your own reputation widget and share with your
          friends
        </Typography>
        <Button variant="contained" color="secondary" onClick={generateWidget}>
          Generate widget
        </Button>
      </div>
    </div>
  );
}
