import React from "react";
import { Routes, Route} from "react-router-dom";
import EditProfile from "./EditProfile";
import  "./ProfileP";
function ContentProf() {
  return (
    <div>
    <Routes>
    
        <Route path='ProfileP/EditProfile' element={<EditProfile/>} />
    </Routes> 
    </div>
  );
}

export default ContentProf;
