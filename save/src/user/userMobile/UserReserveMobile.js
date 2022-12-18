import React from "react";
import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';
import Dropdown from 'react-bootstrap/Dropdown';
import Modal from 'react-bootstrap/Modal';
import { MHListAPI , MHFreeTimeListAPI } from "./../../API"

function farsiField(text){
    if(text == "Applied Mathematics"){
        return("ریاضی کاربردی");
    }else if(text == "Pure Mathematics"){
        return("ریاضی محض");
    }else if(text == "Computer science"){
        return("علوم کامپیوتر");
    }else if(text == "Statistics"){
        return("آمار");
    }
    return("همه");
}

function UserReserveMobile(props){
    const MHSelected = [...(MHListAPI(props.userNameApp, props.passApp).filter((value) => {
        if(value.mh_id == props.MHApp){
            return true;
        }
        return false;
    }))][0];
    const timeTable = [...MHFreeTimeListAPI(props.userNameApp, props.passApp, props.MHApp)];
    const [day, setDay] = useState(0);
    const [showTime, setShowTime] = useState([...timeTable[0].meetings])
    const [showModal, setShowModal] = useState(false);
    const [subjectText, setSubjectText] = useState("");
    const [descrcriptionText, setDescrcriptionText] = useState("");
    const [timeSet, setTimeSet] = useState(-1);

    const functionDropDown = (e, i) => {
        setDay(i);
        setTimeSet(-1);
        setShowTime([...timeTable[0].meetings]);
        e.preventDefault();
        return;
    };

    const functionSubjectText = (event) => {
        setSubjectText(event.target.value);
        return;
    };
    const functionDescrcriptionText = (event) => {
        setDescrcriptionText(event.target.value);
        return;
    };

    const timeFunction = (i)=>{
        setTimeSet(i);
        let h = [...timeTable[day].meetings];
        h[i] = "set";
        setShowTime([...h]);
        return;
    }
    
    const functionReserve = () => {
        console.log(timeSet);
        if(timeSet >= 0){
            setShowModal(true);
        }else{
            window.alert("لطفا یک زمان را مشخص کنید.");
        }
        return;
    };

    return(
        <div dir="rtl" style={{margin : "0px 0px 100px 0px"}}>
            <Modal
                size="lg" aria-labelledby="contained-modal-title-vcenter"
                centered show={showModal} onHide={() => {setShowModal(false);}}>
                <Modal.Body>
                    <div dir="rtl">
                        <h4>جلسه: {subjectText}</h4>
                        <h4>استاد: {MHSelected.first_name} {" "} {MHSelected.last_name}</h4>
                        <p>
                            زمان: {((timeSet % 4) * 15 )} {":"} {Number.parseInt(timeSet / 4)} {" تا "} {(((timeSet+1) % 4) * 15 )} {":"} {Number.parseInt((timeSet+1) / 4)}
                            <br/>
                            تاریخ: {timeTable[day].date}
                            <br/>
                            {descrcriptionText}
                        </p>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Stack gap={1}>
                        <Button variant={props.color.color1} onClick={() => {}}>تایید</Button>
                        <Button variant={props.color.color2} onClick={() => {setShowModal(false);}}>لغو</Button>
                    </Stack>
                </Modal.Footer>
            </Modal>
            <Navbar bg="light">
                <Container>
                    <Form className="d-flex">  
                        <Button variant={props.color.color1} onClick={() => {props.setPage("mh_list");}} className="">بازگشت</Button>
                    </Form>
                </Container>
            </Navbar>
            
            <Card style={{margin : "20px 8px 5px 8px"}}>
                <Card.Header as="h5" className="text-center">{MHSelected.first_name} {" "} {MHSelected.last_name}</Card.Header>
                <Card.Body>
                    <Card.Title className="text-center">{MHSelected.degree} {" "} {farsiField(MHSelected.field)}</Card.Title>
                    <Card.Text>
                        {"ایمیل: "} {MHSelected.MH_email} <br/>
                        {"شماره استادی:"}{MHSelected.Teacher_number} <br/>
                        {"سایت:"} <a href={MHSelected.link_to_webpage} target="_blank">{MHSelected.link_to_webpage}</a>
                    </Card.Text>
                    
                </Card.Body>
            </Card>
            <Card style={{margin : "20px 8px 5px 8px"}}>
                <Card.Body>
                    <FloatingLabel label="موضوع" className="mb-3">
                            <Form.Control as="textarea" placeholder="" onChange={functionSubjectText} value={subjectText}/>
                    </FloatingLabel>
                    <FloatingLabel label="توضیحات">
                        <Form.Control as="textarea" placeholder="" onChange={functionDescrcriptionText} value={descrcriptionText} style={{ height: '100px', margin : "0px 0px 5px 0px" }}/>
                    </FloatingLabel>
                    <Stack>
                        <Button variant={props.color.color1} onClick={functionReserve}>رزرو</Button>
                    </Stack>
                </Card.Body>
            </Card>
            <Card style={{margin : "20px 8px 5px 8px"}}>
                <Card.Body>
                    <Stack>
                        <Dropdown size="lg" style={{ margin : "0px 0px 5px 0px" }}>
                            <Dropdown.Toggle variant={props.color.color1}>
                                تاریخ: {timeTable[day].date}
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item type="button" onClick={(e)=>{functionDropDown(e,0)}}>امروز مورخ: {timeTable[0].date}</Dropdown.Item>
                                <Dropdown.Item type="button" onClick={(e)=>{functionDropDown(e,1)}}>فردا مورخ: {timeTable[1].date}</Dropdown.Item>
                                <Dropdown.Item type="button" onClick={(e)=>{functionDropDown(e,2)}}>پس فردا مورخ: {timeTable[2].date}</Dropdown.Item>
                                <Dropdown.Item type="button" onClick={(e)=>{functionDropDown(e,3)}}>سه روز بعد مورخ: {timeTable[3].date}</Dropdown.Item>
                                <Dropdown.Item type="button" onClick={(e)=>{functionDropDown(e,4)}}>چهار روز بعد مورخ: {timeTable[4].date}</Dropdown.Item>
                                <Dropdown.Item type="button" onClick={(e)=>{functionDropDown(e,5)}}>پنج روز بعد مورخ: {timeTable[5].date}</Dropdown.Item>
                                <Dropdown.Item type="button" onClick={(e)=>{functionDropDown(e,6)}}>شش روز بعد مورخ: {timeTable[6].date}</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Container >
                            <Row>
                                <Col>
                                    <Stack>
                                        <Alert variant={props.color.color1}>
                                            <p>قبل از ظهر</p>
                                        </Alert>
                                        <ButtonGroup vertical >
                                            {showTime.slice(0,48).map((data , index) => (
                                                <Button onClick={()=>{timeFunction(index)}} variant={data == "set" ? props.color.color2 : props.color.color1} disabled={data == "full"} size="sm"> 
                                                    {((index % 4) * 15 )} {":"} {Number.parseInt(index / 4)} {" تا "} {(((index+1) % 4) * 15 )} {":"} {Number.parseInt((index+1) / 4)}
                                                </Button>
                                            ))}
                                        </ButtonGroup>
                                    </Stack>
                                </Col>
                                <Col>
                                    <Stack>
                                        <Alert variant={props.color.color1} size="sm">
                                            <p>بعد از ظهر</p>
                                        </Alert>
                                        <ButtonGroup vertical >
                                            {showTime.slice(48,96).map((data , index) => (
                                                <Button onClick={()=>{timeFunction(index+48)}} variant={data == "set" ? props.color.color2 : props.color.color1} disabled={data == "full"} size="sm"> 
                                                    {((index % 4) * 15 )} {":"} {Number.parseInt(index / 4)+12} {" تا "} {(((index+1) % 4) * 15 )} {":"} {Number.parseInt((index+1) / 4)+12}
                                                </Button>
                                            ))}
                                        </ButtonGroup>
                                    </Stack>
                                </Col>
                            </Row>
                        </Container>
                    </Stack>
                </Card.Body>
            </Card>
        </div>
    );
}

export default UserReserveMobile;