import React from "react";

import DataTable from "react-data-table-component";

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
  return <DataTable columns={columns} data={data} />;
};
