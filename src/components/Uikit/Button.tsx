import styled from '@emotion/styled'
import type { ButtonProps } from '@mantine/core'
import { Button, createPolymorphicComponent, rem } from '@mantine/core'

Button.defaultProps = {
  variant: 'gradient',
}

export const CancelButton = createPolymorphicComponent<'button', ButtonProps>(styled(Button)`
  .mantine-Button-inner {
    background-image: linear-gradient(to bottom, #ffaa4f, #a16a12);
  }
`)

export const ConfirmButton = createPolymorphicComponent<'button', ButtonProps>(styled(Button)`
  .mantine-Button-inner {
    background-image: linear-gradient(to bottom, #ffea4f, #e8a333);
  }
`)

export const StepButton = createPolymorphicComponent<'button', ButtonProps>(styled(Button)`
  height: ${rem(42)};
  width: 100%;
  color: ${({ theme }) => theme.colors.gold[4]};
  background: linear-gradient(
    145deg,
    rgba(255, 235, 59, 1),
    rgba(255, 235, 59, 0),
    rgba(255, 235, 59, 0.29),
    rgba(255, 235, 59, 0),
    rgba(255, 235, 59, 1)
  );

  .mantine-Button-inner {
    background-color: #382b00;
  }

  .mantine-Button-label {
    font-size: 1rem;
  }
`)
