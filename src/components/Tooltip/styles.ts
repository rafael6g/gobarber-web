import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  span {
    width: 160px;
    background: #ff9000;
    padding: 8px;
    border-radius: 4px;
    font-size: 14px;
    font-weight: 500;
    opacity: 0;
    transition: opacity 0.4s;
    visibility: hidden; /* vai esconder o elemento da dom enquanto ele nao estiver disponivel para ser visto*/

    position: absolute;
    bottom: calc(100% + 12px);
    left: 50%; /* para centralizar */
    transform: translateX(-50%); /* para centralizar */

    color: #312e38;

    &::before {
      content: '';
      border-style: solid;
      border-color: #ff9000 transparent; /* para fazer o triangulo */
      border-width: 6px 6px 0 6px; /* para fazer o triangulo */
      /* bottom: 20px; */
      top: 100%;
      position: absolute;
      left: 50%; /* para centralizar */
      transform: translateX(-50%); /* para centralizar */
    }
  }

  &:hover span {
    opacity: 1;
    visibility: visible;
  }
`;