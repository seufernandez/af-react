import { SkeletonContainer, SkeletonItem } from './styles'

export function Skeleton() {
  return (
    <SkeletonContainer>
      <SkeletonItem>
        <div>&nbsp;</div>
      </SkeletonItem>
      <SkeletonItem>
        <div>&nbsp;</div>
      </SkeletonItem>
      <SkeletonItem>
        <div>&nbsp;</div>
      </SkeletonItem>

      <SkeletonItem>
        <div>&nbsp;</div>
      </SkeletonItem>

      <SkeletonItem>
        <div>&nbsp;</div>
      </SkeletonItem>

      <SkeletonItem>
        <div>&nbsp;</div>
      </SkeletonItem>
    </SkeletonContainer>
  )
}
