import React from "react";
import {useState} from "react";
import UserBrowserNav from "./UserBrowserNav"
import UserMeetingBrowser from "./UserMeetingBrowser";
import UserProfileBrowser from "./UserProfileBrowser";
import UserBarcodeBrowser from "./UserBarcodeBrowser";
import UserMeetingInfoBrowser from "./UserMeetingInfoBrowser";
import UserProfileEditBrowser from "./UserProfileEditBrowser";
import UserMHListBrowser from "./UserMHListBrowser";
import UserReserveBrowser from "./UserReserveBrowser"
import UserConfirmBrowser from "./UserConfirmBrowser";


function AppUserBrowserHelp(props){
    if(props.page == "meeting"){
        return(
            <div>
                <UserMeetingBrowser userNameApp={props.userNameApp} passApp={props.passApp} 
                color={props.color}/>
            </div>
        );
    }else if(props.page == "profile"){
        return(
            <div>
                <UserProfileBrowser userNameApp={props.userNameApp} passApp={props.passApp} page={props.page} setPage={props.setPage} 
                color={props.color} setColor={props.setColor}/>
            </div>
        );
    }else if(props.page == "barcode"){
        return(
            <div>
                <UserBarcodeBrowser userNameApp={props.userNameApp} passApp={props.passApp} page={props.page} setPage={props.setPage}
                color={props.color} MHApp={props.MHApp} setMHApp={props.setMHApp} />
            </div>
        );
    }else if(props.page == "meeting_info"){
        return(
            <div>
                <UserMeetingInfoBrowser userNameApp={props.userNameApp} passApp={props.passApp} page={props.page} setPage={props.setPage}
                color={props.color}/>
            </div>
        );
    }else if(props.page == "profile_edit"){
        return(
            <div>
                <UserProfileEditBrowser userNameApp={props.userNameApp} passApp={props.passApp} page={props.page} setPage={props.setPage}
                color={props.color}/>
            </div>
        );
    }else if(props.page == "mh_list"){
        return(
            <div>
                <UserMHListBrowser userNameApp={props.userNameApp} passApp={props.passApp} page={props.page} setPage={props.setPage}
                color={props.color} MHApp={props.MHApp} setMHApp={props.setMHApp} />
            </div>
        );
    }else if(props.page == "reserve"){
        return(
            <div>
                <UserReserveBrowser userNameApp={props.userNameApp} passApp={props.passApp} page={props.page} setPage={props.setPage}
                color={props.color} MHApp={props.MHApp} setMHApp={props.setMHApp} />
            </div>
        );
    }else if(props.page == "confirm"){
        return(
            <div>
                <UserConfirmBrowser userNameApp={props.userNameApp} passApp={props.passApp} page={props.page} setPage={props.setPage} 
                color1={props.color} setColor1={props.setColor}/>
            </div>
        );
    }
    return(<div></div>);
}


// page : meeting profile barcode meeting_info profile_edit mh_list reserve confirm
function AppUserBrowser(props){
    const [page, setPage] = useState("meeting");
    const [color, setColor] = useState({color1: "dark", color2: "outline-dark", back: ""});
    const [MHApp, setMHApp] = useState("123");


    return(
        <div style={{backgroundColor: color.back}}>
            <UserBrowserNav page={page} setPage={setPage} color={color}/>
            <AppUserBrowserHelp userNameApp={props.userNameApp} passApp={props.passApp} 
                setUserNameApp={props.setUserNameApp} setPassApp={props.setPassApp} page={page} setPage={setPage} 
                color={color} setColor={setColor} MHApp={MHApp} setMHApp={setMHApp}/>
        </div>
    );
}

export default AppUserBrowser;