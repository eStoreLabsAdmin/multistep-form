import React from "react";
import UsersList from "../components/UsersList";
import Navigation from "../components/Navigation";

export const UserList: React.FC = () => {
  return (
    <>
      <Navigation />
      <UsersList />
    </>
  );
};
