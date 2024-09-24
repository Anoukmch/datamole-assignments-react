import { PlusIcon } from "@radix-ui/react-icons";
import React, { useState } from "react";
import styled from "styled-components";
import { Form } from "./form/Form";
import { Button } from "./ui/Button";

const StyledDiv = styled.header`
    display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 20px;
    background-color: ${(props) => props.theme.colors.olive1};
    border-bottom: 2px solid ${(props) => props.theme.colors.olive6};
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

    button {
        all: unset;

        width: 35px;
        height: 35px;

        background-color: ${(props) => props.theme.colors.grass9};
        border: 2px solid;
        border-color: ${(props) => props.theme.colors.olive9};
        border-radius: 50%;

        color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;

		transition: background-color 0.3s, transform 0.2s;

        &:hover {
            background-color: ${(props) => props.theme.colors.grass10};
            transform: scale(1.05);
        }
    }

	h1 {
		color: ${(props) => props.theme.colors.customColor2};
        font-size: 24px;
        margin: 0;
    }
`;

type HeaderProps = {
    children: React.ReactNode;
    onItemAdd: (label: string) => void;
};

export const Header = (props: HeaderProps) => {
    const { children, onItemAdd } = props;
	const [showForm, setShowForm] = useState(false);

	const handleFormSubmit = (label: string) => {
		onItemAdd(label);
		setShowForm(false);
	};

    return (
        <StyledDiv>
            <h1>{children}</h1>
			<div>
				{!showForm ? (	
            		<Button onClick={() => setShowForm(true)}><PlusIcon /></Button>
				) : (
					<Form
						initialValue=""
						onSubmit={handleFormSubmit}
						onCancel={() => setShowForm(false)}
					/>
				)}
			</div>
        </StyledDiv>
    );
};