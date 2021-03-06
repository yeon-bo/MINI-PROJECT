import styled from "@emotion/styled";

export const Karma = () => {
  const KarmaCont = styled.div`
    width: 2.8em;
    height: 0.94em;
    border: 0.04em solid #838489;
    box-sizing: border-box;
    border-radius: 1.38em;
    display: flex;
    align-items: center;
    justify-content: center;
  `;
  const Karma = styled.span`
    font-family: ProductSansBold;
    color: #838489;
    font-size: 0.63em;
    line-height: 0.76rem;
    text-align: center;
  `;
  return (
    <KarmaCont>
      <Karma>karma</Karma>
    </KarmaCont>
  );
};
