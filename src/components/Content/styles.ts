import { View } from "react-native";
import styled, {css} from "styled-components/native";
import {Ionicons } from "@expo/vector-icons";
import { BackButtonTypeStyleProps, BackgroundTypeStyleProps } from "@components/Header/styles";


type Props = {
    type: BackgroundTypeStyleProps;
    typeButton: BackButtonTypeStyleProps;
}


export const Container = styled(View)<Props>`
    width: 80%;
    height: 100px;
    border-radius: 20px;
    background-color: ${({theme,  type}) => type === "PRIMARY" ? theme.COLORS.gray_5 : theme.COLORS.red_light };


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
    
`