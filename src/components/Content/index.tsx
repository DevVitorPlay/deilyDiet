import { Button, 
         BackgroundTypeStyleProps,
         Container,
         SubTitle,
         Title,
         TopIcon,
         ContainerText,
 } from "./styles";

type Props = {
    title?: string;
    subtitle?: string;
    typeBackground?: BackgroundTypeStyleProps;
 
 
}

export function Content({ title, subtitle, typeBackground = 'PRIMARY' }: Props) {
    return (
      <Container type={typeBackground}>
        <ContainerText>
          <Title>{title}</Title>
          <SubTitle>{subtitle}</SubTitle>
        </ContainerText>
        <Button>
          <TopIcon type={typeBackground} name="arrow-top-right" />
        </Button>
      </Container>
    );
  }
  