import { useEffect, useRef } from "react";
import { Container, CardImage, CardInfo, Title, Description } from "./styles";
import { Play } from "../icons";

interface ICard {
  title: string;
  description: string;
  img: string;
}

export default function Card({ title, description, img }: ICard) {
  const imageRef = useRef(null);
  useEffect(() => {
    if (description === "Artist") {
      imageRef.current.height = imageRef.current.width;
    }
  }, [description]);

  return (
    <Container>
      <CardImage rounded={description === "Artist"}>
        <img ref={imageRef} src={img} alt="img" />
        <div className="play-button">
          <Play />
        </div>
      </CardImage>
      <CardInfo>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </CardInfo>
    </Container>
  );
}
