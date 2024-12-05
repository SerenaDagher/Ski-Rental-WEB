import React, { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Box, Drawer, IconButton} from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import LetterAvatar from "../Authentication/LetterAvatar";
import { useTheme } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import ItemDetailsDialog from "../EquipmentsViews/ItemsDetailsDialog";
import UsersRents from "../Rents/UsersRents";
import { useUser } from "../../contexts/UserContext";
import { toast } from "react-toastify";
import MenuIcon from '@mui/icons-material/Menu';

function TopBar({
  onSignupClick,
  isLoggedIn,
  onLogoutClick,
  onScrollToAboutUs,
  onScrollToEquip,
  onScrollToAccessories,
  onLogoCLick
}) {
  const [filterSearch, setFilterSearch] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const [item, setItem] = useState([]);
  const [records, setRecords] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [openRentalsDialog, setOpenRentalsDialog] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [navWithBurger, setNavWithBurger] = useState(window.innerWidth);
  const [menuOpen, setMenuOpen] = useState(false);
  const { user } = useUser();
  
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width <= 1300) {
        setNavWithBurger(true); 
      } else {
        setNavWithBurger(false);
      }
    };
  
    handleResize();
  
    window.addEventListener("resize", handleResize);
  
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); 
  
const openMenu = () => {
  setMenuOpen(true);
};
const closeMenu = () => {
  setMenuOpen(false);
};
  const openDialog = (item) => {
    setSelectedItem(item);
    setDialogOpen(true);
  };

  const closeDialog = () => {
    setDialogOpen(false);
  };


  const theme = useTheme();

  const openRentals = () => {
    if (!user || !user._id) {
      toast.error("Please log in to see your rentals");
      return;
    }
    setOpenRentalsDialog(true);
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 70);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:8082/api/skis")
      .then((res) => {
        setItem(res.data);
        setRecords(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const filter = (event) => {
    const searchValue = event.target.value.toLowerCase();
    setFilterSearch(searchValue);

    if (searchValue) {
      const filtered = item.filter((ski) =>
        ski.name.toLowerCase().includes(searchValue)
      );
      setRecords(filtered);
      setShowSuggestions(true);
    } else {
      setShowSuggestions(false);
      setRecords([]);
    }
  };

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: isScrolled ? theme.palette.primary.main : "transparent",
          boxShadow: isScrolled ? "0 2px 4px rgba(0, 0, 0, 0.2)" : "none",
          transition: "background-color 0.3s ease",
        }}
        style={{ zIndex: 999 }}
      >
        <Toolbar>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              color: "#ffffff",
            }}
            onClick={onLogoCLick}
          >
            <img
              className="filter-white"
              src="/logo.svg"
              alt="RentTheSlope Logo"
              style={{
                width: 50,
                height: "auto",
                marginRight: 10,
              }}
            />
            <Typography
              variant="h3"
              component="div"
              sx={{
                flexGrow: 0,
                color: "#ffffff",
                fontSize: "2.8rem",
              }}
            >
              RentTheSlope
            </Typography>
          </Box>

          <Box sx={{ flexGrow: 1 }} />
          {navWithBurger ? (
  <IconButton aria-label="menu" color="inherit">
    <MenuIcon fontSize="large" color="inherit" onClick={openMenu}/>
  </IconButton>
) : (
  <Box
    sx={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginLeft: "auto",
      columnGap: 1,
      color: "#ffffff",
    }}
  >
    <ClickAwayListener onClickAway={() => setShowSuggestions(false)}>
      <Box sx={{ position: "relative" }}>
        <TextField
          value={filterSearch}
          id="standard-basic"
          label={filterSearch === "" ? "Search" : filterSearch}
          variant="standard"
          onChange={filter}
          onFocus={() => setShowSuggestions(true)}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <SearchIcon style={{ color: "#ffffff" }} />
              </InputAdornment>
            ),
          }}
          InputLabelProps={{
            shrink: false,
          }}
          sx={{
            "& .MuiInputBase-root": {
              color: "#ffffff",
              display: "flex",
              alignItems: "center",
            },
            "& .MuiInputLabel-root": {
              color: "#ffffff",
              transition: "opacity 0.3s ease, transform 0.3s ease",
            },
            "& .MuiInputLabel-root.Mui-focused": {
              opacity: 0,
            },
            "& .MuiInput-underline:before": {
              borderBottomColor: "#ffffff",
            },
            "& .MuiInput-underline:hover:before": {
              borderBottomColor: theme.palette.darkorange.main,
            },
            "& .MuiInput-underline:after": {
              borderBottomColor: theme.palette.darkorange.main,
            },
            paddingBottom: "20px",
          }}
        />
        {showSuggestions && records.length > 0 && (
          <Box
          sx={{
            position: "absolute",
            top: "100%",
            left: 0,
            right: 0,
            maxHeight: "200px",
            overflowY: "auto",
            backgroundColor: "#ffffff",
            color: "#000000",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            borderRadius: "4px",
            zIndex: 1000,
            padding: "10px 0",
          }}
          >
            {records.map((ski) => (
              <Box
                key={ski.id}
                sx={{
                  padding: "10px 20px",
                  cursor: "pointer",
                  "&:hover": {
                    backgroundColor: theme.palette.action.hover,
                  },
                }}
                onClick={() => {
                  setFilterSearch(ski.name);
                  setShowSuggestions(false);
                  openDialog(ski);
                }}
              >
                <Typography variant="body1">{ski.name}</Typography>
              </Box>
            ))}
          </Box>
        )}
      </Box>
    </ClickAwayListener>
    <Button
      color="inherit"
      sx={{
        fontSize: "1.2rem",
        textTransform: "none",
        letterSpacing: "0.5px",
      }}
      onClick={onScrollToAboutUs}
    >
      About Us
    </Button>
    <Button
      color="inherit"
      sx={{
        fontSize: "1.2rem",
        textTransform: "none",
        letterSpacing: "0.5px",
      }}
      onClick={onScrollToEquip}
    >
      Equipments
    </Button>
    <Button
      color="inherit"
      sx={{
        fontSize: "1.2rem",
        textTransform: "none",
        letterSpacing: "0.5px",
      }}
      onClick={onScrollToAccessories}
    >
      Accessories
    </Button>
    <Button
      color="inherit"
      sx={{
        fontSize: "1.2rem",
        textTransform: "none",
        letterSpacing: "0.5px",
      }}
      onClick={() => {
        if (isLoggedIn) {
          openRentals();
        } else {
          toast.error("You need to log in to view your rentals.");
        }
      }}
    >
      My Rentals
    </Button>

    {isLoggedIn ? (
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <LetterAvatar logout={onLogoutClick} />
      </Box>
    ) : (
      <Button
        color="inherit"
        sx={{ fontSize: "1.1rem" }}
        onClick={onSignupClick}
      >
        Sign In
      </Button>
    )}
  </Box>
)}
  <Drawer anchor="right" open={menuOpen} onClose={closeMenu}>
  <Box
          sx={{
            width: 250, // Set the width of the drawer
            padding: '20px',
            backgroundColor: theme.palette.primary.main,
            color: '#fff',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: "center"
          }}
        >
          <Typography fontSize={"1.6rem"} fontWeight={"bold"} sx={{marginBottom:"20px"}}>Menu</Typography>
          <Button color="inherit"       onClick={() => {
        openRentals();
        closeMenu();
      }} sx={{ marginBottom: '10px' }}>My Rentals</Button>
          <Button color="inherit"       onClick={() => {
        onScrollToEquip();
        closeMenu();
      }} sx={{ marginBottom: '10px' }}>Equipments</Button>
          <Button color="inherit"       onClick={() => {
        onScrollToAccessories();
        closeMenu();
      }}sx={{ marginBottom: '10px' }}>Accessories</Button>
          <Button color="inherit"       onClick={() => {
        onScrollToAboutUs();
        closeMenu();
      }} sx={{ marginBottom: '10px' }}>About Us</Button>
          {isLoggedIn ? (
            <Button color="inherit" sx={{marginTop:'auto'}}>My Profile</Button>
          ) : (
            <Button
              color="inherit"
              sx={{ fontSize: "1.1rem", marginTop:'auto' }}
              onClick={() => {
                onSignupClick();
                closeMenu();
              }}
            >
              Sign In
            </Button>
          )}
        </Box>
  </Drawer>


          <UsersRents
            open={openRentalsDialog}
            onClose={() => setOpenRentalsDialog(false)}
            userId={user ? user._id : null}
          />
        </Toolbar>
        <ItemDetailsDialog open={dialogOpen} onClose={closeDialog} item={selectedItem} />
      </AppBar>
    </>
  );
}

export default TopBar;