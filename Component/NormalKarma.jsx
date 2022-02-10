import styled from "@emotion/styled";

export const NormalKarma = () => {
  const NormalKarma = styled.div`
    width: 5em;
    height: 0.94em;
    border: 0.04em solid #ff6b01;
    box-sizing: border-box;
    border-radius: 1.38em;
    display: flex;
    align-items: center;
    justify-content: center;
  `;
  const Karma = styled.span`
    font-family: ProductSansBold;
    color: #ff6b01;
    font-size: 0.63em;
    line-height: 0.76rem;
    text-align: center;
  `;
  return (
    <NormalKarma>
      <Karma>Normal karma</Karma>
    </NormalKarma>
  );
};
