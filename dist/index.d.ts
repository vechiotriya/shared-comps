import * as react_jsx_runtime from 'react/jsx-runtime';
import React from 'react';
import * as tamagui from 'tamagui';

type ButtonProps = {
    size?: 'small' | 'large';
    outlined?: boolean;
    children: React.ReactNode;
    onPress?: () => void;
};
declare function Button({ size, outlined, children, onPress }: ButtonProps): react_jsx_runtime.JSX.Element;

declare const tamaguiConfig: tamagui.TamaguiInternalConfig<{
    color: {
        white: string;
        black: string;
        gray: string;
        background: string;
        border: string;
    };
    size: {
        1: number;
        2: number;
        3: number;
        4: number;
        5: number;
        true: number;
    };
    space: {
        1: number;
        2: number;
        3: number;
        4: number;
        5: number;
        true: number;
    };
    radius: {
        0: number;
        1: number;
        2: number;
        3: number;
        4: number;
    };
}, {
    light: {
        background: string;
        borderColor: string;
        color: string;
    };
    dark: {
        background: string;
        borderColor: string;
        color: string;
    };
}, {}, {}, {}, {}, {
    allowedStyleValues: false;
    autocompleteSpecificTokens: "except-special";
}>;

export { Button, tamaguiConfig };
