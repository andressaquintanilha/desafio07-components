import styled from "styled-components";

const ListItem = styled.li`
  color: white;
  text-shadow: 1px 0.5px black;

  &:hover {
    color: darkgreen;
  }
`;

const List = styled.ul`
  display: flex;
  justify-content: space-evenly;
  list-style: none;
  color: red;
  font-size: 30px;
  background-color: lightgreen;
`;

function Header() {
  return (
    <List>
      <ListItem>Home</ListItem>
      <ListItem>Sobre</ListItem>
      <ListItem>Fotos</ListItem>
    </List>
  );
}

export default Header;
