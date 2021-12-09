import { Layout, Menu } from "antd";
import "./LayoutCss.css";

const { Header, Content, Footer } = Layout;

export default function HomeLayout(props) {
  return (
    <>
      <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu theme="light" mode="horizontal" defaultSelectedKeys={["2"]}>
            {new Array(5).fill(null).map((_, index) => {
              const key = index + 1;
              return <Menu.Item key={key}>{`nav ${key}`}</Menu.Item>;
            })}
          </Menu>
        </Header>
        <div style={{ height: "100vh" }}>{props.children}</div>
        <Footer style={{ textAlign: "center" }}>©2021 Created by Arta</Footer>
      </Layout>
    </>
  );
}
