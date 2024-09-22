import React from "react";
import styled from "styled-components";

const FooterStyled = styled.footer`
    display: flex;
	flex-direction: column;

    margin-top: 15px;
    padding-top: 15px;

    border-top: 1px solid;
    border-color: ${(props) => props.theme.colors.olive6};
`;

type FooterProps = {
    todoItems?: number;
    doneItems?: number;
};

export const Footer = (props: FooterProps) => {
    const { todoItems = 0, doneItems = 0 } = props;

    return (
        <FooterStyled>
            <span>Todo: {todoItems}</span>
			<span>Done: {doneItems}</span>
        </FooterStyled>
    );
};
