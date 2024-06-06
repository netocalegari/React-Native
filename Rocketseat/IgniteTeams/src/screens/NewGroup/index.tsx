import Header from "@components/Header";
import { Container, Content, Icon } from "./style";
import Highlight from "@components/Highlight";
import Button from "@components/Button";
import Input from "@components/Input";

export default function NewGroup() {
  return (
    <Container>
      <Header showBackButton />
      <Content>
        <Icon />
        <Highlight
          title="New Team"
          subTitle="Create a new team to add other people"
        />

        <Input placeholder="Name" />

        <Button title="Create" />
      </Content>
    </Container>
  );
}
