export default props => {
  const { allowed=[], owned, children } = props;
  return allowed.includes(owned)
    ? children
    : '403 not permission'
}
