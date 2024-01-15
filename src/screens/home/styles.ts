import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    background-color: ${({theme}) => theme.COLORS.white};
    align-items: center;
    

`;

export const Text = styled.Text`
    font-size: 32px;
    color: #000;

`;