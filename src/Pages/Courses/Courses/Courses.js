import { useLoaderData } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const Courses = () => {
  const courseData = useLoaderData();
  console.log(courseData);
  return (
    <div>
      {courseData.map((data) => (
        <Card>
          <Card.Img variant="top" src={data.image} style={{ height: "30rem" }} />
          <Card.Body>
            <Card.Title className="text-center">{data.title}</Card.Title>
            <Card.Text>{data.description}</Card.Text>
            <h2>Price {data.price} TK</h2>
            <Button variant="primary">Get premium access</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default Courses;
