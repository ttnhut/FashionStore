import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { doLogout } from "../../auth";
import AddPost from "../../components/AddPost";
import Base from "../../components/Base";
import DashboardBase from "../../components/DashboardBase";
import StatsComponent from "../../components/StatsComponent";
import { useCart } from "../../contexts/cartContext";
import userContext from "../../contexts/userContext";
const DashBoard = () => {
  const userContextData = useContext(userContext)
  const navigate = useNavigate()
  

  const handleLogout = ()=>{
    console.log("log out")
    doLogout(()=>{
      userContextData.setUser({
        data:null,
        login: false
      })
      navigate("/");
    })
  }
  return (
    <>
        <DashboardBase>
        <main className="ml-60 pt-16 max-h-screen overflow-auto">
        
          <StatsComponent/>
        </main>
        </DashboardBase>
  
</>

  );
};

export default DashBoard;
