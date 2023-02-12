import { useTablePersons } from "@/hooks";
import "@/styles/Home.css";
import { DataGrid } from "@mui/x-data-grid";

const Home = () => {
  const { personTable, colums, PAGE_SIZE } = useTablePersons();

  return (
    <div className="container-table">
      <DataGrid
        rows={personTable}
        columns={colums}
        disableColumnSelector
        disableSelectionOnClick
        autoHeight
        pageSize={PAGE_SIZE}
        rowsPerPageOptions={[PAGE_SIZE]}
        getRowId={(row) => row.id}
      />
    </div>
  );
};

export default Home;
