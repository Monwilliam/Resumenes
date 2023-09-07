import { useState, useEffect } from "react";
import Resmhtml from "./Resmhtml";
import { useNavigate } from "react-router-dom";
import "./Profile.css";

function Profile() {
  const [resumes, setResumes] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(
      `http://localhost:8080/resume/get/${localStorage.getItem("userId")}`,
      {
        method: "GET",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setResumes(data);
      });
  }, []);
  console.log(resumes);
  return (
    <div className="container">
      {resumes ? (
        resumes.map((resume) => {
          console.log(resume);
          return (
            <div
              className="resumeDiv"
              onClick={() =>
                navigate("/Resume/Resmhtml", {
                  state: resume,
                })
              }
            >
              <Resmhtml resume={resume} show={true} />
            </div>
          );
        })
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default Profile;
