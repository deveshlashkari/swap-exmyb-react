import {
  Alert,
  Box,
  Button,
  Divider,
  IconButton,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { BoxStyles } from "../Themes/theme";
import SettingsIcon from "@mui/icons-material/Settings";
import BeraImg from "./../assets/BERA.svg";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import WalletIcon from "@mui/icons-material/Wallet";
import honeyImg from "./../assets/HONEY.svg";
import SwapVertIcon from "@mui/icons-material/SwapVert";
import TokenDialog from "./TokenDialog";
import { exchangeRates, usdExchangeRates } from "../constants/exchangeRates";

import CloseIcon from "@mui/icons-material/Close";
import pImg from "./../assets/Screenshot_2024-08-28_at_3.49.55_PM_1.png";
import LoadingDialog from "./LoadingDialog";
const exchangeData = {
  pay: {
    amount: 0.5,
    usdValue: 16.42,
  },
  receive: {
    amount: 16.487416,
    usdValue: 16.49,
  },
};
const Home = () => {
  const [openTokenDialog, setTokenDialog] = useState(false);
  const [item1isSelected, setItem1isSelected] = useState(false);
  const [preview, setPreview] = useState(false);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = React.useState(false);

  const [item1, setItem1] = useState({
    name: "BERA",
    balance: "0.14",
    icon: "",
  });
  const [item2, setItem2] = useState({
    name: "HONEY",
    balance: "0.01",
    icon: "",
  });
  const handleItemClick = (item: any, val: any) => {
    setItem1isSelected(val);

    setTokenDialog(true);
  };
  const handleItemSelected = (item: any) => {
    if (item1isSelected) {
      setItem1(item);
    } else {
      setItem2(item);
    }
    handleOnClose();
  };

  const handleOnClose = () => {
    setTokenDialog(false);
    setLoading(false);
    setOpen(false);
  };

  const handleWaitingClose = () => {
    setLoading(false);
    setOpen(true);
  };
  const handleSwap = () => {
    const i = { ...item1 };
    setItem1({ ...item2 });
    setItem2(i);
  };

  useEffect(() => {
    setItem2({
      ...item2,
      balance: (
        parseFloat(item1.balance) * exchangeRates[item1.name][item2.name]
      ).toString(),
    });
  }, [item1]);

  return (
    <Box sx={BoxStyles.variant1} p={2} mt={2}>
      {!preview ? (
        <Box sx={BoxStyles.variant2}>
          <Typography>Swap</Typography>
          <IconButton>
            <SettingsIcon />
          </IconButton>
        </Box>
      ) : (
        <Box sx={BoxStyles.variant2}>
          <Typography> Preview swap</Typography>
          <IconButton>
            <CloseIcon />
          </IconButton>
        </Box>
      )}

      <Box width={"100%"} mt={2}>
        {!preview ? (
          <Box sx={BoxStyles.variant3}>
            <>
              <Box sx={BoxStyles.variant9}>
                <Box
                  sx={BoxStyles.variant14}
                  onClick={() => handleItemClick(item1, true)}
                >
                  <img
                    src={honeyImg}
                    alt="BERA"
                    style={{ width: 24, height: 24, marginRight: 8 }}
                  />
                  <Typography variant="body1" sx={{ fontWeight: 600 }}>
                    {item1.name}
                  </Typography>
                  <ArrowDropDownIcon fontSize="small" sx={{ ml: 1 }} />
                </Box>
                <TextField
                  variant="outlined"
                  value={item1.balance}
                  inputProps={{
                    min: 0,
                    style: { textAlign: "right", padding: 0 },
                  }}
                  sx={{
                    outline: "none",
                    border: "none",
                    "& fieldset": { border: "none" },
                    height: "20px",
                  }}
                  onChange={(e) => {
                    setItem1({
                      ...item1,
                      balance: e.target.value,
                    });
                    setItem2({
                      ...item2,
                      balance: (
                        parseFloat(e.target.value) *
                        exchangeRates[item1.name][item2.name]
                      ).toString(),
                    });
                  }}
                />
                {/* <Typography variant="h6">{item1.balance}</Typography> */}
              </Box>

              <Box
                sx={{
                  ...BoxStyles.variant2,
                  mb: 2,
                }}
              >
                <Box display={"flex"}>
                  <WalletIcon fontSize="small" />
                  <Typography variant="body2" sx={{ opacity: 0.7 }} ml={1}>
                    0.14 MAX
                  </Typography>
                </Box>

                <Typography variant="body2" sx={{ opacity: 0.7 }}>
                  {usdExchangeRates[item1.name] * parseFloat(item1.balance)}
                </Typography>
              </Box>
              <Box sx={{ position: "relative", my: 2 }}>
                <Divider sx={{ backgroundColor: "#333" }} />
                <IconButton
                  sx={BoxStyles.iconButton}
                  aria-label="swap"
                  onClick={handleSwap}
                >
                  <SwapVertIcon />
                </IconButton>
              </Box>

              <Box sx={BoxStyles.variant9}>
                <Box
                  sx={BoxStyles.variant14}
                  onClick={() => handleItemClick(item2, false)}
                >
                  <img
                    src={honeyImg}
                    alt="BERA"
                    style={{ width: 24, height: 24, marginRight: 8 }}
                  />
                  <Typography variant="body1" sx={{ fontWeight: 600 }}>
                    {item2.name}
                  </Typography>
                  <ArrowDropDownIcon fontSize="small" sx={{ ml: 1 }} />
                </Box>
                <Typography variant="h6">
                  {parseFloat(item1.balance) *
                    exchangeRates[item1.name][item2.name]}
                </Typography>
              </Box>
              <Box sx={BoxStyles.variant9}>
                <Box
                  sx={{
                    display: "flex",
                  }}
                >
                  <WalletIcon fontSize="small" />
                  <Typography variant="body2" sx={{ opacity: 0.7 }} ml={1}>
                    0.14 MAX
                  </Typography>
                </Box>

                <Typography variant="body2" sx={{ opacity: 0.7 }}>
                  {usdExchangeRates[item2.name] * parseFloat(item2.balance)}
                </Typography>
              </Box>
            </>
          </Box>
        ) : (
          <Box>
            <img
              src={pImg}
              alt="bearImg"
              width={"350px"}
              style={{ borderRadius: "20px" }}
            />
            <Box sx={BoxStyles.variant13}>
              <Box>
                <Typography variant="body1">You pay</Typography>
                <Typography variant="h4">{item1.balance}</Typography>
                <Typography variant="body2" sx={{ color: "#aaa" }}>
                  ${usdExchangeRates[item1.name] * parseFloat(item1.balance)}
                </Typography>
              </Box>
              <Box sx={BoxStyles.variant8}>
                <img
                  src={honeyImg}
                  alt={item1.name}
                  width="14px"
                  height="14px"
                />
                <Typography fontSize={".5rem"}>{item2.name}</Typography>
              </Box>
            </Box>

            <Box sx={BoxStyles.variant12}>
              <Box>
                <Typography variant="body1" sx={{ color: "#fff" }}>
                  You receive
                </Typography>
                <Typography variant="h4" sx={{ color: "#fff" }}>
                  {item2.balance}
                </Typography>
                <Typography variant="body2" sx={{ color: "#aaa" }}>
                  ${usdExchangeRates[item2.name] * parseFloat(item2.balance)}
                </Typography>
              </Box>
              <Box sx={BoxStyles.variant8}>
                <img src={honeyImg} width="14px" height="14px" />
                <Typography fontSize={".5rem"}>{item2.name}</Typography>
              </Box>
            </Box>
          </Box>
        )}
        <Box sx={BoxStyles.variant4} mt={2} p={2}>
          <Box sx={{ ...BoxStyles.variant7, mb: 2 }}>
            <Typography variant="body2">Exchange rate</Typography>
            <Typography variant="body2" sx={{ fontWeight: 600 }}>
              {`1 ${item1.name} = ${exchangeRates[item1.name][item2.name]} ${
                item2.name
              }`}
            </Typography>
          </Box>

          <Box sx={BoxStyles.variant7}>
            <Typography variant="body2">
              {!preview ? " Network fee" : "Min. recived"}
            </Typography>
            <Typography variant="body2">
              {!preview
                ? "-"
                : `${exchangeRates[item1.name][item2.name]} ${item2.name}`}
            </Typography>
          </Box>
        </Box>
        {!preview ? (
          <Button
            variant="contained"
            sx={BoxStyles.button}
            onClick={() => {
              setPreview(!preview);
            }}
          >
            Preview <ArrowForwardIcon sx={{ ml: 1 }} fontSize="small" />
          </Button>
        ) : (
          <Button
            variant="contained"
            sx={BoxStyles.button}
            onClick={() => {
              setLoading(true);
            }}
          >
            Swap
          </Button>
        )}
      </Box>
      <TokenDialog
        open={openTokenDialog}
        onClose={handleOnClose}
        handleClick={handleItemSelected}
      />
      <LoadingDialog open={loading} onClose={handleWaitingClose} />
      <Snackbar open={open} autoHideDuration={6000} onClose={handleOnClose}>
        <Alert
          onClose={handleOnClose}
          severity="success"
          variant="filled"
          sx={{ width: "100%" }}
        >
          Success
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Home;
