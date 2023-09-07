import React,{useState} from "react";
import { useNavigate } from "react-router-dom";



function CoverLetter(){
    const navigate =useNavigate();
    const [index,setIndex]=useState(0);
    const [name,setName]=useState("");
    const [title,setTitle]=useState("");
    const handletitle = event => {
        setTitle(event.target.value);
    }
    const handlename = event => {
        setName(event.target.value);
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
    const [para1,setPara1]=useState("");
    const handlepara1 = event =>{
        setPara1(event.target.value);
    }
    const [para2,setPara2]=useState("");
    const handlepara2 = event =>{
        setPara2(event.target.value);
    }
    const [employer,setEmployer]=useState({name:"",title:"",address:""});
    const handleemployername = event => {
        let newcont = {name:event.target.value,title:employer.title,address:employer.address};
        setEmployer(newcont);
    }
    const handleemployertitle = event => {
        let newcont = {name:employer.name,title:event.target.value,address:employer.address};
        setEmployer(newcont);
    }
    const handleemployeraddress = event => {
        let newcont = {name:employer.name,title:employer.title,address:event.target.value};
        setEmployer(newcont);
    }
    let pages=[(<><h2>Your info</h2>
    <input className="inputfield" placeholder="Name" onChange={handlename} type="text" value={name}></input>
    <input className="inputfield" placeholder="Title" onChange={handletitle} type="text" value={title}></input>
    </>),
    (<>
    <h2>Add Contact info</h2>
    <input className="inputfield" placeholder="mobile number" onChange={handlecontacttel} type="number" value={contact.tel}></input>
    <input className="inputfield" placeholder="address" onChange={handlecontactadd} type="text" value={contact.address}></input>
    <input className="inputfield" placeholder="email" onChange={handlecontactem} type="text" value={contact.email}></input>
    </>),(<>
        <h2>Add Employer info</h2>
    <input className="inputfield" placeholder="Employer name" onChange={handleemployername} type="text" value={employer.name}></input>
    <input className="inputfield" placeholder="his title" onChange={handleemployertitle} type="text" value={employer.title}></input>
    <input className="inputfield" placeholder="his address" onChange={handleemployeraddress} type="text" value={employer.address}></input>
    </>)
    ,(<>
    <h6>Start with a statement about why you are excited about the job you are seeking.
Enthusiasm is key, and your personal connection to the role is much more important than
flashy words and exclamation marks. Keep it brief and easy to read.</h6>
    <textarea className="biginputfield" onChange={handlepara1} type="text" value={para1}></textarea>
    </>),(<>
    <h6>State your desire to learn more. Suggest a followup call or email.</h6>
    <textarea className="biginputfield" onChange={handlepara2} type="text" value={para2}></textarea>
    </>)];

    function onsubmity(){
        navigate("./Coverhtml", {
            state: {Name:name,Title:title,Contact:contact,Employer:employer,Para1:para1,Para2:para2},
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

export default CoverLetter;