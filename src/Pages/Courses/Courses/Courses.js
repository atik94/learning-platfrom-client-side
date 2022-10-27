import { Link, useLoaderData } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";

const Courses = () => {
  const courseData = useLoaderData();
  //console.log(courseData);
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  return (
    <div ref={componentRef}>
      {courseData.map((data) => (
        <Card>
          <Card.Img variant="top" src={data.image} style={{ height: "30rem" }} />
          <Card.Body>
            <Card.Title className="text-center">{data.title}</Card.Title>
            <Card.Text>{data.description}</Card.Text>
            <div className="d-flex justify-content-between">
              <h2>Price : {data.price} TK</h2>
              <Button onClick={handlePrint} variant="danger">
                Download
              </Button>
            </div>
            <Link to={`/checkOut/${data.id}`}>
              <Button variant="primary">Get premium access</Button>
            </Link>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default Courses;
