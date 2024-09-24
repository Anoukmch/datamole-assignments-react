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

    border-radius: 8px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);

    &:hover {
        background-color: ${(props) => props.theme.colors.olive1};
    }

  > *:nth-child(2) {
    flex-grow: 1;
  }
`;
