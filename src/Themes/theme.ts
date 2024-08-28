
import { createTheme } from "@mui/material/styles";

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#dc004e",
    },
    background: {
      default: "#ffffff",
      paper: "#f5f5f5",
    },
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: "Poppins",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#121212",
          color: "#9A9A9A",
        },
      },
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#1f1e1e",
    },
    secondary: {
      main: "#6e6b6b",
    },
    background: {
      default: "#1f1e1e",
      paper: "#000000",
    },
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: "Poppins",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#000000",
          color: "#9A9A9A",
          borderBottom: "1px solid #9A9A9A",
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: "#121212",
          color: "#ffffff",
        },
      },
    },
  },
});



export const BoxStyles = {
  variant1: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    border: "1px solid #9A9A9A",
    borderRadius: "12px",
    minWidth: "150px",
  },
  variant2: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  variant3: {
    border: "1px solid #333",
    borderRadius: "10px",
    padding: "10px 10px",
  },
  variant4: {
    borderRadius: "10px",
    backgroundColor: "#3b3939",
  },
  variant5: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  variant6: {
    padding: "2px 5px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  variant7: { display: "flex", justifyContent: "space-between" },
  variant8: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#333",
    borderRadius: 3,
    px: "10px",
    py: "5px",
    gap: 1,
  },
  variant9: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    mb: 2,
    width: "100%",
  },

  iconButton: {
    position: "absolute",
    top: "-20px",
    left: "50%",
    backgroundColor: "#1e1e1e",
    color: "#ffffff",
    "&:hover": {
      backgroundColor: "#333",
    },
  },
  button: {
    width: "100%",
    borderRadius: 3,
    backgroundColor: "#ffffff",
    color: "#121212",
    mt: 2,
  },
  button2: {
    position: "absolute",
    top: 10,
    right: 10,
    color: "#aaa",
  },
  variant10: {
    backgroundColor: "#1a1a1a",
    color: "#fff",
    textAlign: "center",
    p: 3,
    width: "350px",
  },
  variant11: { position: "relative", display: "inline-flex" },
  variant12: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  variant13: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    mb: 2,
  },
  variant14: {
    border: "1px solid #333",
    borderRadius: "10px",
    padding: "10px 10px",
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
  },
  paperprops: { color: "white", width: "400px", borderRadius: "10px" },
  dialog1: {
    m: 0,
    p: 1,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  searchBox: {
    display: "flex",
    alignItems: "center",
    border: "1px solid #9A9A9A",
    padding: "0px 10px 0px 10px",
    borderRadius:"10px"
  },
};


