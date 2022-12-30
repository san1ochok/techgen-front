import styled from '@emotion/styled';
import '@fontsource/montserrat';

export const Container = styled.div`
  width: 100%;
  padding: 0 30px;
  margin: 0 auto;

  max-width: 1280px;
`;

export const Nav = styled.nav`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
`;

export const PagesList = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 28px;
  color: white;
  padding: 0;
`;

export const A = styled.a`
  text-decoration: none;
  color: currentColor;

  &:hover {
    opacity: 0.5;
  }
`;

export const Logo = styled.div`
  display: flex;
  flex-wrap: wrap;
  font-weight: 700;
  font-size: 24px;
  padding: 30px 0;
`;

export const Header = styled.header`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: calc(17 / 18);
  letter-spacing: -0.055em;
  color: #ffffff;

  background: rgb(34, 34, 34);
  background: linear-gradient(
    180deg,
    rgba(34, 34, 34, 1) 0%,
    rgba(26, 27, 30, 1) 100%
  );
`;

export const Button = styled.button`
  font-weight: 700;
  font-size: 14px;
  line-height: calc(17 / 14);
  padding: 4px;
  background: #4c58a2;
  border-radius: 12px;
  border: none;
  padding: 8px 16px;

  &:hover {
    opacity: 0.5;
  }
`;
