import React, { useState } from "react";
import "../Style/ContactForm.css";
import SvgImage from "../Assets/rafiki.svg";

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [topic, setTopic] = useState("");
  const [message, setMessage] = useState("");
  return (
    <section className="py-3 py-md-5 py-xl-8 mt-12 w-10/12 mx-auto">
      <div className="container">
      <h1 className="text-[50px] font-bold text-center gradient-text event_section_heading mt-5 mb-4">
        CONTACT US
      </h1>
        <div className="row gy-3 gy-md-4 gy-lg-0 align-items-lg-center">
          <div className="col-12 col-lg-6 col-xl-5">
            <img
              className="img-fluid rounded"
              loading="lazy"
              src={SvgImage}
              alt=""
            />
          </div>
          <div className="col-12 col-lg-6 col-xl-7">
            <div className="row justify-content-xl-center">
              <div className="col-12 col-xl-11">
                <form>
                  <div className="fields">
                    <div className="field name text-white">
                      <input
                        type="text"
                        id="name"
                        placeholder="Name"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <div className="field email text-white">
                      <input
                        type="email"
                        id="email"
                        placeholder="Email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="field text-white">
                    <input
                      type="text"
                      id="topic"
                      placeholder="Subject"
                      required
                      value={topic}
                      onChange={(e) => setTopic(e.target.value)}
                    />
                  </div>
                  <div className="field textarea text-white">
                    <textarea
                      cols="30"
                      rows="10"
                      id="message"
                      placeholder="Message.."
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    ></textarea>
                  </div>
                  <div className="button-area">
                    <button type="submit">Send message</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default ContactForm;

// import React, { useState } from "react";
// import "../Style/ContactForm.css";
// import SvgImage from "../Assets/rafiki.png";

// function ContactForm() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [topic, setTopic] = useState("");
//   const [message, setMessage] = useState("");
//   // const [isMailSent, setIsMailSent] = useState(false);

//   // const sendMail = () => {
//   //   setIsMailSent(true);
//   // };
//   return (
//     <section className="py-3 py-md-5 py-xl-8 mt-5">
//       <div className="container">
//         <h2 className="colorfont">CONTACT US</h2>
//         <div className="row gy-3 gy-md-4 gy-lg-0 align-items-lg-center">
//           <div className="col-12 col-lg-6 col-xl-5 floating">
//             <img
//               className="img-fluid rounded"
              
//               loading="lazy"
//               src={SvgImage}
//               alt=""
//             />
//           </div>
//           <div className="col-12 col-lg-6 col-xl-7">
//             <div className="row justify-content-xl-center">
//               <div className="col-12 col-xl-11">
//                 <form>
//                   <div className="fields">
//                     <div className="field name text-white">
//                       <input
//                         type="text"
//                         id="name"
//                         placeholder="Name"
//                         required
//                         value={name}
//                         onChange={(e) => setName(e.target.value)}
//                       />
//                     </div>
//                     <div className="field email text-white">
//                       <input
//                         type="email"
//                         id="email"
//                         placeholder="Email"
//                         required
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                       />
//                     </div>
//                   </div>
//                   <div className="field text-white">
//                     <input
//                       type="text"
//                       id="topic"
//                       placeholder="Subject"
//                       required
//                       value={topic}
//                       onChange={(e) => setTopic(e.target.value)}
//                     />
//                   </div>
//                   <div className="field textarea text-white">
//                     <textarea
//                       cols="30"
//                       rows="10"
//                       id="message"
//                       placeholder="Message.."
//                       required
//                       value={message}
//                       onChange={(e) => setMessage(e.target.value)}
//                     ></textarea>
//                   </div>
//                   <div className="button-area">
//                     <button type="submit">Send message</button>
//                   </div>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
// export default ContactForm;
