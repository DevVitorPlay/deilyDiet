import React from 'react';
import { BackButton, BackButtonTypeStyleProps, BackIcon, BackgroundTypeStyleProps, ContainerContent, ContainerHome, Content, Logo, SubTitle, Title, User } from "./styles";
import ImageLogo from "@assets/logo.png"
import ImageUser from "@assets/user.png"

type showBackground = "PRIMARY" | "SECONDARY";

type Props = {
    title?: string;
    subtitle?: string;
    typeBackground?: BackgroundTypeStyleProps;
    typeBackbutton?: BackButtonTypeStyleProps;
    showBackground: showBackground;
}

export function Header({ title, subtitle, typeBackground = 'PRIMARY', typeBackbutton = 'PRIMARY', showBackground = 'PRIMARY' }: Props) {
    return (
        <>
            {showBackground === 'PRIMARY' && (
                <ContainerHome>
                    <Logo source={ImageLogo} />
                    <User source={ImageUser} />
                </ContainerHome>
            )}

            {showBackground === 'SECONDARY' && (
                <ContainerContent type={typeBackground} typeButton={typeBackbutton}>
                    <BackButton>
                        <BackIcon name='arrow-back' typeButton={typeBackbutton} />
                    </BackButton>
                    <Content>
                        <Title>
                            {title}
                        </Title>
                        <SubTitle>
                            {subtitle}
                        </SubTitle>
                    </Content>
                </ContainerContent>
            )}
        </>
    );
}
