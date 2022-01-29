import styled from "@emotion/styled";

export const Karma = () => {
  const SuperKarma = styled.div`
    width: 4.63em;
    height: 0.94em;
    border: 0.04em solid #ff3e00;
    box-sizing: border-box;
    border-radius: 1.38em;
    display: flex;
    align-items: center;
    justify-content: center;
  `;
  const Karma = styled.span`
    font-family: ProductSansBold;
    color: #ff3e00;
    font-size: 0.63em;
    line-height: 0.76em;
    text-align: center;
  `;
  return (
    <SuperKarma>
      <Karma>Super karma</Karma>
    </SuperKarma>
  );
};
