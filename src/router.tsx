import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import { UserList } from "./pages/userList";
import { CreateUser } from "./pages/createUser";
import { EditUser } from "./pages/editUser";
import { ErrorPage } from "./pages/errorPage";
//import RootLayout from "./components/RootLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route index element={<UserList />} />
      <Route path="edit" element={<EditUser />} />
      <Route path="create" element={<CreateUser />} />
      <Route path="*" element={<ErrorPage />}></Route>
    </Route>
  )
);
export default router;
