import styled from "styled-components";

const ListItem = styled.li`
  color: black;
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

function Footer() {
  return (
    <List>
      <ListItem>Criado para fins educacionais</ListItem>
      <ListItem>@vainaweb</ListItem>
    </List>
  );
}

export default Footer;
