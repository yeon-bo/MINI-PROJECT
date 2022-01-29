import styled from "@emotion/styled";

export const Cardbar = () => {
  const Cardbar = styled.div`
    height: 2em;
    border-top: 1px solid #38393d;
    box-sizing: border-box;
    bottom: 0;
    display: flex;
  `;
  const Link = styled.div`
    width: 45%;
    height: 1em;
    margin-left: 1em;
    top: 50%;
    transform: translateY(45%);
    text-align: left;
    display: flex;
    align-items: center;
    justify-content: start;
  `;
  const LinkIcon = styled.img`
    height: 0.42em;
    margin-right: 0.33em;
  `;
  const LinkTitle = styled.span`
    font-family: "Source Code Pro", monospace;
    font-size: 0.63em;
    height: 0.81rem;
    line-height: 0.79rem;
    color: #838489;
    overflow: hidden;
  `;
  const Buttons = styled.div`
    width: 55%;
    height: 1em;
    margin-right: 1em;
    top: 50%;
    transform: translateY(45%);
    display: flex;
    align-items: center;
    justify-content: end;
    overflow: hidden;
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
    line-height: 0.94rem;
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
