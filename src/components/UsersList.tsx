import useAxios from "../api/hooks/useAxios";
import axios from "../api/usersList";

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

  return (
    <article>
      {loading && <p>Loading...</p>}
      {!loading && error && <p>{error}</p>}
      {!loading && !error && list && <p>{list?.data.name}</p>}
      {!loading && !error && !list && <p>No users to display...</p>}
    </article>
  );
};

export default UsersList;
