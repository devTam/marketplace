import { useContext } from "react";
import { Context } from "../../context/index";
import axios from "axios";
import UserRoute from "../../components/routes/UserRoute";

function UserHome() {
  const {
    state: { user },
  } = useContext(Context);

  return (
    <UserRoute>
        <h1 className="bg-light p-5 text-center bg-primary">Welcome</h1>
    </UserRoute>
  );
}

export default UserHome;
