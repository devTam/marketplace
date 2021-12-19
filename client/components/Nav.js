import { useState, useEffect } from "react";
import { Menu } from "antd";
import Link from "next/link";
import  { AppstoreOutlined, LoginOutlined, UserAddOutlined } from '@ant-design/icons';
const { Item } = Menu;

function Nav() {
    const [current, setCurrent] = useState("");
    useEffect(() => {
        // NextJs runs in browser and server so check if browser
        process.browser && setCurrent(window.location.pathname);
    }, [process.browser && window.location.pathname]); 
    return (
        <Menu mode='horizontal' selectedKeys={[current]}>
            <Item key="/" onClick={(e) => setCurrent(e.key)} icon={<AppstoreOutlined />}>
                <Link href="/" > 
                    <a>Home</a>
                </Link>
            </Item>
            <Item key="/login" onClick={(e) => setCurrent(e.key)} icon={<LoginOutlined />}>
                <Link href="/login">
                    <a>login</a>
                </Link>
            </Item>
            <Item key="/register" onClick={(e) => setCurrent(e.key)}  icon={<UserAddOutlined /> }>
                <Link href="/register">
                    <a>register</a>
                </Link>
            </Item>

        </Menu>
    )
}

export default Nav
