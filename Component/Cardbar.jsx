import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const Cardbar = ({ karma, comment, url, kids, id, urlTitle }) => {
  const Cardbar = styled.div`
    position: relative;
    height: 2em;
    border-top: 1px solid #38393d;
    box-sizing: border-box;
    bottom: 0;
    display: flex;
  `;
  const OutLink = styled.a`
    display: block;
    text-decoration: none;
    width: 60%;
    height: 1em;
    margin-left: 1em;
    top: 50%;
    transform: translateY(45%);
    text-align: left;
    display: flex;
    align-items: center;
    justify-content: start;
    cursor: pointer;
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
    position: absolute;
    height: 1em;
    margin-right: 1em;
    top: 0.44em;
    right: 0;
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
      {urlTitle === undefined ? null : (
        <OutLink target="_blank" href={url}>
          <LinkIcon src="../image/Link.png" alt="Link" />
          <LinkTitle>{urlTitle}</LinkTitle>
        </OutLink>
      )}
      <Buttons>
        <KarmaButton>
          <Icon src="../image/Karma.png" alt="Karma" />
          <ButtonSpan>{karma}</ButtonSpan>
        </KarmaButton>
        <Link
          to={{
            pathname: `/comments/${kids}`
          }}
          style={{ textDecoration: "none" }}
        >
          <CommentButton>
            <Icon src="../image/Comment.png" alt="Comment" />
            <ButtonSpan>{comment}</ButtonSpan>
          </CommentButton>
        </Link>
      </Buttons>
    </Cardbar>
  );
};
