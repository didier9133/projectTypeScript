import { PersonSelect } from "@/models";
import { SET_PEOPLE_LIKE } from "@/redux/slices/peopleSlice";
import { Checkbox } from "@mui/material";
import { GridRenderCellParams } from "@mui/x-data-grid";
import { useDispatch } from "react-redux";
import { useAppSelector } from "./reducer.hooks";

const useTablePersons = () => {
  const PAGE_SIZE = 5;

  const dispatch = useDispatch();
  const personsliked = useAppSelector((state) => state.data.personsLiked);
  const personTable = useAppSelector((state) => state.data.personTable);
  const searchPeopleSelect = (params: PersonSelect): number =>
    personsliked.findIndex((person) => person.id === params.id);

  const handlerCheck = (params: PersonSelect): boolean =>
    searchPeopleSelect(params) !== -1 ? true : false;

  const handlerChange = (params: PersonSelect) => {
    let copySelectPeople = [...personsliked];

    const indexOfPeopleSelect = searchPeopleSelect(params);
    indexOfPeopleSelect !== -1
      ? copySelectPeople.splice(indexOfPeopleSelect, 1)
      : (copySelectPeople = [...copySelectPeople, params]);

    dispatch(SET_PEOPLE_LIKE(copySelectPeople));
  };

  const colums = [
    {
      field: "actions",
      type: "actions",
      sorteable: false,
      headerName: "",
      width: 50,
      minWidth: 150,
      renderCell: (params: GridRenderCellParams<Date>) => (
        <>
          <Checkbox
            size="small"
            checked={handlerCheck(params.row)}
            onChange={() => handlerChange(params.row)}
          />
        </>
      ),
    },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      minWidth: 150,
      renderCell: (params: GridRenderCellParams<Date>) => <>{params.value}</>,
    },
    {
      field: "category",
      headerName: "Category",
      flex: 1,
      minWidth: 150,
      renderCell: (params: GridRenderCellParams<Date>) => <>{params.value}</>,
    },
    {
      field: "company",
      headerName: "Company",
      flex: 1,
      minWidth: 150,
      renderCell: (params: GridRenderCellParams<Date>) => <>{params.value}</>,
    },
  ];

  const colums2 = [
    {
      field: "actions",
      type: "actions",
      sorteable: false,
      headerName: "",
      width: 50,
      minWidth: 150,
      renderCell: (params: GridRenderCellParams<Date>) => (
        <>
          <Checkbox
            size="small"
            checked={handlerCheck(params.row)}
            onChange={() => handlerChange(params.row)}
          />
        </>
      ),
    },
    {
      field: "numberInvoice",
      headerName: "Number Invoice",
      flex: 1,
      minWidth: 150,
      renderCell: (params: GridRenderCellParams<Date>) => <>{params.value}</>,
    },
    {
      field: "amount",
      headerName: "Amount",
      flex: 1,
      minWidth: 150,
      renderCell: (params: GridRenderCellParams<Date>) => <>{params.value}</>,
    },
    {
      field: "invoiceDate",
      headerName: "Invoice Date",
      flex: 1,
      minWidth: 150,
      renderCell: (params: GridRenderCellParams<Date>) => <>{params.value}</>,
    },
    {
      field: "invoiceEnd",
      headerName: "Invoice End",
      flex: 1,
      minWidth: 150,
      renderCell: (params: GridRenderCellParams<Date>) => <>{params.value}</>,
    },
    {
      field: "invoiceEnd",
      headerName: "Invoice End",
      flex: 1,
      minWidth: 150,
      renderCell: (params: GridRenderCellParams<Date>) => <>{params.value}</>,
    },
    {
      field: "monthId",
      headerName: "month",
      flex: 1,
      minWidth: 150,
      renderCell: (params: GridRenderCellParams<Date>) => <>{params.value}</>,
    },
  ];
  return {
    colums,
    personTable,
    personsliked,
    PAGE_SIZE,
  };
};

export default useTablePersons;
