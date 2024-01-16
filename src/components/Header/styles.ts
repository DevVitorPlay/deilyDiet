
import styled, {css} from "styled-components/native";
import {Ionicons } from "@expo/vector-icons";

export const ContainerHome = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 130px;
    padding: 24px;
    background-color: ${({theme}) => theme.COLORS.white };
    
`;

export const ContainerContent = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: center;
    height: 130px;
    padding: 24px;
    background-color: ${({theme}) => theme.COLORS.gray_5}
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
    font-size: ${theme.FONT_SIZE.xl}px;
    font-family: ${theme.FONTES.bold};
    color: ${theme.COLORS.gray_1};
    `}
`;


export const BackButton = styled.TouchableOpacity`
    flex: 1;
    width: 10%;
`;

export const BackIcon = styled(Ionicons).attrs(({ theme }) => ({
    size: 32,
    color: theme.COLORS.gray_2 
}))``;

export const Content = styled.View`
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 90%;
    
`;