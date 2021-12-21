import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { SyncOutlined } from "@ant-design/icons";

function UserRoute({ children }) {
  const [ok, setOk] = useState(false);
  const router = useRouter();
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const { data } = await axios.get("/api/current-user");
        data.ok && setOk(true);
      } catch (error) {
        setOk(false);
        router.push("/login");
        console.log(error);
      }
    };
    fetchUser();
  }, []);
  return (
    <>
      {!ok ? (
        <SyncOutlined
          spin={true}
          className="d-flex justify-content-center display-1 text-primary p-5"
        />
      ) : (
        <>{children}</>
      )}
    </>
  );
}

export default UserRoute;
