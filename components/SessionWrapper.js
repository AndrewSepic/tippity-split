import { useState, useEffect } from "react";
import { supabase } from "../src/client";
import EmployeeWrapper from "./EmployeeWrapper";
import SessionInfo from "./SessionInfo";

const SessionWrapper = ({}) => {
  const [session, setSession] = useState({
    session_name: "",
    session_total_tips: "",
  });

  const [employeeInfo, setEmployeeInfo] = useState([]);

  const updateSession = (sessionInfo) => {
    setSession(sessionInfo);
  };

  const updateEmployeeSessionInfo = (employeeSessionInfo) => {
    setEmployeeInfo(employeeSessionInfo);
    // console.log("Employee info", employeeInfo);
  };

  async function saveSession() {
    const { data, error } = await supabase
      .from("sessions")
      .insert({ session_name: session.session_name, session_total_tips: session.session_total_tips })

	if (error) {
		console.log(error)
	}
	if (data) {
		console.log("session data written to supa", data)
	}
    setSession({ session_name: "", session_total_tips: "" });
	console.log("employeeInfo is", employeeInfo);
    processEmployeeData([12, 15, 22]);
  }

  async function processEmployeeData(employeeData) {
    // 3. Send a request to our API with the employee info
    const res = await fetch("/api/session-data", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(employeeData),
    });

    const { error } = await res.json();

    if (error) {
      // 4. If there was an error, update the message in state.
      console.log(error);
      return;
    }

    try {
      // Do Something
      console.log(res.json);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div className="w-full">
      <div className="flex justify-between">
        <SessionInfo inputHandler={updateSession} sessionInfo={session} />

        <EmployeeWrapper
          inputHandler={updateEmployeeSessionInfo}
          totalTips={session.session_total_tips}
        />
      </div>

      <div className="block w-full my-12 border-inputbg border-t-2 pt-6">
        <button
          className="bg-[#118593] py-2 px-8 text-white font-bold uppercase transition-all duration-300 hover:bg-[#176f79]
"
          onClick={saveSession}
        >
          Save Session
        </button>
      </div>
    </div>
  );
};

export default SessionWrapper;
