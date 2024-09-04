import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 10.5rem auto;
  grid-template-areas:
    "header"
    "content";
  padding: 0 5rem;

  main {
    grid-area: content;
    overflow-y: scroll;
    max-width: 113.7rem;
    height: 58.1rem;
    margin: 4rem auto 0;
    padding-right: 1.5rem;
  }
`

export const Content = styled.div`
  color: ${({ theme }) => theme.COLORS.GRAY_900};

  .back {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .rate {
    display: flex;
    align-items: center;
    gap: 1.9rem;
    margin: 2.4rem 0;

    h1 {
      font-size: 3.6rem;
      font-weight: 500;
    }
  }

  .user-wrapper {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    margin-bottom: 4rem;

    .user {
      display: flex;
      align-items: center;
      gap: 0.8rem;

      img {
        width: 1.6rem;
        border-radius: 50%;
        margin-right: 1.6rem;
        border: 1px solid ${({ theme }) => theme.COLORS.GRAY_700};
      }
    }

    .clock {
      display: flex;
      align-items: center;
      gap: 0.8rem;

      > svg {
        color: ${({ theme }) => theme.COLORS.PINK};
        width: 1.6rem;
        margin-left: 2rem;
      }
    }
  }

  p {
    text-align: justify;
    margin-top: 4rem;
    max-width: 111.3rem;
  }
`
