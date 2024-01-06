import React from "react";
import posts from "../Data/instaPosts"
import { useNavigate } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router-dom";
const InstaPosts = ({ref}) => {
const navigate = useNavigate();
  return (
    <div ref={ref} >
      <div className="">
      <FiArrowLeft color="white" onClick={()=>{navigate("/")}} size={35} style={{position:"absolute",cursor:"pointer",left:"30px",top:"6rem"}}/>
        <div className="text-[40px] font-bold text-center text-blue-600 mt-3" >
          Instagram Posts
        </div>
        <div  className="flex flex-wrap justify-center items-center gap-[30px] mt-14">
        {posts.map((post, i) => {
          return (
            <div
              key={i}
              className="w-[310px] max-w-[360px] p-3 mt-4 bg-gradient-to-b from-0E2032 to-ADEFD1 items-center rounded-[10px] poster bg-[#0e2032e5]"
            >
              <div className="mt-2">
                <img
                  src={post.imageSrc}
                  alt="Events dont have poster"
                  className="h-fit mx-auto w-[300px] rounded-[10px] object-fill poster_img"
                />
              </div>

              <div className="font-bold text-2xl my-2 p-4 text-blue-600">
                {post.title}
              </div>
              {/* <div className="flex justify-end">
                <a href={post.link} className="text-blue-600 w-fit "  target="_blank" rel="noreferrer">
                    Know more
                </a>
              </div> */}
              <div className="knowMore">
                <Link
                  to={post.link}
                  className="bg-[#288CEF] w-[130px] h-[40px] px-3 py-2 text-white font-semibold rounded-lg cursor-pointer"
                  target="_blank"
                >
                  know more
                </Link>
              </div>
            </div>
          );
        })}
        </div>
      </div>
    </div>
  );
};

export default InstaPosts;
