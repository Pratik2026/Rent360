"use client";
import { Heart } from "phosphor-react";
import { Badge, Button, Card } from "keep-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const ProductCard = (props) => {
  const navigate = useNavigate();

  const [wishlist, setwishlist] = useState(false);

  const id = props.id;
  console.log(id);
  const handleClick = () => {
    console.log("clicked");
    navigate(`/products/product/${id}`);
  };

  const handleWishlistClick = () => {
    setwishlist(!wishlist)
  }

  return (
    <>
      <Card
        className="max-w-xs overflow-hidden rounded-md shadow-md"
        imgSrc={props.img}
        imgSize="md"
      >
        <Card.Container className="absolute top-3.5 right-3.5 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-slate-50/50">
          <Heart size={20} weight="bold" color={wishlist ? "red" : "white"} onClick={handleWishlistClick} />
        </Card.Container>
        <Card.Container className="p-6">
          <Card.Container className="flex items-center justify-between">
            <Badge size="xs" colorType="light" color="gray">
              For Sale
            </Badge>
            <Card.Title>{props.price}</Card.Title>
          </Card.Container>
          <Card.Container className="my-3">
            <Card.Title className="truncate font-semibold text-xl">{props.title}</Card.Title>
          </Card.Container>
          <Card.Container className="flex items-center justify-start gap-5">
            <Button size="sm" type="primary" color="error" onClick={handleClick}>
              RENT NOW
            </Button>
          </Card.Container>
        </Card.Container>
      </Card>
    </>
  );
};
