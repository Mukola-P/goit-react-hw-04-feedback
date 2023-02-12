import styled from '@emotion/styled';

const ButtonContainer = styled.div`

justify-content: center;
  display: flex;
  gap: 10px;
  padding: 10px;
`;

const FeedbackButton = styled.div`
background-color: rgb(204, 222, 220);
  align-items: center;
  padding: 5px 10px;
  cursor: pointer;
  
  text-transform: capitalize;
  border: 1px solid transparent;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  &:hover,
  &:focus {
    background-color: rgb(226, 86, 44);
    transform: scale(1.25);
  }
`;
export { ButtonContainer, FeedbackButton };
