import styled from "@emotion/styled";

export const DetailText = () => {
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
      <Title>
        She was a notorious hacker in the ’80s – then she disappeared
      </Title>
      <Contents>
        Hi people, I've been working on this API for sometime now and I thought
        others might find it interesting. The API is available on rapidapi @
        https://rapidapi.com/formkiq/api/24hourcharts This API allows you create
        bar/line/pie/etc charts in a single API call. The only required fields
        are the type of chart and a list of data points to chart. There are many
        ways to create charts, but I've found most charting solutions only work
        inside the application they are created in. I was looking for a solution
        that allows me to use/create/share charts however I want easily. In the
        future I really want to focus on being able to simply integrate with
        other service like notion. There's a free plan that allows you to make
        100 requests per day. Hope you'll find it useful. Let me know if you
        have any comments or features for me to add next.
      </Contents>
    </Cont>
  );
};
