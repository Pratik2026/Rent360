
"use client";
import { Empty } from "keep-react";

export const EmptyComponent = () => {
  return (
    <Empty
      title="OOPS! Looks like you haven't listed anything yet."
      content="Let go what you don't find useful anymore."
      image={
        <img
          src="https://staticmania.cdn.prismic.io/staticmania/a8befbc0-90ae-4835-bf37-8cd1096f450f_Property+1%3DSearch_+Property+2%3DSm.svg"
          height={234}
          width={350}
          alt="404"
        />
      }
    />
  );
}
