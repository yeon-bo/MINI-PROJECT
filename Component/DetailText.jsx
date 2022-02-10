import styled from "@emotion/styled";

export const DetailText = ({ title, text }) => {
  const Cont = styled.div`
    float: left;
    width: 20em;
    text-align: left;
    margin: 0 1.25em;
  `;
  const Title = styled.span`
    display: block;
    color: #fff;
    font-family: ProductSansBold;
    font-size: 1.88em;
    line-height: 2.44rem;
    margin-top: 1.25rem;
  `;
  const Contents = styled.span`
    word-break: break-all;
    display: block;
    color: #cecfd4;
    font-family: Roboto;
    font-size: 1em;
    line-height: 1.5rem;
    margin-top: 1.25rem;
  `;
  return (
    <Cont>
      <Title>{title}</Title>
      {text === undefined ? null : (
        <Contents dangerouslySetInnerHTML={{ __html: `${text}` }}></Contents>
      )}
    </Cont>
  );
};
