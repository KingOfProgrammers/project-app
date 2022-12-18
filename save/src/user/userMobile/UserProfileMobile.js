import React from "react";
import { useState } from 'react';
import {userProfileAPI} from "../../API"
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';



function UserProfileMobile(props){
    const info = userProfileAPI(props.userNameApp, props.passApp);
    console.log(info);

    const btnEdit = (e) => {
        props.setPage("profile_edit");
        e.preventDefault();
        return;
    };

    const btnExit = (e) => {
        localStorage.setItem("UserName","");
        localStorage.setItem("Pass","");
        window.location.reload();
    };

    return(
        <div style={{margin : "20px 8px 5px 8px"}} dir="rtl">
            <Stack className="col-md-5 mx-auto">
            <Card className="mx-auto">
                <Card.Body>
                    <Card.Title className="text-center" >{info.first_name} {info.last_name}</Card.Title>
                    <Card.Text className="text-center">
                        {info.email}
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item >شماره دانشجویی: {info.student_number}</ListGroup.Item>
                    <ListGroup.Item >شماره تلفن: {info.mobile_number}</ListGroup.Item>
                    <ListGroup.Item >مقطع: {info.degree}</ListGroup.Item>
                    <ListGroup.Item >رشته: {info.field}</ListGroup.Item>
                    <ListGroup.Item >دانشگاه: {info.university}</ListGroup.Item>
                    <ListGroup.Item >استاد مشاور: {info.adviser}</ListGroup.Item>
                    <ListGroup.Item >استاد راهنما: {info.guider}</ListGroup.Item>
                </ListGroup>
                <Card.Body>
                    <Stack gap={2} className="col-md-5 mx-auto">
                        <Button variant={props.color.color1} onClick={btnEdit}>تغییر</Button>
                        <Button variant={props.color.color2} onClick={btnExit}>خروج</Button>
                    </Stack>
                </Card.Body>
            </Card>
            </Stack>
        </div>
    );
}

export default UserProfileMobile;