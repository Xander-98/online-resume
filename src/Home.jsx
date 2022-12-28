import { useState, useEffect } from "react";
import axios from "axios";
import { ResumesIndex } from "./ResumesIndex";
import { Modal } from "./Modal";
import { ResumesShow } from "./ResumesShow";
import { TwitterFeed } from "./TwitterFeed";
import { TwitterShow } from "./TwitterShow";

export function Home() {
  const [students, setStudents] = useState([]);
  const [isStudentsShowVisible, setIsStudentsShowVisible] = useState(false);
  const [currentStudent, setCurrentStudent] = useState({});

  const handleIndexStudents = () => {
    axios.get("http://localhost:3000/students.json").then((response) => {
      console.log(response.data);
      setStudents(response.data);
    });
  };

  const handleShowStudent = (student) => {
    setIsStudentsShowVisible(true);
    setCurrentStudent(student);
  };
  const handleHideStudent = () => {
    setIsStudentsShowVisible(false);
  };
  useEffect(handleIndexStudents, []);
  return (
    <div>
      <ResumesIndex students={students} />
      <TwitterFeed />
    </div>
  );
}
