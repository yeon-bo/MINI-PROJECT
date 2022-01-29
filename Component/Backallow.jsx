import styled from "@emotion/styled";

export const Backallow = () => {
  const Backbar = styled.div`
    height: 4em;
    display: flex;
    align-items: center;
    justify-content: start;
  `;
  const Allow = styled.img`
    display: block;
    height: 1.24em;
    margin-left: 1.61em;
  `;
  return (
    <Backbar>
      <Allow src="./image/Backallow.png" Backallow="Allow" />
    </Backbar>
  );
};
