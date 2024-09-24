import React, { PropsWithChildren } from "react";
import { olive, grass, blackA } from "@radix-ui/colors";
import { ThemeProvider as ThemeProviderStyled } from "styled-components";

import { GlobalStyle } from "../styles/GlobalStyle";

const theme = {
    colors: {
        ...olive,
        ...grass,
        ...blackA,
		customColor1: '#FF5733',
        customColor2: '#C70039', 
    },
};

export const ThemeProvider = (props: PropsWithChildren) => {
    const { children } = props;

    return (
        <ThemeProviderStyled theme={theme}>
            <GlobalStyle />
            {children}
        </ThemeProviderStyled>
    );
};
