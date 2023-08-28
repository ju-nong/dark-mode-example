import styled from "@emotion/styled";
import { Mode } from "../types";

const DocumentStyled = styled.div`
    max-width: 500px;
    word-break: break-all;

    &.dark {
        pointer-events: none;
        user-select: none;
    }

    > h1 {
        margin-bottom: 2rem;
    }

    > img {
        float: left;
        padding: 1rem;
    }

    > p {
        font-size: 18px;
        padding-bottom: 0.5rem;

        &.gray {
            font-size: 16px;
            color: gray;
        }
    }

    > div {
        display: flex;
        margin-top: 20px;

        > img {
            width: 50%;
        }
    }
`;

interface DocumentProps {
    mode: Mode;
}

function Document({ mode }: DocumentProps) {
    return (
        <DocumentStyled className={mode}>
            <h1>오아리를 소개합니다!</h1>
            <img src="/images/ari-profile.png" alt="아리 프로필" />
            <p>
                오아리라는 이름은 아따맘마에 오아리 캐릭터에서 따왔습니다.
                나이는 12살이며, 동안입니다.
            </p>
            <p>
                품종은 토이푸들이고 갈색의 부드러운 털을 갖고 있습니다. 얼굴이
                매우 작으며, 털을 기르면은 몸이 커져서 얼굴이 더 작아보입니다.
                꼬리는 매우 짧은 편입니다.
            </p>
            <p>
                주인을 닮아 식욕이 남다릅니다. 간식을 매우 좋아하며, 주는대로 잘
                받아 먹습니다. 12년 동안 아리가 배불러하는 것을 본 적이
                없습니다.
            </p>
            <p className="gray">
                잘 찾아 보시면 다크모드 비활성화 버튼이 있어요
            </p>
            <div>
                <img src="/images/ari-full-1.jpg" alt="아리 사진1" />
                <img src="/images/ari-full-2.jpg" alt="아리 사진2" />
            </div>
        </DocumentStyled>
    );
}

export { Document };
