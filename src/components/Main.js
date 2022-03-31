import styled from "styled-components";

const ListItem = styled.li`
  color: #000;

  &:hover {
    color: #ff0000;
  }
`;

const Text = styled.p`
  font-size: 20px;
  display: flex;
  text-align: justify;
  padding: 1em;
`;

function Main() {
  return (
    <Text>
      Ao contrário do que se acredita, Lorem Ipsum não é simplesmente um texto
      randômico. Com mais de 2000 anos, suas raízes podem ser encontradas em uma
      obra de literatura latina clássica datada de 45 AC. Richard McClintock, um
      professor de latim do Hampden-Sydney College na Virginia, pesquisou uma
      das mais obscuras palavras em latim, consectetur, oriunda de uma passagem
      de Lorem Ipsum, e, procurando por entre citações da palavra na literatura
      clássica, descobriu a sua indubitável origem. Lorem Ipsum vem das seções
      1.10.32 e 1.10.33 do "de Finibus Bonorum et Malorum" (Os Extremos do Bem e
      do Mal), de Cícero, escrito em 45 AC. Este livro é um tratado de teoria da
      ética muito popular na época da Renascença. A primeira linha de Lorem
      Ipsum, "Lorem Ipsum dolor sit amet..." vem de uma linha na seção 1.10.32.
      O trecho padrão original de Lorem Ipsum, usado desde o século XVI, está
      reproduzido abaixo para os interessados. Seções 1.10.32 e 1.10.33 de "de
      Finibus Bonorum et Malorum" de Cicero também foram reproduzidas abaixo em
      sua forma exata original, acompanhada das versões para o inglês da
      tradução feita por H. Rackham em 1914.
    </Text>
  );
}

export default Main;
