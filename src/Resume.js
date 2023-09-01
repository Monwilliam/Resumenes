
import React,{useState} from "react";



function Resume(){
    const [index,setIndex]=useState(0);
    const [title,setTitle]=useState("");
    const handletitle = event => {
        setTitle(event.target.value);
    }
    const [experiences,setExperience]=useState([]);
    const [education,setEducation]=useState([]);
    const [contact,setContact]=useState([]);
    const [summary,setSummary]=useState("");
    const [skills,setSkills]=useState([]);

    let pages=[(<><h2>What is your title?</h2>
    <input className="inputfield" onChange={handletitle} type="text" value={title}></input>
    <div style={{display:'flex',height:'30%',overflow:'hidden',width:'80%',justifyContent:'center',alignItems:'center',padding:'0%'}} className="contentshower">{title}</div>
    </>),
    (<div></div>)];
    return(
<>
<div className="quiz-background">
    <div className="quiz-upper-cont">
        {pages[index]}
    </div>
    <div className="quiz-lower-cont">
        <button className="nextbutton" onClick={()=>{setIndex(index+1)}}>Next</button>
        {index!==0&&
        <button className="prevbutton" onClick={()=>{setIndex(index-1)}}>Previous</button>

        }
    </div>
</div>
</>
    );
}

export default Resume;