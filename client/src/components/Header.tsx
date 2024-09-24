import { PlusIcon } from "@radix-ui/react-icons";
import React, { useState } from "react";
import styled from "styled-components";
import { Form } from "./form/Form";
import { Button } from "./ui/Button";

const StyledDiv = styled.header`
    display: flex;
	justify-content: space-between;
	align-items: center;

    button {
        all: unset;

        width: 25px;
        height: 25px;

        background-color: ${(props) => props.theme.colors.grass9};
        border: 1px solid;
        border-color: ${(props) => props.theme.colors.olive9};
        border-radius: 50%;

        color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
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