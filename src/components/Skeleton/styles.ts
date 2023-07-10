import { keyframes, styled } from 'styled-components'

const skeletonAnimation = keyframes`
  0% {
    background-position: 100% 50%;
  }
  100% {
    background-position: -100% 50%;
  }
`

export const SkeletonContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  width: 80vw;

  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`

export const SkeletonItem = styled.div`
  width: 100%;
  height: 33rem;
  background: linear-gradient(90deg, #eee 25%, #f5f5f5 37%, #eee 63%);
  background-size: 200% 100%;
  animation: ${skeletonAnimation} 1.5s ease-in-out infinite;
  border-radius: 0.5rem;
`
