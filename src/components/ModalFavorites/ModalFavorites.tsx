import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Box, Button } from "@mui/material";
import { useAppSelector, useTablePersons } from "@/hooks";
import { DataGrid } from "@mui/x-data-grid";
import { useDispatch } from "react-redux";
import { SET_OPEN } from "@/redux/slices/uiSlice";
import CancelIcon from "@mui/icons-material/Cancel";

const style = {
  position: "absolute" as "absolute",
  width: "90%",
  height: "70vh",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const buttonStyle = {
  position: "fixed" as "fixed",
  top: "0",
  right: "0",
  transform: "translate(-20%, 80%)",
  padding: "0",
};

const ModalFavorites = () => {
  const isOpen = useAppSelector((state) => state.ui.isOpen);
  const dispatch = useDispatch();
  const handleClose = () => dispatch(SET_OPEN(false));
  const { personsliked, colums, PAGE_SIZE } = useTablePersons();
  return (
    <>
      <Modal
        open={isOpen}
        // onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Favorites
          </Typography>
          <Typography
            id="modal-modal-description"
            component="div"
            sx={{ mt: 2 }}
          >
            <Button onClick={handleClose} sx={buttonStyle}>
              <CancelIcon fontSize="large" />
            </Button>
            <DataGrid
              rows={personsliked}
              columns={colums}
              disableColumnSelector
              disableSelectionOnClick
              autoHeight
              pageSize={PAGE_SIZE}
              rowsPerPageOptions={[PAGE_SIZE]}
              getRowId={(row) => row.id}
            />
          </Typography>
        </Box>
      </Modal>
    </>
  );
};

export default ModalFavorites;
