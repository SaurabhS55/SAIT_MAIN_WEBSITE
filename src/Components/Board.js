import React from "react";
import "../Style/Board.css";
import linkedin from "../Assets/icons8-linkedin-64.png";
import Instagram from "../Assets/icons8-instagram-48.png";
import { Link } from "react-router-dom";
import Github from "../Assets/icons8-github-50.png";

const img_url= "A3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
function Board({ mentor }) {
    

    return (
        <div className="card mt-5">
            <div className="imge flex flex-col justify-center items-center md:w-12/12">
                <p className="text-white font-bold">{mentor.name}</p>
                <p className="text-white semibold">{mentor.position}</p>
            </div>
            <div className="Description flex justify-center items-center ml-2">
                <img src={mentor.img_url} className="imgstyle object-contain"/>
            </div>
            <div className="social flex mt-4 items-center justify-center gap-4">
                <Link to={mentor.linkedin_link}>
                     <img src={linkedin} className="h-[35px] w-[35px]" alt="LinkedIn" />
                </Link>
                 <Link to={mentor.instagran_link}>
                     <img src={Instagram} className="h-[35px] w-[35px]" alt="Instagram" />
                </Link>
                 <Link to={mentor.github_link}>
                    <img src={Github} className="h-[35px] w-[35px]" alt="GitHub" />
                </Link>
            </div>
        </div>
    );
}

export default Board;
