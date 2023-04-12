import React, { useMemo } from 'react'
import type { CheckboxProps, TextInputProps } from '@mantine/core'
import { Checkbox as MCheckbox, rem, TextInput } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'

import { Checked, EyeNotVisible, EyeVisible, UnChecked } from '@/components/Svgr'

TextInput.defaultProps = {
  size: 'md',
  rightSectionWidth: '3rem',
  styles: (theme) => ({
    root: {
      position: 'relative',
      width: '100%',
      marginBottom: '1rem',
      lineHeight: 1,

      ':last-of-type': {
        marginBottom: 0,
      },
    },
    label: {
      marginBottom: rem(4),
      fontSize: rem(14),
      paddingLeft: rem(14),
    },
    input: {
      paddingLeft: rem(14),
      fontSize: rem(14),
      lineHeight: 1,
      color: theme.colors.gold[8],
      borderRadius: '0.5rem',
      borderColor: theme.colors.dark[0],

      '::placeholder': {
        fontSize: rem(12),
        color: theme.colors.dark[0],
      },
    },
    error: {
      position: 'absolute',
      bottom: 0,
      transform: 'translateY(80%)',
      paddingLeft: rem(14),
      fontSize: rem(10),
    },
  }),
}

export const NormalInput = React.memo((props: TextInputProps) => <TextInput {...props} />)

export const PasswordInput = React.memo((props: TextInputProps) => {
  const [visible, handlers] = useDisclosure(false)

  const memoType = useMemo<React.HTMLInputTypeAttribute>(
    () => (visible ? 'text' : 'password'),
    [visible],
  )

  return (
    <TextInput
      type={memoType}
      rightSection={
        visible ? (
          <EyeVisible onClick={handlers.toggle} />
        ) : (
          <EyeNotVisible onClick={handlers.toggle} />
        )
      }
      {...props}
    />
  )
})

export const Checkbox = React.memo((props: CheckboxProps) => (
  <MCheckbox
    size='xs'
    icon={() => (props.checked ? <Checked /> : <UnChecked />)}
    sx={props.error ? { label: { color: '#e03131' } } : undefined}
    {...props}
  />
))
