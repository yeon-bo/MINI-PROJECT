import styled from "@emotion/styled";

export const SearchTag = () => {
  const Title = styled.h4`
    display: flex;
    left: 0;
    color: #6b6c70;
    font-family: Source Code Pro;
    font-size: 0.75em;
    line-height: 0.94rem;
    margin: 1rem 0 0.75rem 1.25rem;
  `;
  const TopTagCon = styled.div`
    position: relative;
    display: block;
    height: 2.2em;
  `;
  const TopTags = styled.div`
    position: absolute;
    display: flex;
    margin-left: 1.25em;
  `;
  const TopTag = styled.span`
    display: block;
    border: 1px solid #ff3e00;
    box-sizing: border-box;
    border-radius: 44.34rem;
    padding: 0.34rem 0.75rem;
    color: #ff3e00;
    font-family: ProductSansBold;
    font-size: 0.75em;
    line-height: 0.91rem;
    height: 100%;
    white-space: nowrap;
    & + span {
      margin-left: 0.63rem;
    }
  `;
  const PopularCons = styled.div`
    height: 9.1em;
  `;
  const PopularConsCons = styled.div`
    position: relative;
    height: 1.69em;
    & + div {
      margin-top: 0.63rem;
    }
  `;
  const PopularTags = styled.div`
    position: absolute;
    display: flex;
    margin-left: 1.25em;
  `;
  const PopularTag = styled.span`
    display: inline-block;
    background-color: #2c2d32;
    border-radius: 44.34rem;
    padding: 0.39rem 0.75rem;
    color: #cecfd4;
    font-family: ProductSansBold;
    font-size: 0.75em;
    line-height: 0.94rem;
    height: 100%;
    white-space: nowrap;
    & + span {
      margin-left: 0.63rem;
    }
  `;
  return (
    <>
      <Title>Top searched</Title>
      <TopTagCon>
        <TopTags>
          <TopTag>api</TopTag>
          <TopTag>Android app</TopTag>
          <TopTag>mobile</TopTag>
          <TopTag>Eulsu Jung</TopTag>
          <TopTag>Yerim Park</TopTag>
        </TopTags>
      </TopTagCon>
      <Title>Popular users</Title>
      <PopularCons>
        <PopularConsCons>
          <PopularTags>
            <PopularTag>Yesol Lee</PopularTag>
            <PopularTag>Geonung Kim</PopularTag>
            <PopularTag>Yerim Park</PopularTag>
            <PopularTag>Yesol Lee</PopularTag>
          </PopularTags>
        </PopularConsCons>
        <PopularConsCons>
          <PopularTags>
            <PopularTag>Geonung Kim</PopularTag>
            <PopularTag>Yerim Park</PopularTag>
            <PopularTag>Yesol Lee</PopularTag>
            <PopularTag>Geonung Kim</PopularTag>
          </PopularTags>
        </PopularConsCons>
        <PopularConsCons>
          <PopularTags>
            <PopularTag>Yerim Park</PopularTag>
            <PopularTag>Yesol Lee</PopularTag>
            <PopularTag>Geonung Kim</PopularTag>
            <PopularTag>Yerim Park</PopularTag>
          </PopularTags>
        </PopularConsCons>
        <PopularConsCons>
          <PopularTags>
            <PopularTag>Yesol Lee</PopularTag>
            <PopularTag>Geonung Kim</PopularTag>
            <PopularTag>Yerim Park</PopularTag>
            <PopularTag>Yesol Lee</PopularTag>
          </PopularTags>
        </PopularConsCons>
      </PopularCons>
      <Title>Recently viewed</Title>
    </>
  );
};
