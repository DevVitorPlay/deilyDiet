import React from 'react';
import { BackButton, BackIcon, ContainerContent, ContainerHome, Content, Logo, Title, User } from "./styles";
import ImageLogo from "@assets/logo.png"
import ImageUser from "@assets/user.png"

type showBackground = "PRIMARY" | "SECONDARY";

type Props = {
    title?: string;
    showBackground: showBackground;
}

export function Header({ title, showBackground = 'PRIMARY' }: Props) {
    return (
        <>
            {showBackground === 'PRIMARY' && (
                <ContainerHome>
                    <Logo source={ImageLogo} />
                    <User source={ImageUser} />
                </ContainerHome>
            )}

            {showBackground === 'SECONDARY' && (
                <ContainerContent  >
                    <BackButton>
                        <BackIcon name='arrow-back'  />
                    </BackButton>
                    <Content>
                        <Title>
                            {title}
                        </Title>
                    </Content>
                </ContainerContent>
            )}
        </>
    );
}
