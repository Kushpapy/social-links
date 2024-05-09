import styled from "styled-components";

const StyledApp = styled.div`
  width: 40rem;
  background-color: var(--Dark-Grey);
  padding: 2.4rem 1.6rem;
  border-radius: 9px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.6rem;
  & img {
    display: inline-block;
    height: 10rem;
    width: 10rem;
    border-radius: 50%;
  }

  & p {
    font-size: 1rem;
  }
`;

const socialProfiles = [
  { name: "GitHub", link: "https://github.com/" },
  {
    name: "Frontend Mentor",
    link: "https://www.frontendmentor.io/solutions/nft-product-card-with-simple-css-grid-and-flexbox-QfBAigBySS",
  },
  { name: "LinkedIn", link: "https://www.linkedin.com/" },
  { name: "Twitter", link: "https://twitter.com/home" },
  { name: "Instagram", link: "https://www.instagram.com/" },
];

const Ul = styled.ul`
  list-style: none;
`;

const NameBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  justify-content: center;

  & p {
    color: var(--Green);
    font-size: 1.2rem;
  }
`;

const SocialLinK = styled.button`
  display: block;
  border: none;
  background-color: var(--Grey);
  font: inherit;
  padding: 1.2rem 2.4rem;
  border-radius: 7px;
  width: 80%;
  cursor: pointer;
  transition: 0.3s all ease-in;

  &:hover {
    background-color: var(--Green);
    color: var(--Dark-Grey);
  }

  & a {
    background-color: none;
    color: var(--White);
    text-decoration: none;
    transition: 0.3s all ease-in;
  }

  & a:hover {
    color: var(--Dark-Grey);
  }
`;

function App() {
  return (
    <StyledApp>
      <img src="/avatar-jessica.jpeg" alt="" />
      <NameBox>
        <h2>Jessica Randall</h2>
        <p>London, United Kingdom</p>
      </NameBox>
      <p>&quot;Front-end developer and avid reader.&quot;</p>
      {socialProfiles.map((s, i) => (
        <SocialLinK key={i}>
          <a href={s.link} target="_blank">
            {s.name}
          </a>
        </SocialLinK>
      ))}
    </StyledApp>
  );
}

export default App;
