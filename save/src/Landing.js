import React from "react";
import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';
import { loginAPI } from "./API";



function Landing(props){
    const f = (e)=>{
        let userName = localStorage.getItem("UserName");
        let pass = localStorage.getItem("Pass");
        let l = loginAPI(userName, pass, true);
        if(l.is_ssuccesfull && l.isStudent){
            props.setIsStudent(1);
            props.setlogIn(5);
            props.setUserNameApp(userName);
            props.setPassApp(pass);
        }else if(l.is_ssuccesfull){
            props.setIsStudent(0);
            props.setlogIn(5);
            props.setUserNameApp(userName);
            props.setPassApp(pass);
        }
        else{
            props.setlogIn(2);
        }
        e.preventDefault();
        return;
    }
    return(
        <div className="bgImageAut" style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}>
            <div>
                <Stack>
                    <h1>دانشگاه</h1>
                    <Button onClick={f} variant="primary" size="lg">شروع</Button>
                </Stack>
            </div>
        </div>
    );
}

export default Landing;



/*

*/