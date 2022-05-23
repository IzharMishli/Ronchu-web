import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import { getData } from './AddGetData';
import Login from "./Login";
import { Button, Card,Col,Row } from 'react-bootstrap'
import "../styles/manageStyle.css";

export default function () {

  const [isAuth, setAuth] = useState(false);
  const [receivedData, setReceivedData] = useState(false);
  const [invitesData, setInvitesData] = useState([
    {
      name: "",
      date: "",
      email: "",
      phone: "",
      address: "",
      amount: "",
      foods: [],
      deserts: [],
      price: ""
    }
  ]);


  function CheckLogin(data) {

    return true;
  }
  var data = { email: "", pass: "" }

  const loginSubmit = async function (data) {
    await axios.post("/managepanel", { email: data.email, pass: data.pass }).
      then(res => {
        setAuth(res.data);
      })
  }

  useEffect(() => {
    const loadData = async () => {
      if (isAuth && !receivedData) {
        const data = await getData();
        console.log("data: ----------------");
        setInvitesData(data);
        setReceivedData(true);

      }
    }
    loadData()
      .catch(console.error());
  }, [isAuth]);

  if (!isAuth) {
    return (
      <Login func={loginSubmit} />
    )
  }
  else {
    return (
      <div className="manage-page">
      <Row>
        {invitesData.map((invite, idx) => {
          return (
            <Col key={idx} sm={3}>
              <Card style={{ marginTop: "15px" }}>
                <Card.Header>{invite.name}</Card.Header>
                <Card.Body>
                  <h1>Phone:</h1>
                  <h2>{invite.phone}</h2>
                  <h1>email:</h1>
                  <h2>{invite.email}</h2>
                  <h1>address:</h1>
                  <h2>{invite.address}</h2>
                  <h1>date:</h1>
                  <h2>{invite.date}</h2>
                  <h1>price:</h1>
                  <h2>{invite.price}</h2>
                  <h1>amount:</h1>
                  <h2>{invite.amount}</h2>
                  <h1>foods:</h1>
                  <h2>{(invite.foods).map(food=> {return food + ", "})}</h2>
                  <h1>deserts:</h1>
                  <h2>{(invite.deserts).map(desert=> {return desert + ", "})}</h2>
                  <Button variant="primary">הושלם</Button>
                </Card.Body>
              </Card>
              </Col>
          )
        })}
        </Row>
      </div>
    )
  }

}
