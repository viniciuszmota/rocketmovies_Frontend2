import styled from "styled-components"
import backgroundImg from "../../assets/background.png"

export const Container = styled.div`
  height: 100vh;
  display: flex;
`

export const Form = styled.form`
  padding: 13rem;

  display: flex;
  flex-direction: column;
  justify-content: center;

  :nth-child(7) {
    margin-top: 1.6rem;
    margin-bottom: 4.2rem;
  }

  > h1 {
    font-size: 4.8rem;
    color: ${({ theme }) => theme.COLORS.PINK};
    text-align: start;
  }

  > p {
    font-size: 1.4rem;
    color: ${({ theme }) => theme.COLORS.GRAY_800};
    text-align: start;
  }

  > h2 {
    font-size: 2.4rem;
    font-weight: 500;
    color: ${({ theme }) => theme.COLORS.GRAY_900};
    margin: 4.8rem 0;
  }

  > a {
    margin-top: 1rem;
    text-align: center;
    align-items: center;
    justify-items: center;
    color: ${({ theme }) => theme.COLORS.PINK};

    svg {
      height: 2.4rem;
      width: 2.4rem;
      position: relative;
      top: 0.6rem;
    }
  }
`

export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImg});
  background-size: cover;
`
