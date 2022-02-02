import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const DetailBtn = () => {
  const Background = styled.div`
    position: absolute;
    width: 360px;
    height: 8.13em;
    bottom: 0;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%);
    backdrop-filter: blur(1px);
  `;
  const BtnCont = styled.div`
    position: relative;
    height: 2.25em;
    width: 12em;
    margin: 3.88em auto 2em auto;
    display: flex;
    justify-content: center;
  `;
  const CommentBtn = styled.div`
    width: 8.06em;
    height: 100%;
    background: linear-gradient(90deg, #ff6b01 0%, #ff3f01 100%);
    border-radius: 44.34em;
    display: flex;
    align-items: center;
    justify-content: center;
  `;
  const BntText = styled.span`
    color: #fff;
    font-family: ProductSansBold;
    font-size: 1em;
    line-height: 1.5rem;
  `;
  const LinkBtn = styled.div`
    width: 3.25em;
    height: 100%;
    background: #fff;
    border-radius: 44.34em;
    margin-left: 0.75em;
    display: flex;
    align-items: center;
    justify-content: center;
  `;
  const LinkIcon = styled.img`
    width: 1.25em;
    margin: auto;
  `;
  return (
    <Background>
      <BtnCont>
        <Link to="/comments" style={{ textDecoration: "none" }}>
          <CommentBtn>
            <BntText>34 comments</BntText>
          </CommentBtn>
        </Link>
        <LinkBtn>
          <LinkIcon src="./image/Link2.png" Backallow="Link2" />
        </LinkBtn>
      </BtnCont>
    </Background>
  );
};
