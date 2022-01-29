import styled from "@emotion/styled";

export const Category = () => {
  const Box = styled.div`
    width: 20em;
    margin: 0 auto;
  `;
  const Category = styled.div`
    height: 2.38em;
    width: 100%;
    display: flex;
    align-items: center;
  `;
  const Categorybox = styled.div`
    width: 4.81em;
    border-bottom: 1px solid #2c2d32;
  `;
  const CategoryTitle = styled.span`
    color: #6b6c70;
    font-family: ProductSansBold;
    font-size: 1em;
    line-height: 1.21em;
  `;
  return (
    <div>
      <Box>
        <Category>
          <Categorybox>
            <CategoryTitle>Top</CategoryTitle>
          </Categorybox>
          <Categorybox>
            <CategoryTitle>New</CategoryTitle>
          </Categorybox>
          <Categorybox>
            <CategoryTitle>Ask</CategoryTitle>
          </Categorybox>
          <Categorybox>
            <CategoryTitle>Show</CategoryTitle>
          </Categorybox>
        </Category>
      </Box>
    </div>
  );
};
