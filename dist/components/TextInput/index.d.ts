/**
 * @file TextInput.tsx
 * @description A customizable input component for React Native using Tamagui.
 */
import React from 'react';
import { TextInputProps as RNTextInputProps } from 'react-native';
/**
 * Props for the Text Input component.
 */
export interface TextInputProps extends RNTextInputProps {
    /** Label text displayed above the input */
    label?: string;
    /** Size variant for the input. @default "medium" */
    size?: 'small' | 'medium' | 'large';
    /** Visual style variant. @default "default" */
    variant?: 'default' | 'filled' | 'outlined';
    /** State variant (error, success, disabled). @default "default" */
    state?: 'default' | 'error' | 'success' | 'disabled';
    /** Helper text displayed below the input (e.g., error message) */
    helperText?: string;
}
/**
 * TextInput component supporting styling variants, sizes, states,
 * with labels and helper text.
 *
 * @param {TextInputProps} props - TextInput properties
 * @returns {JSX.Element} Rendered text input with label and helper text
 */
export declare const TextInput: React.FC<TextInputProps>;
export default TextInput;
