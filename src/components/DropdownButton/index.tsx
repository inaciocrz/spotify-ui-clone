import { DownArrow } from "../icons";
import { Container, Content, Handle } from "./styles";

export default function DropdownButton() {
  return (
    <Container>
      <Handle>
        <img src="https://github.com/inaciocrz.png" alt="" />
        <span>Inácio Campos</span>
        <DownArrow />
      </Handle>
      <Content></Content>
    </Container>
  );
}
