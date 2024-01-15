import { BackButtonTypeStyleProps, BackgroundTypeStyleProps } from "@components/Header/styles";
import { Container, SubTitle, Title } from "./styles";
type Props = {
    title?: string;
    subtitle?: string;
    typeBackground?: BackgroundTypeStyleProps;
    typeBackbutton?: BackButtonTypeStyleProps;
 
}

export function Content({ title, subtitle, typeBackground = 'PRIMARY', typeBackbutton = 'PRIMARY'} : Props) {
    return (
        <Container typeButton={typeBackbutton} type={typeBackground}>
            <Title>
                {title}
            </Title>
            <SubTitle>
                {subtitle}
            </SubTitle>
        </Container>
    )
}