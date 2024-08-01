# 0x03-React_component

## [Component Life Cycle]()

H: Human,
LC: Life Cylce
C: Component
P: Phase

The component in React has a life cycle which is close to human LC, i mean by H LC

     Born -> Grows -> Die

we can say that the C has the same

- P1: Mounting
  - It all about creating the component and insert it into
    the DOM
    - we use Constructor method in this case
- P2: Updating
  - The C grows, by receivig new updates
    - we use ComponentDidMount()
- P3: Unmounting
  - The final P, when a React C gets removed from DOM
    - we use ComponentWillUnmount()
