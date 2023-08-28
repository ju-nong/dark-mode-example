import styled from "@emotion/styled";
import { Mode } from "../types";

const ToggleButtonStyled = styled.button`
    position: absolute;
    top: 0.25rem;
    right: 0.25rem;
    background: none;
    outline: 0;
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;
    padding: 1rem;
`;

const printEmoji = (mode: Mode) => (mode === "dark" ? "🌚" : "🌝");

interface ToggleButtonProps {
    mode: Mode;
    onToggleMode: () => void;
}

function ToggleButton({ mode, onToggleMode }: ToggleButtonProps) {
    return (
        <ToggleButtonStyled onClick={onToggleMode}>
            {printEmoji(mode)}
        </ToggleButtonStyled>
    );
}

export { ToggleButton };
