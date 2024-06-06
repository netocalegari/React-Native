import { Container, SubTitle, Title } from "./style";

type Props = {
  title: string;
  subTitle: string;
};
export default function Highlight({ title, subTitle }: Props) {
  return (
    <Container>
      <Title>{title}</Title>
      <SubTitle>{subTitle}</SubTitle>
    </Container>
  );
}
