import React from "react";
import {BrowserView, MobileView} from 'react-device-detect';
import AppUserMobile from "./userMobile/AppUserMobile";
import AppUserBrowser from "./userBrowser/AppUserBrowser"

function AppU(props){
    return(
        <div>
            <BrowserView>
                <AppUserBrowser userNameApp={props.userNameApp} passApp={props.passApp}/>
            </BrowserView>

            <MobileView>
                <AppUserMobile userNameApp={props.userNameApp} passApp={props.passApp} />
            </MobileView>
        </div>
    );
}

export default AppU;