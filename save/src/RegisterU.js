import React from "react";
import {useState} from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Stack from 'react-bootstrap/Stack';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import {BrowserView, MobileView} from 'react-device-detect';
import Container from 'react-bootstrap/Container';
import { userRegisterAPI } from "./API";

function RegisterU(props){
    const [firstName , setFirstName] = useState("");
    const [lastName , setLastName] = useState("");
    const [phone , setPhone] = useState("");
    const [userName , setUserName] = useState("");
    const [studentNum , setStudentNum] = useState("");
    const [field , setField] = useState("");
    const [degree , setDegree] = useState("");
    const [university , setUniversity] = useState("");
    const [adviser , setAdviser] = useState("");
    const [guider , setGuider] = useState("");
    const [pass1 , setPass1] = useState("");
    const [pass2 , setPass2] = useState("");
    const [saveIt , setSaveIt] = useState(false);

    return(
        <div dir="rtl" style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}>
            <MobileView>
            <Card style={{ width: '23rem' , margin : "400px 30px 30px 30px"}}>
            <Form style={{margin : "30px 30px 30px 30px"}}>
                <Form.Group className="mb-3">
                    <Form.Label>مشخصات فردی</Form.Label>
                    <FloatingLabel label="نام" >
                        <Form.Control type="text" placeholder="" onChange={(event) => {setFirstName(event.target.value);}} value={firstName}/>
                    </FloatingLabel>
                    <FloatingLabel label="نام خانوادگی" >
                        <Form.Control type="text" placeholder="" onChange={(event) => {setLastName(event.target.value);}} value={lastName}/>
                    </FloatingLabel>
                    <FloatingLabel label="شماره تلفن همراه" >
                        <Form.Control type="text" placeholder="" onChange={(event) => {setPhone(event.target.value);}} value={phone}/>
                    </FloatingLabel>
                    <FloatingLabel label="ایمیل" >
                        <Form.Control type="email" placeholder="name@example.com" onChange={(event) => {setUserName(event.target.value);}} value={userName}/>
                    </FloatingLabel>
                    <Form.Text className="text-muted">
                        لطفا ایمیل دانشگاهی خود را وارد کنید.
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>مشخصات دانشگاهی</Form.Label>
                    <FloatingLabel label="شماره دانشجویی" >
                        <Form.Control type="text" placeholder="" onChange={(event) => {setStudentNum(event.target.value);}} value={studentNum}/>
                    </FloatingLabel>
                    <FloatingLabel label="دانشگاه">
                        <Form.Select aria-label="Floating label select example">
                            <option onClick={()=>{setUniversity("")}}>انتخاب کنید</option>
                            <option value="1" onClick={()=>{setUniversity("AUT")}}>دانشگاه صنعتی امیر کبیر</option>
                        </Form.Select>
                    </FloatingLabel>
                    <FloatingLabel label="گرایش" >
                        <Form.Control type="email" placeholder="name@example.com" onChange={(event) => {setField(event.target.value);}} value={field}/>
                    </FloatingLabel>
                    <FloatingLabel label="ایمیل دانشگاهی استاد مشاور" >
                        <Form.Control type="email" placeholder="name@example.com" onChange={(event) => {setAdviser(event.target.value);}} value={adviser}/>
                    </FloatingLabel>
                    <FloatingLabel label="ایمیل دانشگاهی استاد راهنما" >
                        <Form.Control type="email" placeholder="name@example.com" onChange={(event) => {setGuider(event.target.value);}} value={guider}/>
                    </FloatingLabel>
                    <FloatingLabel label="دانشگاه">
                        <Form.Select aria-label="Floating label select example">
                            <option onClick={()=>{setDegree("")}}>انتخاب کنید</option>
                            <option value="1" onClick={()=>{setDegree("BA")}}>کارشناسی</option>
                            <option value="2" onClick={()=>{setDegree("MA")}}>کارشناسی ارشد</option>
                            <option value="3" onClick={()=>{setDegree("DR")}}>دکتری</option>
                        </Form.Select>
                    </FloatingLabel>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>رمز عبور</Form.Label>
                    <FloatingLabel label="رمز عبور" >
                        <Form.Control type="password" placeholder="name@example.com" onChange={(event) => {setPass1(event.target.value);}} value={pass1}/>
                    </FloatingLabel>
                    <FloatingLabel label="تکرار رمز عبور" >
                        <Form.Control type="password" placeholder="name@example.com" onChange={(event) => {setPass2(event.target.value);}} value={pass2}/>
                    </FloatingLabel>
                    <Form.Check type="checkbox" label="مرا به خاطر بسپار" checked={saveIt} onClick={()=>{setSaveIt(!saveIt);}}/>
                </Form.Group>
                
                <Stack gap={2} className="col-md-5 mx-auto">
                    <Button variant="primary" type="submit">
                        ثبت نام
                    </Button>
                    <Button variant="outline-primary" type="submit" onClick={(e)=>{props.setlogIn(2); e.preventDefault();}}>
                        بازگشت به ورود
                    </Button>
                </Stack>
            </Form>
            </Card>
            </MobileView>

            <BrowserView>
                <Card style={{ width: '60rem' , margin : "3px 30px 30px 30px"}}>
                <Container>
                    <Row>
                        <Col>
                            <Form style={{ margin : "30px 30px 30px 30px"}}>
                            <Form.Group className="mb-3">
                                <Form.Label>مشخصات فردی</Form.Label>
                                <FloatingLabel label="نام" >
                                    <Form.Control type="text" placeholder="name@example.com" onChange={(event) => {setFirstName(event.target.value);}} value={firstName}/>
                                </FloatingLabel>
                                <FloatingLabel label="نام خانوادگی" >
                                    <Form.Control type="text" placeholder="name@example.com" onChange={(event) => {setLastName(event.target.value);}} value={lastName}/>
                                </FloatingLabel>
                                <FloatingLabel label="شماره تلفن همراه" >
                                    <Form.Control type="text" placeholder="name@example.com" onChange={(event) => {setPhone(event.target.value);}} value={phone}/>
                                </FloatingLabel>
                                <FloatingLabel label="ایمیل" >
                                    <Form.Control type="email" placeholder="name@example.com" onChange={(event) => {setUserName(event.target.value);}} value={userName}/>
                                </FloatingLabel>
                                <Form.Text className="text-muted">
                                    لطفا ایمیل دانشگاهی خود را وارد کنید.
                                </Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>رمز عبور</Form.Label>
                                    <FloatingLabel label="رمز عبور" >
                                        <Form.Control type="password" placeholder="name@example.com" onChange={(event) => {setPass1(event.target.value);}} value={pass1}/>
                                    </FloatingLabel>
                                    <FloatingLabel label="تکرار رمز عبور" >
                                        <Form.Control type="password" placeholder="name@example.com" onChange={(event) => {setPass2(event.target.value);}} value={pass2}/>
                                    </FloatingLabel>
                                </Form.Group>
                            </Form>
                        </Col>
                        <Col>
                            <Form style={{margin : "30px 30px 30px 30px"}}>
                                <Form.Group className="mb-3">
                                    <Form.Label>مشخصات دانشگاهی</Form.Label>
                                    <FloatingLabel label="شماره دانشجویی" >
                                        <Form.Control type="text" placeholder="name@example.com" onChange={(event) => {setStudentNum(event.target.value);}} value={studentNum}/>
                                    </FloatingLabel>
                                    <FloatingLabel label="دانشگاه">
                                        <Form.Select aria-label="Floating label select example">
                                            <option>انتخاب کنید</option>
                                            <option value="1">دانشگاه صنعتی امیر کبیر</option>
                                        </Form.Select>
                                    </FloatingLabel>
                                    <FloatingLabel label="گرایش" >
                                        <Form.Control type="email" placeholder="name@example.com" onChange={(event) => {setField(event.target.value);}} value={field}/>
                                    </FloatingLabel>
                                    <FloatingLabel label="ایمیل دانشگاهی استاد مشاور" >
                                        <Form.Control type="email" placeholder="name@example.com" onChange={(event) => {setAdviser(event.target.value);}} value={adviser}/>
                                    </FloatingLabel>
                                    <FloatingLabel label="ایمیل دانشگاهی استاد راهنما" >
                                        <Form.Control type="email" placeholder="name@example.com" onChange={(event) => {setGuider(event.target.value);}} value={guider}/>
                                    </FloatingLabel>
                                    <FloatingLabel label="دانشگاه">
                                        <Form.Select aria-label="Floating label select example">
                                            <option onClick={()=>{setDegree("")}}>انتخاب کنید</option>
                                            <option value="1" onClick={()=>{setDegree("BA")}}>کارشناسی</option>
                                            <option value="2" onClick={()=>{setDegree("MA")}}>کارشناسی ارشد</option>
                                            <option value="3" onClick={()=>{setDegree("DR")}}>دکتری</option>
                                        </Form.Select>
                                    </FloatingLabel>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Check type="checkbox" label="مرا به خاطر بسپار" checked={saveIt} onClick={()=>{setSaveIt(!saveIt);}}/>
                                </Form.Group>
                            </Form>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Stack gap={2} className="col-md-5 mx-auto">
                                <Button variant="primary" type="submit">
                                    ثبت نام
                                </Button>
                                <Button variant="outline-primary" type="submit" onClick={(e)=>{props.setlogIn(2); e.preventDefault();}}>
                                    بازگشت به ورود
                                </Button>
                            </Stack>
                        </Col>
                    </Row>
                </Container>
            </Card>
            </BrowserView>
        </div>
    );
}

export default RegisterU;


/*

<FloatingLabel label="ایمیل" >
                        <Form.Control type="email" placeholder="name@example.com" />
                    </FloatingLabel>
<select class="form-select" aria-label="Default select example">
  <option selected>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>

<Form.Group className="mb-3">
                    
                    <Form.Label>نام</Form.Label>
                    <Form.Control type="text" placeholder="نام خود را وارد کنید." />
                    <Form.Label>نام خانوادگی</Form.Label>
                    <Form.Control type="text" placeholder="نام خانوانگی خود را وارد کنید." />
                    <Form.Label>شماره تلفن</Form.Label>
                    <Form.Control type="text" placeholder="شماره تلفن خود را وارد کنید." />
                    <Form.Label>ایمیل</Form.Label>
                    <Form.Control type="email" placeholder="ایمیل خود را وارد کنید." />
                    <Form.Text className="text-muted">
                        لطفا ایمیل دانشگاهی خود را وارد کنید.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>شماره دانشجویی</Form.Label>
                    <Form.Control type="text" placeholder="شماره دانشجویی خود را وارد کنید." />
                    <Form.Label>رشته</Form.Label>
                    <Form.Control type="text" placeholder="رشته خود را وارد کنید." />
                    <Form.Label>مقطع</Form.Label>
                    <Form.Control type="text" placeholder="" />
                    <Form.Label>دانشگاه</Form.Label>
                    <Form.Control type="email" placeholder="دانشگاه خود را وارد کنید." />
                    <Form.Label>استاد راهنما</Form.Label>
                    <Form.Control type="email" placeholder="ایمیل دانشگاهی استاد راهنما" />
                    <Form.Label>استادمشاور</Form.Label>
                    <Form.Control type="email" placeholder="ایمیل دانشگاهی استاد مشاور" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>رمز عبور</Form.Label>
                    <Form.Control type="password" placeholder="رمز عبور" />
                    <Form.Control type="password" placeholder="تکرار رمز عبور" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="مرا به خاطر بسپار" />
                </Form.Group>
*/