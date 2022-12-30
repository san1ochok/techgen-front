import React, { MouseEventHandler } from 'react';
import {
  PagesList,
  A,
  Logo,
  Container,
  Nav,
  Header,
  Button,
} from '../../styles/homepageStyles';
import { useNavigate } from 'react-router-dom';

const HomePage = (): JSX.Element => {
  const navigate = useNavigate();
  //* sign in
  const signIn: MouseEventHandler<HTMLButtonElement> = () => {
    navigate('/techgen-front/signIn');
  };

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
            <Button type="button" onClick={signIn}>
              SIGN IN
            </Button>
          </Nav>
        </Container>
      </Header>
    </>
  );
};

export default HomePage;
