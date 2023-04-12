import { type MantineThemeOverride, rem } from '@mantine/core'

const components: MantineThemeOverride['components'] = {
  Button: {
    defaultProps: {
      size: 'md',
    },
    variants: {
      outline: (theme) => ({
        root: {
          color: theme.colors.gold[8],
          backgroundColor: theme.colors.dark[5],
          ...theme.fn.hover({
            backgroundColor: theme.fn.rgba(theme.colors.dark[6], 0.9),
          }),
        },
      }),
      gradient: (theme) => ({
        root: {
          padding: 1,
          color: theme.colors.gold[8],
          ...theme.fn.hover({ backgroundSize: 'auto' }),
        },
        inner: {
          width: '100%',
          borderRadius: '0.5rem',
        },
      }),
      subtle: (theme) => ({
        root: {
          ':active': {
            background: 'none',
          },
        },
      }),
    },
    styles: (theme) => ({
      root: {
        borderRadius: '0.5rem',
        transition: '100ms',
      },
    }),
  },
  Drawer: {
    styles: (theme) => ({
      inner: {
        width: 'calc(100vw - 18px)',
        right: 0,
        top: `calc(20px + ${rem(30)})`,
      },
      content: {
        paddingTop: 1,
        paddingLeft: 1,
        background: `linear-gradient(
          to bottom right, 
          rgba(133, 102, 0, 1), 
          rgba(255, 235, 59, 0), 
          rgba(255, 235, 59, 0.29), 
          rgba(255, 235, 59, 0), 
          rgba(133, 102, 0, 1))`,
        borderTopLeftRadius: 16,
        overflow: 'hidden',
        '::before': {
          content: "''",
          position: 'absolute',
          top: 1,
          left: 1,
          right: 0,
          bottom: 0,
          zIndex: -1,
          background: 'linear-gradient(180deg, #251900 0%, #000000 100%)',
          borderTopLeftRadius: 16,
        },
      },
      header: {
        padding: rem(24),
        justifyContent: 'center',
        background: 'none',
      },
      title: {
        color: theme.colors.gold[8],
      },
    }),
  },
  Stack: {
    styles: (theme) => ({
      root: {
        position: 'relative',
        padding: rem(14),
        fontSize: rem(12),
        color: theme.colors.gold[4],
        // background: 'linear-gradient(180deg, #000000 0%, #2E1F00 100%)',
        borderRadius: '1rem',

        '::before, ::after': {
          content: "''",
          position: 'absolute',
          zIndex: -1,
          borderRadius: '1rem',
        },
        '::before': {
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          background: `linear-gradient(
            135deg, 
            rgba(133, 102, 0, 1), 
            rgba(255, 235, 59, 0),
            rgba(255, 235, 59, 0.29),
            rgba(255, 235, 59, 0),
            rgba(133, 102, 0, 1)
          )`,
        },
        '::after': {
          top: 1,
          bottom: 1,
          left: 1,
          right: 1,
          background: 'linear-gradient(180deg, #000000, #2E1F00)',
        },
      },
    }),
  },
  Modal: {
    styles: {
      content: {
        backgroundColor: '#1F1700',
        borderRadius: rem(14),
        border: '1px solid #785C00',
      },
      header: {
        backgroundColor: 'transparent',
      },
      body: {
        padding: 0,
      },
    },
  },
  Text: {
    styles: (theme) => ({
      root: {
        color: theme.colors.gold[8],
      },
    }),
  },
  LoadingOverlay: {
    styles: {
      root: {
        'div:first-of-type': {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: '100%',
        },
      },
    },
  },
  Checkbox: {
    styles: {
      root: {
        width: '90%',
      },
      body: {
        alignItems: 'flex-start',
      },
      inner: {
        width: 'auto',
        height: '1rem',
        display: 'flex',
        alignItems: 'center',
      },
      input: {
        display: 'none',
      },
      icon: {
        transform: 'none',
        opacity: 1,
      },
      error: {
        display: 'none',
      },
    },
  },
  Notification: {
    defaultProps: {
      withCloseButton: false,
      // withBorder: false,
      radius: 'md',
    },
    styles: {
      root: {
        paddingLeft: '0.625rem',
        backgroundColor: '#808080',

        '::before': {
          display: 'none',
        },
      },
      body: {
        marginRight: 0,
      },
      description: {
        textAlign: 'center',
        color: '#fff',
      },
    },
  },
}

export default components
