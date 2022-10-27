import { useLoaderData } from "react-router-dom";
import Card from "react-bootstrap/Card";
const CheckOut = () => {
  const courseData = useLoaderData();
  console.log(courseData);
  return (
    <div>
      <Card>
        <Card.Body>
          <h1>{courseData.title}</h1>
          <h2>Price {courseData.price} TK</h2>
          <h2>{}</h2>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CheckOut;
