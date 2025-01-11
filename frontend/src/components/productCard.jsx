"use client";
import { Heart } from "phosphor-react";
import { Badge, Button, Card } from "keep-react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import{ Toaster, toast } from "react-hot-toast";
import { addWishlistRoute, checkWishlistRoute } from "../../utils/api_routes";
import Proptypes from 'prop-types';

ProductCard.propTypes = {
  id: Proptypes.number,
  img: Proptypes.string,
  price: Proptypes.string,
  title: Proptypes.string,
};

export const ProductCard = (props) => {
  const navigate = useNavigate();

  const [wishStatus, setWishStatus] = useState(false);

  const id = props.id;

  const handleClick = () => {
    console.log("clicked");
    navigate(`/products/product/${id}`);
  };

    const userid = localStorage.getItem("userid");

    const handleWish = async () => {
      const response = await axios.post(addWishlistRoute, {
        userid,
        id,
      });
      if (response.data.status === true) {
        
        wishStatus ? toast.success("Removed from wishlist") : toast.success("Added to wishlist");
        setWishStatus(!wishStatus);
      }
      else {
        setWishStatus(false);
      }
    };

    useEffect(() => {
      const wishChecker = async () => {
        const response = await axios.post(checkWishlistRoute, {
          userid,
          id,
        });
        if (response.data.status === true) {
          setWishStatus(true);
        }
      };
      wishChecker();
    }, [userid, id]);

  return (
    <>
      <Card
        className="w-[300px] overflow-hidden rounded-md bg-slate-100"
        imgSrc={props.img}
        imgSize="md"
      >
        <Card.Container className="absolute top-3.5 right-3.5 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-slate-50/50">
          <Heart size={20} weight="bold" color={wishStatus ? "red" : "white"} onClick={handleWish} />
        </Card.Container>
        <Card.Container className="p-6">
          <Card.Container className="flex items-center justify-between">
            <Badge size="xs" colorType="light" color="gray">
              For Rent
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
      <Toaster position="top-center" />
    </>
  );
};
