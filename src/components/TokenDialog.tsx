import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  TextField,
  Typography,
  Box,
  Divider,
} from "@mui/material";

import honeyImg from "./../assets/HONEY.svg";
import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";
import BorderColorSharpIcon from "@mui/icons-material/BorderColorSharp";
import { BoxStyles } from "../Themes/theme";

const tokens = [
  { name: "WBERA", balance: "0", icon: "" },
  { name: "BERA", balance: "0.14", icon: "" },
  { name: "HONEY", balance: "<0.01", icon: "" },
  { name: "STGUSDC", balance: "0", icon: "" },
  { name: "USDT", balance: "0", icon: "" },
  { name: "DAI", balance: "0", icon: "" },
  { name: "WBTC", balance: "0", icon: "" },
  { name: "WETH", balance: "0", icon: "" },
  { name: "aHONEY", balance: "35.11", icon: "" },
];
const tokens2 = [
  { name: "WBERA", balance: "0", icon: "" },
  { name: "BERA", balance: "0.14", icon: "" },
  { name: "HONEY", balance: "<0.01", icon: "" },
  { name: "STGUSDC", balance: "0", icon: "" },
  { name: "USDT", balance: "0", icon: "" },
  { name: "DAI", balance: "0", icon: "" },
];

const TokenDialog = ({ open, onClose, handleClick }: any) => {
  const [search, setSearch] = useState("");

  const filteredTokens = tokens.filter((token) =>
    token.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleToken = (item: any) => {
    console.log(item);
    handleClick(item);
  };
  return (
    <Dialog
      open={open}
      onClose={onClose}
      PaperProps={{
        style: {
          borderRadius: "10px",
        },
      }}
    >
      <DialogTitle sx={BoxStyles.dialog1}>
        <Typography variant="h6">Select a token</Typography>
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{ color: "white" }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <Box sx={BoxStyles.searchBox}>
          <SearchIcon sx={{ color: "white", mr: 1 }} />
          <TextField
            variant="outlined"
            placeholder="Search by name, symbol or address"
            fullWidth
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            sx={{
              outline: "none",
              border: "none",
              "& fieldset": { border: "none" },
            }}
          />
        </Box>

        <Box
          sx={{
            display: "flex",
            gap: 1,
            flexWrap: "wrap",
            p: 1,
          }}
        >
          {tokens2.map((token) => (
            <Box
              key={token.name}
              sx={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "#333",
                borderRadius: 3,
                px: "5px",
                py: "5px",
                gap: 1,
                cursor: "pointer",
              }}
              onClick={() => handleToken(token)}
            >
              <img src={honeyImg} alt={token.name} width="14px" height="14px" />
              <Typography fontSize={".5rem"}>{token.name}</Typography>
            </Box>
          ))}
        </Box>

        <Divider sx={{ my: 2, backgroundColor: "#333" }} />
        {filteredTokens.map((token, index) => (
          <Box
            sx={{ ...BoxStyles.variant2, cursor: "pointer" }}
            mt={2}
            key={index}
            onClick={() => handleToken(token)}
          >
            <Box sx={BoxStyles.variant6}>
              <img src={honeyImg} alt="img" width={"20px"} height={"20px"} />
              <Typography ml={2}>{token.name}</Typography>
            </Box>
            <Typography>{token.balance}</Typography>
          </Box>
        ))}

        <Divider sx={{ my: 2, backgroundColor: "#333" }} />
        <Box sx={BoxStyles.variant5}>
          <BorderColorSharpIcon fontSize="small" color="secondary" />
          <Typography color="secondary" ml={1}>
            Manage Custom Tokens
          </Typography>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default TokenDialog;
