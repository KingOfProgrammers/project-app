import React from "react";
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Stack from 'react-bootstrap/Stack';
import {useState} from "react";


function UserMobileNav(props){
    const [btnList, setBtnList] = useState({profile: false , mh_list: false , meeting: true , barcode: false});

    const btnProfile = (e) => {
        setBtnList({profile: true , mh_list: false , meeting: false , barcode: false});
        props.setPage("profile");
        e.preventDefault();
        return;
    };
    const btnMHList = (e) => {
        setBtnList({profile: false , mh_list: true , meeting: false , barcode: false});
        props.setPage("mh_list");
        e.preventDefault();
        return;
    };
    const btnMeeting = (e) => {
        setBtnList({profile: false , mh_list: false , meeting: true , barcode: false});
        props.setPage("meeting");
        e.preventDefault();
        return;
    };
    const btnBarcode = (e) => {
        setBtnList({profile: false , mh_list: false , meeting: false , barcode: true});
        props.setPage("barcode");
        e.preventDefault();
        return;
    };
    return(
        <footer style={{width: "100%", position: "fixed", left: '0', bottom: '0', background: ""}}>
        <div style={{margin : "5px 8px 5px 8px"}} >
            <Stack>
                <ButtonGroup size="" className="mb-2">
                    <Button variant={btnList.profile ? props.color.color2 : props.color.color1} onClick={btnProfile} disabled={btnList.profile}> پروفایل </Button>
                    <Button variant={btnList.mh_list ? props.color.color2 : props.color.color1} onClick={btnMHList} disabled={btnList.mh_list}> اساتید</Button>
                    <Button variant={btnList.meeting ? props.color.color2 : props.color.color1} onClick={btnMeeting} disabled={btnList.meeting}> قرارهای من </Button>
                    <Button variant={btnList.barcode ? props.color.color2 : props.color.color1} onClick={btnBarcode} disabled={btnList.barcode}>اسکن</Button>
                </ButtonGroup>
            </Stack>
        </div>
        </footer>
    );
}

export default UserMobileNav;