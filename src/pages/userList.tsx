import React from "react";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import DataTable from "react-data-table-component";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

const columns = [
  {
    name: "Email",
    selector: (row) => row.title,
    sortable: true,
  },
  {
    name: "Name",
    selector: (row) => row.year,
    sortable: true,
  },
  {
    name: "Edit User",
    cell: (row) => {
      return (
        <Link to={"/edit"}>
          <FontAwesomeIcon className="fa-icon" icon={faEdit} />
        </Link>
      );
    },
    sortable: true,
  },
];

const data = [
  {
    id: 1,
    title: "Beetlejuice",
    year: "1988",
  },
  {
    id: 2,
    title: "Ghostbusters",
    year: "1984",
  },
];

export const UserList: React.FC = () => {
  return <DataTable columns={columns} data={data} pagination />;
};
