import { Header } from "@components/Header";
import * as S from "./styles";

export default function Home() {
  return (
    <S.Container>
      <Header showBackground="PRIMARY" title="30,21%" subtitle="das refeições dentro da dieta" />
      <S.Text>
        Home
      </S.Text>
    </S.Container>
  );
}


