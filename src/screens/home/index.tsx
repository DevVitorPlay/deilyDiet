import { Container } from "./styles";
//
import { Header } from "@components/Header";
import {Content} from "@components/Content"

export default function Home() {
  return (
    <Container>
      <Header showBackground="PRIMARY" title="Nova Refeição" />
     <Content typeBackground="PRIMARY"  title="30,21%" subtitle="das refeições dentro da dieta"/>
    </Container>
  );
}


