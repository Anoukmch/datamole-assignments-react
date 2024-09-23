import styled from "styled-components";

export const Layout = styled.main`
    display: flex;
    flex-direction: column;
	flex-grow: 1;

    width: 100%;
    max-width: 600px;
    min-height: 50vh;
    margin: 0 30px;
    padding: 20px;

    background-color: rgb(255, 255, 255);
    border: 1px solid;
    border-color: ${(props) => props.theme.colors.olive6};
    border-radius: 5px;

  > *:nth-child(2) {
    flex-grow: 1;
  }
`;