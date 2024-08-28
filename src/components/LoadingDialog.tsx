import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Box,
  Typography,
  IconButton,
  CircularProgress,
  CircularProgressProps,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { BoxStyles } from "../Themes/theme";

interface LoadingDialogProps {
  open: boolean;
  onClose: () => void;
}

const LoadingDialog: React.FC<LoadingDialogProps> = ({ open, onClose }) => {
  useEffect(() => {
    if (open) {
      setTimeout(() => {
        onClose();
      }, 5000);
    }
  }, [open]);

  return (
    <Dialog
      open={open}
      onClose={onClose}
      PaperProps={{
        style: BoxStyles.paperprops,
      }}
    >
      <DialogContent sx={BoxStyles.variant10}>
        <Box sx={BoxStyles.variant11}>
          <CircularProgress
            variant="indeterminate"
            size={60}
            thickness={5}
            sx={{
              color: "gold",
            }}
          />
        </Box>
        <Typography variant="h6" sx={{ mt: 2 }}>
          Waiting for wallet
        </Typography>
        <Typography variant="body2" sx={{ color: "#aaa", mt: 1 }}>
          Swap BERA to HONEY
        </Typography>
        <IconButton aria-label="close" onClick={onClose} sx={BoxStyles.button2}>
          <CloseIcon />
        </IconButton>
      </DialogContent>
    </Dialog>
  );
};

export default LoadingDialog;
