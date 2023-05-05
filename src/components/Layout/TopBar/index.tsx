import { useEffect, useState } from "react";
import { Container, NavigationButtons, UserMenu } from "./styles";
import { ChevronLeft, ChevronRight } from "../../icons";
import { DropdownButton } from "../../";

export default function TopBar() {
  const [opacity, setOpacity] = useState(0);

  const clamp = (num: number, min: number, max: number) =>
    Math.min(Math.max(num, min), max);

  useEffect(() => {
    const mainView = document.querySelector("#main-view");
    const handleScroll = () => {
      const value = mainView?.scrollTop / 100;
      setOpacity(clamp(value, 0, 1));
    };
    mainView.addEventListener("scroll", handleScroll);

    return () => {
      mainView.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <Container opacity={opacity}>
      <NavigationButtons>
        <a href="/">
          <ChevronLeft />
        </a>
        <a href="/">
          <ChevronRight />
        </a>
      </NavigationButtons>
      <UserMenu>
        <button className="upgrade-button">Upgrade</button>
        <DropdownButton />
      </UserMenu>
    </Container>
  );
}
