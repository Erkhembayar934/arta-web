import React from "react";
import { Card, Col, Row } from "antd";
import Layout from "../components/Layout";
import Parallax from "../components/Parallax";

const { Meta } = Card;

export default function Home() {
  return (
    <Layout>
      <Parallax />
      <Row justify="center">
        <Col span={8}>
          <Card
            cover={
              <img
                alt="example"
                src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
              />
            }
            style={{ width: "33.33%", margin: "auto" }}
          >
            <Meta title="Europe Street beat" description="www.instagram.com" />
          </Card>
        </Col>
        <Col span={8}>
          <Card
            cover={
              <img
                alt="example"
                src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
              />
            }
            style={{ width: "33.33%", margin: "auto" }}
          >
            <Meta title="Europe Street beat" description="www.instagram.com" />
          </Card>
        </Col>
        <Col span={8}>
          <Card
            cover={
              <img
                alt="example"
                src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
              />
            }
            style={{ width: "33.33%", margin: "auto" }}
          >
            <Meta title="Europe Street beat" description="www.instagram.com" />
          </Card>
        </Col>
      </Row>
    </Layout>
  );
}
