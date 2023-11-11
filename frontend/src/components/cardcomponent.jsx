"use client";
import { Badge, Button, Card } from "keep-react";
import { useNavigate } from "react-router-dom";

export const CardComponent = (props) => {

  const navigate = useNavigate();
  const handleClick = () => {
    console.log("clicked");
    navigate("/products/product");
  };
  return (
    <>
      <Card
        className="max-w-xs overflow-hidden rounded-md shadow-md"
        imgSrc={props.img}
        imgSize="md"
      >
        <Card.Container className="p-6">
          <Card.Container className="flex items-center justify-between">
            <Badge size="xs" colorType="light" color="gray">
              For Sale
            </Badge>
            <Card.Title>{props.price}</Card.Title>
          </Card.Container>
          <Card.Container className="my-3">
            <Card.Title>{props.title}</Card.Title>
          </Card.Container>
          <Card.Container className="flex items-center justify-start gap-5">
            <Button size="sm" type="outlineGray" onClick={handleClick}>
              RENT NOW
            </Button>
          </Card.Container>
        </Card.Container>
      </Card>
    </>
  );
};
