import styled from "styled-components"

//Styling for the card element
export const CardWrapper = styled.div`
    margin: 3rem auto;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    box-shadow: ${props => props.theme.shadows.shadow2};
`