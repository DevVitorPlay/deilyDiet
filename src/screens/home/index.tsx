import { Header } from "@components/Header";
import {Content} from "@components/Content"
import * as S from "./styles";

export default function Home() {
  return (
    <S.Container>
      <Header showBackground="PRIMARY" />
     <Content typeBackground="PRIMARY" title="30,21%" subtitle="das refeições dentro da dieta"/>
    </S.Container>
  );
}


