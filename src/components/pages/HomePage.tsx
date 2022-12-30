import React from 'react';
import {
  PagesList,
  A,
  Logo,
  Container,
  Nav,
  Header,
  Button,
} from '../../styles/homepageStyles';

const HomePage = (): JSX.Element => {
  //   const { classes: homePageClasses } = useAuthStyles();

  return (
    <>
      <Header>
        <Container>
          <Nav>
            <Logo>
              <A href="/techgen-front/HomePage">TECHGEN</A>
            </Logo>
            <PagesList>
              <li>
                <A href="/techgen-front/HomePage">BLOG</A>
              </li>
              <li>
                <A href="/techgen-front/HomePage">ROADMAPS</A>
              </li>
              <li>
                <A href="/techgen-front/HomePage">USEFUL</A>
              </li>
              <li>
                <A href="/techgen-front/HomePage">MENTORSHIP</A>
              </li>
              <li>
                <A href="/techgen-front/HomePage">ABOUT US</A>
              </li>
            </PagesList>
            <Button type="button">SIGN IN</Button>
          </Nav>
        </Container>
      </Header>
    </>
  );
};

export default HomePage;
