import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const LeftSide = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/courses")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  return (
    <div>
      <h2>this is left side {courses.length}</h2>
      <div>
        {courses.map((course) => (
          <p key={course.id}>
            <Link to="/courses">{course.title}</Link>
          </p>
        ))}
      </div>
    </div>
  );
};

export default LeftSide;
