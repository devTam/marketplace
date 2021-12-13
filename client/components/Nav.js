import { Menu } from "antd";
import Link from "next/link";
import  { AppstoreOutlined, LoginOutlined, UserAddOutlined } from '@ant-design/icons';
const { Item } = Menu;

function Nav() {
    return (
        <Menu mode='horizontal'>
            <Item key="home" icon={<AppstoreOutlined />}>
                <Link href="/"> 
                    <a>Home</a>
                </Link>
            </Item>
            <Item key="login" icon={<LoginOutlined />}>
                <Link href="/login">
                    <a>login</a>
                </Link>
            </Item>
            <Item key="register" icon={<UserAddOutlined /> }>
                <Link href="/register">
                    <a>register</a>
                </Link>
            </Item>

        </Menu>
    )
}

export default Nav
