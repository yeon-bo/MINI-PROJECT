import styled from "@emotion/styled";

export const Cardbar = () => {
  const Cardbar = styled.div`
    height: 2em;
    border-top: 1px solid #38393d;
  `;
  const Link = styled.div`
    float: left;
    height: 1em;
    margin-left: 1em;
    top: 50%;
    transform: translateY(45%);
    display: flex;
    align-items: center;
    justify-content: center;
  `;
  const LinkIcon = styled.img`
    height: 0.42em;
    margin-right: 0.33em;
  `;
  const LinkTitle = styled.span`
    font-family: "Source Code Pro", monospace;
    font-size: 0.63em;
    color: #838489;
  `;
  const Buttons = styled.div`
    float: right;
    height: 1em;
    margin-right: 1em;
    top: 50%;
    transform: translateY(45%);
    display: flex;
    align-items: center;
    justify-content: center;
  `;
  const KarmaButton = styled.div`
    height: 0.83em;
    color: #838489;
    display: flex;
    align-items: center;
    justify-content: center;
  `;
  const CommentButton = styled.div`
    height: 0.83em;
    color: #ff3e00;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 1em;
  `;
  const Icon = styled.img`
    height: 100%;
    margin-right: 0.33em;
  `;
  const ButtonSpan = styled.span`
    font-family: "Source Code Pro", monospace;
    font-size: 0.75em;
  `;
  return (
    <Cardbar>
      <Link>
        <LinkIcon src="./image/Link.png" alt="Link" />
        <LinkTitle>Giant Ant</LinkTitle>
      </Link>
      <Buttons>
        <KarmaButton>
          <Icon src="./image/Karma.png" alt="Karma" />
          <ButtonSpan>138</ButtonSpan>
        </KarmaButton>
        <CommentButton>
          <Icon src="./image/Comment.png" alt="Comment" />
          <ButtonSpan>23</ButtonSpan>
        </CommentButton>
      </Buttons>
    </Cardbar>
  );
};
