import { SET_OPEN } from "@/redux/slices/uiSlice";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { useDispatch } from "react-redux";

const buttonFavorite = {
  position: "fixed" as "fixed",
  right: "24px",
  color: "#c71585",
  borderRadius: "50%",
  top: "5px",
  padding: "10px 2px",
  cursor: "pointer",
};

const NavBar = () => {
  const dispatch = useDispatch();
  const handleOpen = () => dispatch(SET_OPEN(true));
  return (
    <>
      <AppBar position="sticky">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Typescript-React
            <FavoriteIcon
              onClick={handleOpen}
              sx={buttonFavorite}
              fontSize="large"
            />
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavBar;
