import styled from "styled-components";

const FooterStyled = styled.footer`
	display: flex;
	justify-content: center;
	align-items: center;

	margin-top: 15px;
	padding-top: 20px;
	padding-bottom: 20px;

	background-color: ${(props) => props.theme.colors.olive1};
	border-top: 1px solid;
	border-color: ${(props) => props.theme.colors.olive6};
	box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

	span {
		font-size: 16px;
		color: ${(props) => props.theme.colors.customColor1};
		margin: 0 10px;
		transition: color 0.3s;
	}
	
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
