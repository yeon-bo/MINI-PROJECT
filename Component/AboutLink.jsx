import styled from "@emotion/styled";

import { Karma } from "../Component/Karma.jsx";

export const AboutLink = () => {
  const Help = styled.img`
    position: absolute;
    height: 1.15em;
    top: 3em;
    left: ;
  `;
  const IntroTitle = styled.h3`
    color: #fff;
    font-family: ProductSansRegular;
    font-size: 1.5em;
    line-height: 1.82rem;
    margin: 0.2rem 0 1.75rem 0;
  `;
  const Intro = styled.p`
    color: #cecfd4;
    font-family: ProductSansRegular;
    font-size: 0.81em;
    line-height: 1rem;
    margin: 0 1.25rem 3rem;
    text-align: left;
    white-space: pre-wrap;
  `;
  const Title = styled.h4`
    float: left;
    color: #fff;
    font-family: ProductSansRegular;
    font-size: 1.38em;
    line-height: 1.67rem;
    margin: 0 0 0.9rem 1.25rem;
  `;
  const Content = styled.div`
    text-align: left;
    color: #fff;
    margin: 0 1.1em 2.94em 1.25em;
  `;
  const TitleSmall = styled.h5`
    display: inline-block;
    font-family: ProductSansBold;
    font-size: 0.88em;
    line-height: 1.06rem;
    background-color: #2c2d32;
    padding: 0.13rem 0.25rem;
    margin: 0.75rem 0;
  `;
  const ContentSmall = styled.span`
    display: block;
    font-family: ProductSansRegular;
    font-size: 0.88em;
    line-height: 1.06rem;
    text-align: left;
    margin-bottom: 0.75rem;
    white-space: pre-wrap;
  `;
  const ContentKarma = styled.span`
    display: block;
    font-family: ProductSansRegular;
    font-size: 0.75em;
    line-height: 0.97rem;
    text-align: left;
    margin: 0.75rem 0;
  `;
  const UnderLine = styled.span`
    color: #ff3e00;
    text-decoration: underline;
  `;
  return (
    <>
      <Help src="./image/Help.png" Backallow="Help" />
      <IntroTitle>About this site</IntroTitle>
      <Intro>
        {`This is a simple Hacker News clone, built with`}
        <UnderLine>SvelteKit</UnderLine>
        {`, an application framework for Svelte.

Svelte is a new kind of framework, one that compiles your component templates into fast, compact JavaScript — either client-side or server-side. You can read more about the design and philosophy in the`}
        <UnderLine>introductory blog post.</UnderLine>
        {`
        
We're using `}
        <UnderLine>hnpwa-api</UnderLine>
        {` as a backend. The app is hosted on `}
        <UnderLine>Vercel.</UnderLine>
      </Intro>
      <Title>Introducing Karma ✨</Title>
      <Content>
        <TitleSmall>Who has a ‘Super karma’ badge?</TitleSmall>
        <ContentSmall>
          We give this badge to those who are ranked 100th or higher.
        </ContentSmall>
        <Karma />
        <ContentKarma>Ranked 100th or higher. </ContentKarma>
        <Karma />
        <ContentKarma>
          More than 501 karma. It means you can downvote.{" "}
        </ContentKarma>
        <Karma />
        <ContentKarma>
          More than 30 karma. Now you can "Flagging" comments. (Flagging is not
          permitted until a user has 30 karma points.)
        </ContentKarma>
        <TitleSmall>What does ‘karma’ mean?</TitleSmall>
        <ContentSmall>
          Karma points are calculated as the number of upvotes a given user's
          content has received minus the number of downvotes.
        </ContentSmall>
        <TitleSmall>How is a user's karma calculated?</TitleSmall>
        <ContentSmall>
          Roughly, the number of upvotes on their posts minus the number of
          downvotes. These don't match up exactly. Some votes are dropped by
          anti-abuse software.
        </ContentSmall>
        <TitleSmall>Do posts by users with more karma rank higher?</TitleSmall>
        <ContentSmall>No.</ContentSmall>
        <ContentSmall>
          {`If you need more information, please check this link. `}
          <UnderLine>https://news.ycombinator.com/newsfaq.html</UnderLine>
        </ContentSmall>
      </Content>
    </>
  );
};
