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
import { MHListAPI } from "./../../API"

// MHApp={props.MHApp} setMHApp={props.setMHApp} 
function UserMHMobileItem(props){
    //console.log("card");
    return(
        <div dir="rtl">
            <Card style={{margin : "20px 8px 5px 8px"}}>
                <Card.Header as="h5" className="text-center">{props.data.first_name} {" "} {props.data.last_name}</Card.Header>
                <Card.Body>
                    <Card.Title className="text-center">{props.data.degree} {" "} {farsiField(props.data.field)}</Card.Title>
                    <Card.Text>
                        
                    </Card.Text>
                    <Stack>
                        <Button variant={props.color.color1} 
                        onClick={()=>{
                            props.setMHApp(props.data.mh_id);
                            props.setPage("reserve");
                        }}
                        >رزرو</Button>
                    </Stack>
                </Card.Body>
            </Card>

        </div>
    );
}

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

function filterFunction(MHRaw){
    let h = {
        Applied_Mathematics: [...MHRaw.filter((value) => {
            if(value.field == "Applied Mathematics"){
                return true;
            }
            return false;
        })],
        Pure_Mathematics: [...MHRaw.filter((value) => {
            if(value.field == "Pure Mathematics"){
                return true;
            }
            return false;
        })],
        Computer_science: [...MHRaw.filter((value) => {
            if(value.field == "Computer science"){
                return true;
            }
            return false;
        })],
        Statistics: [...MHRaw.filter((value) => {
            if(value.field == "Statistics"){
                return true;
            }
            return false;
        })],
        All: [...MHRaw]
    };
    return h;
}

function searchFunction(Search, filterTitle, MHList){
    let h1 = [];
    if(filterTitle == "Applied Mathematics"){
        h1 = [...(MHList.Applied_Mathematics)];
    }else if(filterTitle == "Pure Mathematics"){
        h1 = [...(MHList.Pure_Mathematics)];
    }else if(filterTitle == "Computer science"){
        h1 = [...(MHList.Computer_science)];
    }else if(filterTitle == "Statistics"){
        h1 = [...(MHList.Statistics)];
    }else{
        h1 = [...(MHList.All)];
    }
    let h2 = [...h1.filter((value) => {
        if(value.first_name.search(Search) >= 0 || value.last_name.search(Search) >= 0 || value.MH_email.search(Search) >= 0 || value.Teacher_number.search(Search) >= 0 || value.degree.search(Search) >= 0 || value.link_to_webpage.search(Search) >= 0){
            return true;
        }
        return false;
    })];

    return [...h2];
}


//filterTitle = Applied Mathematics , Pure Mathematics , Computer science , Statistics , All
function UserMHListMobile(props){
    const MHList = filterFunction(MHListAPI(props.userNameApp, props.passApp));
    const [showList, setShowList] = useState([...(MHList.All)]);
    const [filterTitle, setfilterTitle] = useState("All");
    const [Search, setSearch] = useState("");

    const textSearch = (event) => {
        setSearch(event.target.value);
        return;
    };
    const btnSearch = (e) => {
        let h = searchFunction(Search, filterTitle, MHList);
        setShowList([...h]);
        e.preventDefault();
        return;
    };
    const btnClear = (e) => {
        setSearch("");
        let h1 = [];
        if(filterTitle == "Applied Mathematics"){
            h1 = [...(MHList.Applied_Mathematics)];
        }else if(filterTitle == "Pure Mathematics"){
            h1 = [...(MHList.Pure_Mathematics)];
        }else if(filterTitle == "Computer science"){
            h1 = [...(MHList.Computer_science)];
        }else if(filterTitle == "Statistics"){
            h1 = [...(MHList.Statistics)];
        }else{
            h1 = [...(MHList.All)];
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
                        <Button variant={props.color.color1} onClick={btnSearch}>جستجو</Button>
                        <div className="vr" />
                        <Dropdown>
                            <Dropdown.Toggle variant={props.color.color1} id="dropdown-basic">
                                فیلتر
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item type="button" onClick={(e)=>{setShowList([...(MHList.All)]); setfilterTitle("All"); e.preventDefault();}}>همه اساتید</Dropdown.Item>
                                <Dropdown.Item type="button" onClick={(e)=>{setShowList([...(MHList.Pure_Mathematics)]); setfilterTitle("Pure Mathematics"); e.preventDefault();}}>اساتید ریاضی محض</Dropdown.Item>
                                <Dropdown.Item type="button" onClick={(e)=>{setShowList([...(MHList.Applied_Mathematics)]); setfilterTitle("Applied Mathematics"); e.preventDefault();}}>اساتید ریاضی کاربردی</Dropdown.Item>
                                <Dropdown.Item type="button" onClick={(e)=>{setShowList([...(MHList.Computer_science)]); setfilterTitle("Computer science"); e.preventDefault();}}>اساتید علوم کامپیوتر</Dropdown.Item>
                                <Dropdown.Item type="button" onClick={(e)=>{setShowList([...(MHList.Statistics)]); setfilterTitle("Statistics"); e.preventDefault();}}>اساتید آمار</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Stack>
                </Container>
            </Navbar>
            <Alert variant={props.color.color1}>
                <Alert.Heading className="text-center">{farsiField(filterTitle)}</Alert.Heading>
            </Alert>
            
            {showList.map((data) => (
                <UserMHMobileItem id={data.mh_id} data={data} color={props.color} page={props.page} setPage={props.setPage}
                MHApp={props.MHApp} setMHApp={props.setMHApp} />
            ))}
        </div>
    );
}

export default UserMHListMobile;