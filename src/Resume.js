
import React,{useState} from "react";
import { useNavigate } from "react-router-dom";



function Resume(){
    const navigate =useNavigate();
    const [index,setIndex]=useState(0);
    const [title,setTitle]=useState("");
    const handletitle = event => {
        setTitle(event.target.value);
    }
    const [name,setName]=useState("");
    const handlename = event => {
        setName(event.target.value);
    }
    const [experiences,setExperience]=useState([]);
    const handleexppos = (event,ind) =>{
        let exprnc = experiences[ind];
        exprnc.position=event.target.value;
        let bef = experiences.slice(0,ind);
        let aft = experiences.slice(ind+1,experiences.length);
        let newexps = [...bef,exprnc,...aft];
        setExperience(newexps);
    }
    const handleexpstart = (event,ind) =>{
        let exprnc = experiences[ind];
        exprnc.startdate=event.target.value;
        let bef = experiences.slice(0,ind);
        let aft = experiences.slice(ind+1,experiences.length);
        let newexps = [...bef,exprnc,...aft];
        setExperience(newexps);
    }
    const handleexpend = (event,ind) =>{
        let exprnc = experiences[ind];
        exprnc.enddate=event.target.value;
        let bef = experiences.slice(0,ind);
        let aft = experiences.slice(ind+1,experiences.length);
        let newexps = [...bef,exprnc,...aft];
        setExperience(newexps);
    }
    const handleexpcomp = (event,ind) =>{
        let exprnc = experiences[ind];
        exprnc.compname=event.target.value;
        let bef = experiences.slice(0,ind);
        let aft = experiences.slice(ind+1,experiences.length);
        let newexps = [...bef,exprnc,...aft];
        setExperience(newexps);
    }
    const handleexpdet = (event,ind) =>{
        let exprnc = experiences[ind];
        exprnc.details=event.target.value;
        let bef = experiences.slice(0,ind);
        let aft = experiences.slice(ind+1,experiences.length);
        let newexps = [...bef,exprnc,...aft];
        setExperience(newexps);
    }
    const handledelexp= (event,ind) =>{
        let bef = experiences.slice(0,ind);
        let aft = experiences.slice(ind+1,experiences.length);
        let newexps = [...bef,...aft];
        setExperience(newexps);
    }
    const [education,setEducation]=useState([]);
    const handleeduschool = (event,ind) =>{
        let edctn = education[ind];
        edctn.school=event.target.value;
        let bef = education.slice(0,ind);
        let aft = education.slice(ind+1,experiences.length);
        let newexps = [...bef,edctn,...aft];
        setEducation(newexps);
    }
    const handleedustart = (event,ind) =>{
        let edctn = education[ind];
        edctn.startdate=event.target.value;
        let bef = education.slice(0,ind);
        let aft = education.slice(ind+1,experiences.length);
        let newexps = [...bef,edctn,...aft];
        setEducation(newexps);
    }
    const handleeduend = (event,ind) =>{
        let edctn = education[ind];
        edctn.enddate=event.target.value;
        let bef = education.slice(0,ind);
        let aft = education.slice(ind+1,experiences.length);
        let newexps = [...bef,edctn,...aft];
        setEducation(newexps);
    }
    const handleedudetails = (event,ind) =>{
        let edctn = education[ind];
        edctn.details=event.target.value;
        let bef = education.slice(0,ind);
        let aft = education.slice(ind+1,experiences.length);
        let newexps = [...bef,edctn,...aft];
        setEducation(newexps);
    }
    const handledeledu = (event,ind) =>{
        let bef = education.slice(0,ind);
        let aft = education.slice(ind+1,experiences.length);
        let newexps = [...bef,...aft];
        setEducation(newexps);
    }
    const [contact,setContact]=useState({tel:"",address:"",email:""});
    const handlecontacttel = event => {
        let newcont = {tel:event.target.value,address:contact.address,email:contact.email}
        setContact(newcont);
    }
    const handlecontactadd = event => {
        let newcont = {tel:contact.tel,address:event.target.value,email:contact.email}
        setContact(newcont);
    }
    const handlecontactem = event => {
        let newcont = {tel:contact.tel,address:contact.address,email:event.target.value}
        setContact(newcont);
    }
    const [summary,setSummary]=useState("");
    const handlesummary = event =>{
        setSummary(event.target.value);
    }
    const [skills,setSkills]=useState([]);
    const handleskill = (event,ind) =>{
        let skill = skills[ind];
        skill=event.target.value;
        let bef = skills.slice(0,ind);
        let aft = skills.slice(ind+1,skills.length);
        let newexps = [...bef,skill,...aft];
        setSkills(newexps);
    }
    const handledelskill = (event,ind) =>{
        let bef = skills.slice(0,ind);
        let aft = skills.slice(ind+1,skills.length);
        let newexps = [...bef,...aft];
        setSkills(newexps);
    }
    let pages=[(<><h2>What is your name ?</h2>
    <input className="inputfield" onChange={handlename} type="text" value={name}></input>
    </>),(<><h2>What is your Title ?</h2>
    <input className="inputfield" onChange={handletitle} type="text" value={title}></input>
    </>),
    (<><h2>Add Experience</h2>
    <button className="addbutton" onClick={()=>{setExperience([...experiences,{position:"",compname:"",startdate:"",enddate:"",details:""}])}}>+</button>
    <div className="contentshower">{experiences.map(function(exp,index){
            return(
                <>
                <details className="det">
                    <summary>{exp.position}</summary>
                    <input className="inputfield" type="text" placeholder="Position" onChange={event => handleexppos(event,index)} value={exp.position}></input>
                    <input className="inputfield" type="text" placeholder="Company name" onChange={event => handleexpcomp(event,index)} value={exp.compname}></input>
                    <div style={{display:'flex'}}><input className="smallinputfield" placeholder="start" type="text" onChange={event => handleexpstart(event,index)} value={exp.startdate}></input>&nbsp;&nbsp;&nbsp;-&nbsp;<input className="smallinputfield" placeholder="end" type="text" onChange={event => handleexpend(event,index)} value={exp.enddate}></input></div>
                    <input className="inputfield" type="text" placeholder="Details" onChange={event => handleexpdet(event,index)} value={exp.details}></input>
                    <button className="delbut" onClick={event=> handledelexp(event,index)}>x</button>
                </details>
                </>
            );
    })}</div>
    </>),
    (<><h2>Add Education</h2>
    <button className="addbutton" onClick={()=>{setEducation([...education,{school:"",startdate:"",enddate:"",details:""}])}}>+</button>
    <div className="contentshower">{education.map(function(schl,index){
            return(
                <>
                <details className="det">
                    <summary>{schl.school}</summary>
                    <input className="inputfield" type="text" placeholder="Institution name" onChange={event => handleeduschool(event,index)} value={schl.school}></input>
                    <div style={{display:'flex'}}><input className="smallinputfield" placeholder="start" type="text" onChange={event => handleedustart(event,index)} value={schl.startdate}></input>&nbsp;&nbsp;&nbsp;-&nbsp;<input className="smallinputfield" placeholder="end" type="text" onChange={event => handleeduend(event,index)} value={schl.enddate}></input></div>
                    <input className="inputfield" type="text" placeholder="Details" onChange={event => handleedudetails(event,index)} value={schl.details}></input>
                    <button className="delbut" onClick={event=> handledeledu(event,index)}>x</button>
                </details>
                </>
            );
    })}</div>
    </>),(<>
    <h2>Add Contact info</h2>
    <input className="inputfield" placeholder="mobile number" onChange={handlecontacttel} type="number" value={contact.tel}></input>
    <input className="inputfield" placeholder="address" onChange={handlecontactadd} type="text" value={contact.address}></input>
    <input className="inputfield" placeholder="email" onChange={handlecontactem} type="text" value={contact.email}></input>
    </>),(<>
    <h2>Write a summary about yourself</h2>
    <textarea className="biginputfield" onChange={handlesummary} type="text" value={summary}></textarea>
    </>),
    (<><h2>Add Skills</h2>
    <button className="addbutton" onClick={()=>{setSkills([...skills,""])}}>+</button>
    <div className="contentshower">{skills.map(function(skl,index){
            return(
                <>
                    <input className="inputfield" type="text" placeholder="Write the skill" onChange={event => handleskill(event,index)} value={skills[index]}></input>
                    <button className="delbut" onClick={event=> handledelskill(event,index)}>x</button>
                </>
            );
    })}</div>
    </>)];

    function onsubmity(){
        navigate("./Resmhtml", {
            state: {Name:name,Title:title,Contact:contact,Skills:skills,Summary:summary,Education:education,Experiences:experiences},
        });
    }

    return(
<>
<div className="quiz-background">
    <div className="quiz-upper-cont">
        {pages[index]}
    </div>
    <div className="quiz-lower-cont">
        { index!==pages.length-1 &&
        <button className="nextbutton" onClick={()=>{setIndex(index+1)}}>Next</button>
        }
        {index===pages.length-1 &&
            <button className="nextbutton" onClick={onsubmity}>Submit</button>
        }
        {(index!==0)&&
        <button className="prevbutton" onClick={()=>{setIndex(index-1)}}>Previous</button>
        }
    </div>
</div>
</>
    );
}

export default Resume;