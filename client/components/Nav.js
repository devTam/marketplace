import { useState, useEffect, useContext } from "react";
import { Menu } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import axios from "axios";
import {
  AppstoreOutlined,
  LoginOutlined,
  LogoutOutlined,
  UserAddOutlined,
  CoffeeOutlined
} from "@ant-design/icons";
import { Context } from "../context";
import { toast } from "react-toastify";

const { Item, SubMenu  } = Menu;

function Nav() {
  const [current, setCurrent] = useState("");
  const { state, dispatch } = useContext(Context);
  const router = useRouter();
  const { user } = state;

  useEffect(() => {
    // NextJs runs in browser and server so check if browser
    process.browser && setCurrent(window.location.pathname);
  }, [process.browser && window.location.pathname]);

  const logout = async () => {
    dispatch({ type: "LOGOUT" });
    localStorage.removeItem("user");
    try {
      const { data } = await axios.get("/api/logout");
      toast.success(data.message);
      router.push("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Menu mode="horizontal" selectedKeys={[current]}>
      <Item
        key="/"
        onClick={(e) => setCurrent(e.key)}
        icon={<AppstoreOutlined />}
      >
        <Link href="/">
          <a>Home</a>
        </Link>
      </Item>
      {!user && (
        <>
          <Item
            key="/login"
            onClick={(e) => setCurrent(e.key)}
            icon={<LoginOutlined />}
          >
            <Link href="/login">
              <a>login</a>
            </Link>
          </Item>
          <Item
            key="/register"
            onClick={(e) => setCurrent(e.key)}
            icon={<UserAddOutlined />}
          >
            <Link href="/register">
              <a>register</a>
            </Link>
          </Item>
        </>
      )}
      {user && (
        <SubMenu icon={<CoffeeOutlined />} title={user && user.user.name} className="end">
            <Item
          key="/logout"
          onClick={logout}
          icon={<LogoutOutlined />}
        >
          Logout
        </Item>
        </SubMenu>
      )}
    </Menu>
  );
}

export default Nav;
