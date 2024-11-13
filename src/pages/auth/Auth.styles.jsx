import styled from 'styled-components';

export const SignUpContainer = styled.div`
  display: flex;
  margin-top: 60px;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 400px;
  padding: 2rem;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 1rem;
  margin-top: 40px;
  .MuiOutlinedInput-root {
    border-radius: 30px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  };
  & .MuiOutlinedInput-notchedOutline {
    border: 0;
  }
`;

export const SocialContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 1rem 0;
  gap: 12px
`;

export const LoginLink = styled.a`
  color: #0070f3;
  cursor: pointer;
  font-weight: 600;
  margin-left: 4px;
  &:hover {
    text-decoration: underline;
  }
`;

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

export const InnerContainer = styled.div`
  display: flex;
  flex-grow: 1;
  height: 100%;
`;

export const ContentBox = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: bold;
  width: 100%;
  &:nth-child(1) {
    display: none;
    @media (min-width: 600px) {
        display: flex;
        // background: linear-gradient(to bottom, #87cefa 0%, #6a5acd 100%);
    }
  }
    img {
      width: 100%;
    }
`;

export const DividerWithText = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  color: rgba(0, 0, 0, 0.6);
  font-size: 0.875rem;
  margin: 1rem 0;

  &::before,
  &::after {
    content: "";
    flex: 1;
    height: 1px;
    background: rgba(0, 0, 0, 0.3);
  }

  &::before {
    margin-right: 0.75rem;
  }

  &::after {
    margin-left: 0.75rem;
  }
`;

export const TopBgImage = styled.div`
position: absolute;
top: 0;
left: 0;
width: 100%;
z-index: -1;

img {
  width: 100%;
  height: auto; /* Maintains aspect ratio */
}
   @media (min-width: 600px) {
        display: none;
    }
`;

export const BottomBgImage = styled.div`
position: fixed;
bottom: 0;
left: 0;
z-index: -1;
display: flex;

img {
  width: 100%;
  height: auto; /* Maintains aspect ratio */
}
   @media (min-width: 600px) {
        display: none;
    }
`;

export const SmallText = styled.span`
  font-weight: bold;
  font-size: 12px;
`
