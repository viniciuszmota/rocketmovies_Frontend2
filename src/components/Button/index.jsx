/* eslint-disable react/prop-types */
import { Container } from "./styles"

export function Button({
  icon: Icon,
  $trash,
  title,
  maxWidth,
  loading = false,
  ...rest
}) {
  return (
    <Container
      type="button"
      $trash={$trash}
      style={{ maxWidth: maxWidth }}
      disabled={loading}
      {...rest}
    >
      {Icon && <Icon size={20} />}
      {loading ? "Carregando..." : title}
    </Container>
  )
}
