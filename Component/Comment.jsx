import styled from "@emotion/styled";

export const Comment = () => {
  const Comment = styled.div`
    border-top: 1px solid #38393d;
    padding: 1em;
    box-sizing: border-box;
  `;
  const UserCont = styled.div`
    display: flex;
    align-items: center;
    justify-content: start;
    margin-bottom: 0.25em;
  `;
  const UserName = styled.span`
    color: #ff3e00;
    font-family: Source Code Pro;
    font-size: 0.75em;
    line-height: 0.94em;
    margin-right: 0.5em;
    text-decoration: underline;
  `;
  const UserTime = styled.span`
    color: #838489;
    font-family: Source Code Pro;
    font-size: 0.75em;
    line-height: 0.94em;
  `;
  const CommentText = styled.span`
    display: block;
    text-align: left;
    width: 18rem;
    color: #838489;
    font-family: Roboto;
    font-size: 0.75em;
    line-height: 1rem;
  `;
  return (
    <Comment>
      <UserCont>
        <UserName>Cameron Williamson</UserName>
        <UserTime>11 minutes ago</UserTime>
      </UserCont>
      <CommentText>
        Completely agree. Here's another example: BitDefender (antivirus) passes
        your email and MD5 of your password in the hash when you want to go to
        your dashboard.
      </CommentText>
    </Comment>
  );
};
