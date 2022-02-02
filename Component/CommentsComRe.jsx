import styled from "@emotion/styled";

export const CommentsComRe = () => {
  const CommentCont = styled.div`
    box-sizing: border-box;
    border-top: 1px solid #38393d;
  `;
  const UserBar = styled.div`
    position: relative;
    margin: 1em 2.5em;
    display: flex;
    align-items: center;
    justify-content: start;
  `;
  const UserName = styled.span`
    color: #ff3e00;
    font-family: Source Code Pro;
    font-size: 0.75em;
    line-height: 0.94rem;
    margin-right: 0.63rem;
    text-decoration: underline;
  `;
  const UserTime = styled.span`
    color: #838489;
    font-family: Source Code Pro;
    font-size: 0.75em;
    line-height: 0.94rem;
    letter-spacing: -0.02em;
  `;
  const UserText = styled.span`
    display: block;
    text-align: left;
    color: #cecfd4;
    font-family: Roboto;
    font-size: 1em;
    line-height: 1.3rem;
    margin: 1.1rem 1rem 1.1rem 2.5rem;
  `;
  return (
    <CommentCont>
      <UserBar>
        <UserName>doctoboggan</UserName>
        <UserTime>30 minutes ago</UserTime>
      </UserBar>
      <UserText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porttitor est
        ullamcorper adipiscing vestibulum. Suspendisse hac arcu, nunc adipiscing
        dictum purus. Vel
      </UserText>
    </CommentCont>
  );
};
