import $ from 'jquery'

function loginAPI(userName , pass , saveIt){
    //call api login
    let is_ssuccesfull = false;
    if(userName == 'abc', pass == '123'){
      is_ssuccesfull = true;
    }
    if(is_ssuccesfull && saveIt){
      localStorage.setItem("UserName",userName);
      localStorage.setItem("Pass", pass);
      return {is_ssuccesfull : true, isStudent : true};
    }else if(is_ssuccesfull){
      return {is_ssuccesfull : true, isStudent : true};
    }else{
      return {is_ssuccesfull : false, isStudent : true};
    }
  }

function userProfileAPI(userName, pass){

  //call api accont
  if(userName == 'abc', pass == '123'){
    return({first_name: "هادی", last_name: "هادی زاده", email:"ab@aut.ac.ir", degree: "19.5" , student_number:"9712000", mobile_number:"09120000000",
      field:"ریاضی و کاربردها", university: "دانشگاه صنعتی امیرکبیر", adviser: "دکتر هیلبرت", guider: "دکتر اردوش"});
  }
  return({eror:"eror"});
}

function userRegisterAPI(userName, pass){

  //call api accont
  if(userName == 'abc', pass == '123'){
    return({first_name: "هادی", last_name: "هادی زاده", email:"ab@aut.ac.ir", degree: "19.5" , student_number:"9712000", mobile_number:"09120000000",
      field:"ریاضی و کاربردها", university: "دانشگاه صنعتی امیرکبیر", adviser: "دکتر هیلبرت", guider: "دکتر اردوش"});
  }
  return({eror:"eror"});
}

function userMeetingAPI(userName, pass){
  const listMeetingPast = [
    {meeting_id: "1", MH_id: "p2@aut.ac.ir", user_id: "s@aut.ac.ir", start_time: "12", end_time: "13", date: "1/1/1", subject: "نظریه اعداد", description:"برسی اثبات حدث گلد باخ", was_holded: true},
    {meeting_id: "2", MH_id: "p1@aut.ac.ir", user_id: "s@aut.ac.ir", start_time: "12", end_time: "13", date: "1/1/3", subject: "آنالیز عددی", description:"برسی اثبات حدث گلد باخ", was_holded: true},
    {meeting_id: "3", MH_id: "p4@aut.ac.ir", user_id: "s@aut.ac.ir", start_time: "12", end_time: "13", date: "1/1/6", subject: "جبر", description:"برسی اثبات حدث گلد باخ", was_holded: true},
    {meeting_id: "4", MH_id: "p3@aut.ac.ir", user_id: "s@aut.ac.ir", start_time: "14", end_time: "15", date: "1/1/8", subject: "هندسه", description:"برسی اثبات حدث گلد باخ", was_holded: true},
    {meeting_id: "5", MH_id: "p2@aut.ac.ir", user_id: "s@aut.ac.ir", start_time: "16", end_time: "17", date: "1/1/8", subject: "نظریه اعداد", description:"برسی اثبات حدث گلد باخ", was_holded: true},
    {meeting_id: "6", MH_id: "p2@aut.ac.ir", user_id: "s@aut.ac.ir", start_time: "10", end_time: "11", date: "1/1/8", subject: "نظریه اعداد", description:"برسی اثبات حدث گلد باخ", was_holded: true}
  ];
  const listMeetingToDay = [
    {meeting_id: "10", MH_id: "abc@gmail.com", user_id: "s@aut.ac.ir", start_time: "14", end_time: "15", date: "1401/10/10", subject: "نظریه اعداد", description:"برسی اثبات حدث گلد باخ", was_holded: true},
    {meeting_id: "20", MH_id: "def@gmai.com", user_id: "s@aut.ac.ir", start_time: "8", end_time: "9", date: "1401/10/10", subject: "آنالیز عددی", description:"برسی سیستم های دینامیکی پیوسته", was_holded: true},
    ];
  const listMeetingFuture = [
    {meeting_id: "100", MH_id: "p1@aut.ac.ir", user_id: "s@aut.ac.ir", start_time: "12", end_time: "13", date: "1/1/12", subject: "نظریه اعداد", description:"برسی اثبات حدث گلد باخ", was_holded: false},
    {meeting_id: "200", MH_id: "p1@aut.ac.ir", user_id: "s@aut.ac.ir", start_time: "17", end_time: "18", date: "1/1/16", subject: "آنالیز عددی", description:"برسی اثبات حدث گلد باخ", was_holded: false},
    {meeting_id: "300", MH_id: "p3@aut.ac.ir", user_id: "s@aut.ac.ir", start_time: "12", end_time: "13", date: "1/1/11", subject: "جبر", description:"برسی اثبات حدث گلد باخ", was_holded: false},
    {meeting_id: "400", MH_id: "p1@aut.ac.ir", user_id: "s@aut.ac.ir", start_time: "10", end_time: "11", date: "1/1/17", subject: "هندسه", description:"برسی اثبات حدث گلد باخ", was_holded: false},
    {meeting_id: "500", MH_id: "p4@aut.ac.ir", user_id: "s@aut.ac.ir", start_time: "12", end_time: "13", date: "1/1/16", subject: "نظریه اعداد", description:"برسی اثبات حدث گلد باخ", was_holded: false},
    {meeting_id: "600", MH_id: "p5@aut.ac.ir", user_id: "s@aut.ac.ir", start_time: "15", end_time: "16", date: "1/1/12", subject: "نظریه اعداد", description:"برسی اثبات حدث گلد باخ", was_holded: false}
  ];
  if(userName == "abc", pass == "123"){
    return {listMeetingPast: [...listMeetingPast], listMeetingToDay: [...listMeetingToDay], listMeetingFuture: [...listMeetingFuture]};
  }
  return {listMeetingPast: [], listMeetingToDay: [], listMeetingFuture: []};
}

function MHListAPI(userName, pass){
  
  if(userName == "abc", pass == "123"){
    return[{mh_id: "101", first_name: "جان", last_name: "نش", MH_email: "nash@gmail.com", Teacher_number: "110120", degree: "استادیار", field: "Applied Mathematics", link_to_webpage: "www.nash.com"}
          ,{mh_id: "202", first_name: "برنهارت", last_name: "ریمان", MH_email: "rieman@gmail.com", Teacher_number: "1101030", degree: "دانشیار", field: "Statistics", link_to_webpage: "www.en.com"}
          ,{mh_id: "303", first_name: "کورت", last_name: "گودل", MH_email: "godel@gmail.com", Teacher_number: "1101040", degree: "استاد", field: "Pure Mathematics", link_to_webpage: "www.godel.com"}
          ,{mh_id: "404", first_name: "کارل فردریش", last_name: "گاوس", MH_email: "go@gmail.com", Teacher_number: "1101050", degree: "استاد", field: "Pure Mathematics", link_to_webpage: "www.go.com"}
          ,{mh_id: "505", first_name: "آلن", last_name: "تورینگ", MH_email: "go@gmail.com", Teacher_number: "1101050", degree: "استاد", field: "Computer science", link_to_webpage: "www.go.com"}
        ];
  }
  else{
    return [];
  }
}

function TimeToNum(time){
  return 4 * Number(time.substring(0, 2)) + Number(time.substring(3)) / 15;
}

function MHFreeTimeListAPIHelp(rawTimeList){
  const time = [];
  let i = 0;
  for(i = 0 ; i < 96 ; i++){
    time.push("full");
  }
  rawTimeList.forEach((data)=>{
    let j = 0;
    for(j = TimeToNum(data.start_time) ; j < TimeToNum(data.end_time) ; j++){
      time[j] = "free";
    }
  })
  return [...time];
}

function MHFreeTimeListAPI(userName, pass, mh_id){
  if(userName == "abc", pass == "123"){
    const rawList = {
      start_day: [{date: "12/08/2022", meetings: [{start_time: "07:30", end_time: "09:30"}, {start_time: "10:30", end_time: "13:30"}, {start_time: "17:30", end_time: "18:30"}]}],
      day1: [{date: "13/08/2022", meetings: [{start_time: "11:30", end_time: "13:30"}, {start_time: "17:30", end_time: "18:30"}]}],
      day2: [{date: "14/08/2022", meetings: [{start_time: "12:30", end_time: "13:30"}, {start_time: "17:30", end_time: "18:30"}]}],
      day3: [{date: "15/08/2022", meetings: [{start_time: "13:30", end_time: "19:30"}, {start_time: "17:30", end_time: "18:30"}]}],
      day4: [{date: "16/08/2022", meetings: [{start_time: "14:30", end_time: "19:30"}, {start_time: "17:30", end_time: "18:30"}]}],
      day5: [{date: "17/08/2022", meetings: [{start_time: "15:30", end_time: "19:30"}, {start_time: "17:30", end_time: "18:30"}]}],
      day6: [{date: "18/08/2022", meetings: [{start_time: "16:30", end_time: "10:30"}, {start_time: "17:30", end_time: "18:30"}]}]
    }
    //return MHFreeTimeListAPIHelp(rawList.start_day[0].meetings);

    return [
      {date: rawList.start_day[0].date , meetings: MHFreeTimeListAPIHelp(rawList.start_day[0].meetings)},
      {date: rawList.day1[0].date , meetings: MHFreeTimeListAPIHelp(rawList.day1[0].meetings)},
      {date: rawList.day2[0].date , meetings: MHFreeTimeListAPIHelp(rawList.day2[0].meetings)},
      {date: rawList.day3[0].date , meetings: MHFreeTimeListAPIHelp(rawList.day3[0].meetings)},
      {date: rawList.day4[0].date , meetings: MHFreeTimeListAPIHelp(rawList.day4[0].meetings)},
      {date: rawList.day5[0].date , meetings: MHFreeTimeListAPIHelp(rawList.day5[0].meetings)},
      {date: rawList.day6[0].date , meetings: MHFreeTimeListAPIHelp(rawList.day6[0].meetings)}
    ]
  }
  return {};
}

export {loginAPI, userProfileAPI, userRegisterAPI, userMeetingAPI, MHListAPI, MHFreeTimeListAPI};


/*
{meeting_id: "30", MH_id: "p1@aut.ac.ir", user_id: "s@aut.ac.ir", start_time: "19", end_time: "20", date: "1/1/10", subject: "جبر", description:"برسی اثبات حدث گلد باخ", was_holded: true},
    {meeting_id: "40", MH_id: "p2@aut.ac.ir", user_id: "s@aut.ac.ir", start_time: "10", end_time: "11", date: "1/1/10", subject: "هندسه", description:"برسی اثبات حدث گلد باخ", was_holded: false},
    {meeting_id: "50", MH_id: "p1@aut.ac.ir", user_id: "s@aut.ac.ir", start_time: "12", end_time: "13", date: "1/1/10", subject: "نظریه اعداد", description:"برسی اثبات حدث گلد باخ", was_holded: false},
    {meeting_id: "60", MH_id: "p3@aut.ac.ir", user_id: "s@aut.ac.ir", start_time: "20", end_time: "21", date: "1/1/10", subject: "نظریه اعداد", description:"برسی اثبات حدث گلد باخ", was_holded: false}
  


    $.ajax({
		url: "https://api1.iran.liara.run/api",
		type: "GET",
		async: true,
		crossDomain: true,
		data: JSON.stringify({image: imageURL, id:id}),
		contentType:"application/json",
		success: function(res) {
			res = JSON.parse(res)
			
			res['error_string']
		},
		error: (er)=> {console.log('nok1', er)}
	})
  import $ from 'jquery'

  https://bia2django.iran.liara.run/api/
*/