import styled from "@emotion/styled";

export const CommentsCont = () => {
  const UserText = styled.span`
    display: block;
    text-align: left;
    color: #cecfd4;
    font-family: Roboto;
    font-size: 1em;
    line-height: 1.3rem;
    margin: 2.2rem 1.25rem 1rem;
  `;
  const More = styled.button`
    display: block;
    border: none;
    background: none;
    text-decoration: underline;
    margin: 1.25rem;
    color: #838489;
    font-family: Source Code Pro;
    font-size: 0.75em;
    line-height: 0.94rem;
    padding: 0;
  `;
  return (
    <>
      <UserText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porttitor est
        ullamcorper adipiscing vestibulum.
      </UserText>
      <More>more..</More>
    </>
  );
};
