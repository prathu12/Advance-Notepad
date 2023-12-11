import React from 'react'

const Contact = () => {
    let myAbout = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding:"70px",
        margin:"73px"
      };
      let ContactBg = {
        backgroundColor:"red",
        fontSize:"24px",
        padding:"26px"
      }
  return (
    <div style={myAbout}>
      <p style={ContactBg}>Email :- prathameshpote98@gmail.com | contact :- 8999819779 | InstaId :- prathamesh_pote_77</p>
    </div>
  )
}

export default Contact
