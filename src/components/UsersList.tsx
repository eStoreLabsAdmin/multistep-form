import useAxios from "../api/hooks/useAxios";
import { User } from "../api/types";
import axios from "../api/usersList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import DataTable, { TableColumn } from "react-data-table-component";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

const columns: TableColumn<User>[] = [
  {
    name: "Email",
    selector: (row) => row.email,
    sortable: true,
  },
  {
    name: "Name",
    selector: (row) => row.name,
    sortable: true,
  },
  {
    name: "Username",
    selector: (row) => row.username,
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

const UsersList = () => {
  const [list, error, loading] = useAxios({
    axiosInstance: axios,
    method: "GET",
    url: "/",
    requestConfig: {
      headers: {
        "Content-Language": "en-US",
      },
    },
  });

  const user = list.map((item: User) => {
    return item;
  });
  console.log("data", user);

  return <DataTable columns={columns} data={user} pagination />;
};

export default UsersList;
