import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    
    background-color: ${({theme}) => theme.COLORS.white};

`;


export const LoadingActivity = styled.ActivityIndicator``;