import { useRef, useEffect } from "react";
import styled from "@emotion/styled";

const FlashLightStyled = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(
        circle at var(--x) var(--y),
        transparent 10px,
        black 50px
    );
    pointer-events: none;
    z-index: 2;
`;

function Flashlight() {
    const $flashlight = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const handleFlashlightMove = (event: MouseEvent) => {
            if ($flashlight.current) {
                $flashlight.current.style.setProperty(
                    "--x",
                    `${event.clientX}px`,
                );
                $flashlight.current.style.setProperty(
                    "--y",
                    `${event.clientY}px`,
                );
            }
        };

        document.addEventListener("mousemove", handleFlashlightMove);

        return () => {
            document.removeEventListener("mousemove", handleFlashlightMove);
        };
    }, []);

    return <FlashLightStyled ref={$flashlight} />;
}

export { Flashlight };
