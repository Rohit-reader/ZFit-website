import styled from "@emotion/styled";

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${(props) => props.theme.spacing(2)};
  background: ${(props) => props.theme.colors.primary};
  color: white;
`;

const Logo = styled.h1`
  font-size: 1.5rem;
`;

const Links = styled.ul`
  list-style: none;
  display: flex;
  gap: ${(props) => props.theme.spacing(3)};
`;

const Link = styled.li`
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

export default function Navbar() {
  return (
    <Nav>
      <Logo>ZFit</Logo>
      <Links>
        <Link>Home</Link>
        <Link>About</Link>
        <Link>Contact</Link>
      </Links>
    </Nav>
  );
}
