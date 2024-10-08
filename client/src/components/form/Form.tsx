import { CheckIcon, Cross1Icon } from "@radix-ui/react-icons";
import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "../ui/Button";
import { Input } from "./Input";

const FormStyled = styled.form`
    display: flex;
    gap: 10px;
`;

type FormProps = {
    initialValue: string;
    onSubmit: (value: string) => void;
    onCancel: () => void;
};

export const Form = (props: FormProps) => {
    const { initialValue, onSubmit, onCancel } = props;

    const [inputValue, setInputValue] = useState(initialValue);

    return (
        <FormStyled
            onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
                e.preventDefault();
                onSubmit(inputValue);
            }}
            onReset={() => {
                onCancel();
            }} >
            <Input value={inputValue} onValueChange={(value) => setInputValue(value)} />
			<Button type="submit">
                <CheckIcon />
            </Button>
            <Button type="reset">
                <Cross1Icon />
            </Button>
        </FormStyled>
    );
};

