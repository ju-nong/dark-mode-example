import styled from "@emotion/styled";

const DocumentStyled = styled.div`
    max-width: 500px;
    word-break: break-all;

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
    }
`;

function Document() {
    return (
        <DocumentStyled>
            <h1>이건 현실적인 다크 모드입니다.</h1>
            <img src="/images/ari-profile.png" alt="아리 프로필" />
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident tempora nihil illo omnis optio similique debitis ad
                quod, laboriosam, consectetur deleniti quo ducimus magni
                accusantium.
            </p>

            <p>
                Aperiam blanditiis quaerat porro asperiores.Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Provident tempora nihil
                illo omnis optio similique debitis ad quod, laboriosam,
                consectetur deleniti quo ducimus magni accusantium.
            </p>
            <p>Aperiam blanditiis quaerat porro asperiores.</p>
        </DocumentStyled>
    );
}

export { Document };
