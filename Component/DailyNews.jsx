import styled from "@emotion/styled";

export const DailyNews = () => {
  const Title = styled.h3`
    font-family: ProductSansBold;
    font-weight: bold;
    font-size: 28px;
    line-height: 2.13rem;
    color: #fff;
    margin: 1.25rem;
    display: flex;
  `;
  const Card_cont = styled.div`
    position: relative;
    height: 16.94em;
    margin: 0.25em 0 1.75em 1.25em;
  `;
  const Cards = styled.div`
    position: absolute;
    display: flex;
    height: 100%;
  `;
  const Card = styled.div`
    width: 17.75em;
    height: 100%;
    background-color: #2c2d32;
    border-radius: 0.38em;
    + div {
      margin-left: 1em;
    }
  `;
  const News = styled.div`
    height: 14.94em;
    padding: 1em;
    box-sizing: border-box;
    background-color: #ddd;
  `;
  const SuperKarma = styled.div`
    width: 4.63em;
    height: 0.94em;
    border: 0.04em solid #ff3e00;
    box-sizing: border-box;
    border-radius: 1.38em;
  `;
  const Karma = styled.p`
    font-family: ProductSansBold;
    color: #ff3e00;
    font-size: 0.63em;
    line-height: 1.3em;
    text-align: center;
    margin: auto 0;
  `;
  return (
    <>
      <Title>Daily News</Title>
      <Card_cont>
        <Cards>
          <Card>
            <News>
              <SuperKarma>
                <Karma>Super karma</Karma>
              </SuperKarma>
            </News>
          </Card>
          <Card></Card>
        </Cards>
      </Card_cont>
    </>
  );
};
