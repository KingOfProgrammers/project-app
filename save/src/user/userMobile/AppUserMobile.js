import React from "react";
import {useState} from "react";
import UserMobileNav from "./UserMobileNav"
import UserMeetingMobile from "./UserMeetingMobile";
import UserProfileMobile from "./UserProfileMobile";
import UserBarcodeMobile from "./UserBarcodeMobile";
import UserMeetingInfoMobile from "./UserMeetingInfoMobile";
import UserProfileEditMobile from "./UserProfileEditMobile";
import UserMHListMobile from "./UserMHListMobile";
import UserReserveMobile from "./UserReserveMobile"
import UserConfirmMobile from "./UserConfirmMobile";

// page : meeting profile barcode meeting_info profile_edit mh_list reserve confirm

function AppUserMobileHelp(props){
    if(props.page == "meeting"){
        return(
            <div>
                <UserMeetingMobile userNameApp={props.userNameApp} passApp={props.passApp} 
                color={props.color}/>
            </div>
        );
    }else if(props.page == "profile"){
        return(
            <div>
                <UserProfileMobile userNameApp={props.userNameApp} passApp={props.passApp} page={props.page} setPage={props.setPage} 
                color={props.color} setColor={props.setColor}/>
            </div>
        );
    }else if(props.page == "barcode"){
        return(
            <div>
                <UserBarcodeMobile userNameApp={props.userNameApp} passApp={props.passApp} page={props.page} setPage={props.setPage}
                color={props.color} MHApp={props.MHApp} setMHApp={props.setMHApp} />
            </div>
        );
    }else if(props.page == "meeting_info"){
        return(
            <div>
                <UserMeetingInfoMobile userNameApp={props.userNameApp} passApp={props.passApp} page={props.page} setPage={props.setPage}
                color={props.color}/>
            </div>
        );
    }else if(props.page == "profile_edit"){
        return(
            <div>
                <UserProfileEditMobile userNameApp={props.userNameApp} passApp={props.passApp} page={props.page} setPage={props.setPage}
                color={props.color}/>
            </div>
        );
    }else if(props.page == "mh_list"){
        return(
            <div>
                <UserMHListMobile userNameApp={props.userNameApp} passApp={props.passApp} page={props.page} setPage={props.setPage}
                color={props.color} MHApp={props.MHApp} setMHApp={props.setMHApp} />
            </div>
        );
    }else if(props.page == "reserve"){
        return(
            <div>
                <UserReserveMobile userNameApp={props.userNameApp} passApp={props.passApp} page={props.page} setPage={props.setPage}
                color={props.color} MHApp={props.MHApp} setMHApp={props.setMHApp} />
            </div>
        );
    }else if(props.page == "confirm"){
        return(
            <div>
                <UserConfirmMobile userNameApp={props.userNameApp} passApp={props.passApp} page={props.page} setPage={props.setPage} 
                color1={props.color} setColor1={props.setColor}/>
            </div>
        );
    }
    return(<div></div>);
}

function AppUserMobile(props){
    const [page, setPage] = useState("meeting");
    const [color, setColor] = useState({color1: "dark", color2: "outline-dark", back: ""});
    const [MHApp, setMHApp] = useState("");

    return(
        <div>
            <AppUserMobileHelp userNameApp={props.userNameApp} passApp={props.passApp} 
                setUserNameApp={props.setUserNameApp} setPassApp={props.setPassApp} page={page} setPage={setPage} 
                color={color} setColor={setColor} MHApp={MHApp} setMHApp={setMHApp}/>
            <UserMobileNav page={page} setPage={setPage} color={color}/>
        </div>
    );
}

export default AppUserMobile;


/*
{color1: "success", color2: "outline-success", back: ""}
{color1: "warning", color2: "outline-warning", back: ""}
{color1: "info", color2: "outline-info", back: ""}
{color1: "secondary", color2: "outline-secondary", back: ""}
{color1: "dark", color2: "outline-dark", back: ""}
*/