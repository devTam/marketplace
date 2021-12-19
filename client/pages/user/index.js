import { useEffect, useState, useContext } from "react"; 
// import { Context } from "../context/index";
import axios from "axios";

function UserHome() {
    // useEffect(() => {
    //     const fetchUser = async () => {
    //         try {
    //             const { data } = await axios.get("/api/current-user");
                
    //         } catch (error) {
    //             console.log(error);
    //         }
    //     }
    // }, [])
  return <h1 className="bg-light p-5 text-center bg-primary">Welcome</h1>;
}

export default UserHome;
