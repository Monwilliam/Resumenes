import { useState, useEffect } from "react";
import Resmhtml from "./Resmhtml";
import Coverhtml from "./Coverhtml";
import { useNavigate } from "react-router-dom";
import "./Profile.css";

function Profile() {
  const [resumes, setResumes] = useState(null);
  const [covers, setCovers] = useState(null);
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
    fetch(`http://localhost:8080/cover/get/${localStorage.getItem("userId")}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setCovers(data);
      });
  }, []);
  return (
    <div className="container">
      <div className="Left">
        {covers ? (
          covers.map((cover) => {
            console.log(cover);
            return (
              <div
                className="resumeDiv"
                onClick={() =>
                  navigate("/Coverletter/Coverhtml", {
                    state: cover,
                  })
                }
              >
                <Coverhtml cover={cover} show={true} />
              </div>
            );
          })
        ) : (
          <div></div>
        )}
      </div>
      <div className="Right">
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
    </div>
  );
}

export default Profile;
