import { View } from "react-native";
import styled, {css} from "styled-components/native";
import {Ionicons } from "@expo/vector-icons";


export type BackgroundTypeStyleProps = "PRIMARY" | "SECONDARY";
export type BackButtonTypeStyleProps = "PRIMARY" | "SECONDARY";

type Props = {
    type: BackgroundTypeStyleProps;
    typeButton: BackButtonTypeStyleProps;
}

export const ContainerHome = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 200px;
    padding: 0px 20px;
    background-color: ${({theme}) => theme.COLORS.white };
    
`;

export const ContainerContent = styled(View)<Props>`
    width: 100%;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    height: 150px;
    padding: 10px;
    background-color: ${({theme,  type}) => type === "PRIMARY" ? theme.COLORS.gray_5 : theme.COLORS.red_light };
    
`;


export const Logo  = styled.Image`
    width: 80px;
    height: 40px;
`;

export const User = styled.Image`
    width: 40px;
    height: 40px;

`;

export const Title = styled.Text`
    ${({theme}) => css`
    font-size: ${theme.FONT_SIZE.xxl}px;
    font-family: ${theme.FONTES.bold};
    color: ${theme.COLORS.gray_1};
    `}
`;

export const SubTitle = styled.Text`
    ${({theme}) => css`
    font-size: ${theme.FONT_SIZE.sm}px;
    font-family: ${theme.FONTES.regular};
    color: ${theme.COLORS.gray_2};
    `}
`;

export const BackButton = styled.TouchableOpacity`
    flex: 1;
    width: 10%;
`;

export const BackIcon = styled(Ionicons).attrs<Props>(({ theme, typeButton }) => ({
    size: 32,
    color: typeButton === 'PRIMARY' ? theme.COLORS.gray_2 : theme.COLORS.red_dark
}))``;

export const Content = styled.View`
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 90%;
    
`;