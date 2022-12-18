import React from "react";
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import Stack from 'react-bootstrap/Stack';
import Dropdown from 'react-bootstrap/Dropdown';
import CloseButton from 'react-bootstrap/CloseButton';
import Card from 'react-bootstrap/Card';
import Alert from 'react-bootstrap/Alert';
import Modal from 'react-bootstrap/Modal';
import { userMeetingAPI } from "./../../API"

function UserMeetingMobileItem(props){
    const [dataShow, setDataShow] = useState(false);
    
    return(
        <div dir="rtl">
            <Card style={{margin : "20px 8px 5px 8px"}}>
                <Card.Header as="h5" className="text-center">{props.data.MH_id}</Card.Header>
                <Card.Body>
                    <Card.Title>{props.data.subject}</Card.Title>
                    <Card.Text>
                        زمان شروع: {props.data.start_time} {" - "}
                        زمان پایان: {props.data.end_time}  {" - "}
                        تاریخ: {props.data.date}
                    </Card.Text>
                    <Stack>
                        <Button variant={props.color.color1} onClick={()=>{setDataShow(true);}}>جزئیات</Button>
                    </Stack>
                </Card.Body>
            </Card>

            <Modal
                size="lg" aria-labelledby="contained-modal-title-vcenter"
                centered show={dataShow} onHide={() => {setDataShow(false);}}
            >
                
                <Modal.Body>
                    <div dir="rtl">
                        <h4>{props.data.subject}</h4>
                        <p>
                            زمان شروع: {props.data.start_time} {" - "}
                            زمان پایان: {props.data.end_time} {" - "}
                            تاریخ: {props.data.date}
                            <br/>
                            {props.data.description}
                        </p>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Stack>
                        <Button variant={props.color.color1} onClick={() => {setDataShow(false);}}>بستن</Button>
                    </Stack>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

function filterFarsi(text){
    if(text == "past"){
        return("جلسات گذشته");
    }else if(text == "toDay"){
        return("جلسات امروز");
    }
    return("جلسات آینده");
}

function SearchFunction(Search, filterTitle, MeetingList){
    let h1 = [];
    if(filterTitle == "past"){
        h1 = [...(MeetingList.listMeetingPast)];
    }else if(filterTitle == "toDay"){
        h1 = [...(MeetingList.listMeetingToDay)];
    }else{
        h1 = [...(MeetingList.listMeetingFuture)];
    }
    let h2 = [...h1.filter((value) => {
        if(value.MH_id.search(Search) >= 0 || value.start_time.search(Search) >= 0 || value.end_time.search(Search) >= 0 || value.subject.search(Search) >= 0 || value.description.search(Search) >= 0){
            return true;
        }
        return false;
    })];

    return [...h2];
}

//filterList = past toDay future
//MeetingList =   listMeetingPast listMeetingToDay listMeetingFuture
function UserMeetingMobile(props){
    const MeetingList = userMeetingAPI(props.userNameApp, props.passApp);
    const [showList, setShowList] = useState([...(MeetingList.listMeetingToDay)]);
    const [filterTitle, setfilterTitle] = useState("toDay");
    const [Search, setSearch] = useState("");

    const textSearch = (event) => {
        setSearch(event.target.value);
        return;
    };
    const btnSearch = (e) => {
        let h = SearchFunction(Search, filterTitle, MeetingList);
        setShowList([...h]);
        e.preventDefault();
        return;
    };
    const btnClear = (e) => {
        setSearch("");
        let h1 = [];
        if(filterTitle == "past"){
            h1 = [...(MeetingList.listMeetingPast)];
        }else if(filterTitle == "toDay"){
            h1 = [...(MeetingList.listMeetingToDay)];
        }else{
            h1 = [...(MeetingList.listMeetingFuture)];
        }
        setShowList([...h1]);
        e.preventDefault();
        return;
    };

    return(
        <div dir="rtl" style={{margin : "0px 0px 100px 0px"}}>
            <Navbar expand="lg" variant={props.color.color1} bg={props.color.color2}>
                <Container>
                    <Stack direction="horizontal" gap={3}>
                        <Form.Control className="me-auto" placeholder="جستجو" onChange={textSearch} value={Search}/>
                        <CloseButton variant={props.color.color1} onClick={btnClear}/>
                        <Button variant={props.color.color1} onClick={btnSearch} >جستجو</Button>
                        <div className="vr" />
                        <Dropdown>
                            <Dropdown.Toggle variant={props.color.color1} id="dropdown-basic-UserMeetingMobile">
                                فیلتر
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item type="button" onClick={(e)=>{setShowList([...(MeetingList.listMeetingPast)]); setfilterTitle("past"); e.preventDefault();}}>جلسات گذشته</Dropdown.Item>
                                <Dropdown.Item type="button" onClick={(e)=>{setShowList([...(MeetingList.listMeetingToDay)]); setfilterTitle("toDay"); e.preventDefault();}}>جلسات امروز</Dropdown.Item>
                                <Dropdown.Item type="button" onClick={(e)=>{setShowList([...(MeetingList.listMeetingFuture)]); setfilterTitle("future"); e.preventDefault();}}>جلسات آینده</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Stack>
                </Container>
            </Navbar>
            <Alert variant={props.color.color1}>
                <Alert.Heading className="text-center">{filterFarsi(filterTitle)}</Alert.Heading>
            </Alert>
            
            {showList.map((data) => (
                <UserMeetingMobileItem id={data.meeting_id} data={data} color={props.color} />
            ))}
        </div>
    );
}

export default UserMeetingMobile;


/*
<UserMeetingMobileItem id={data.meeting_id} subject={data.subject} MH_id={data.MH_id} 
                start_time={data.start_time} end_time={data.end_time} date={data.date} />

                

*/