import { View } from "react-native";
import styled, {css} from "styled-components/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export type BackgroundTypeStyleProps = "PRIMARY" | "SECONDARY";

type Props = {
    type: BackgroundTypeStyleProps;
    
}


export const Container = styled(View)<Props>`
    width: 90%;
    height: 100px;
    border-radius: 20px;
    flex-direction: row;
    background-color: ${({theme,  type}) => type === "PRIMARY" ? theme.COLORS.gray_5 : theme.COLORS.red_light };


`;

export const ContainerText = styled.View`
    flex: 1;
    height: 100%;
    justify-content: center;
    align-items: center;
    margin-left: 40px;
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

export const Button = styled.TouchableOpacity`
    height: 100%;
    width: 40px;
    align-items: center;
`;

export const BackIcon = styled(MaterialCommunityIcons).attrs<Props>(({ theme, type }) => ({
    size: 32,
    color: type === 'PRIMARY' ? theme.COLORS.green_dark : theme.COLORS.red_dark
}))``;

export const TopIcon = styled(MaterialCommunityIcons).attrs<Props>(({ theme, type }) => ({
    size: 32,
    color: type === 'PRIMARY' ? theme.COLORS.green_dark : theme.COLORS.red_dark,
  }))``;
  
export const Content = styled.View`
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 90%;
    
`