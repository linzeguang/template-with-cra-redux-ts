import { type MantineThemeOverride, rem } from '@mantine/core'

const components: MantineThemeOverride['components'] = {
  Button: {
    defaultProps: {
      gradient: { from: '#fef924', to: '#522d00', deg: 180 },
    },
    variants: {
      outline: (theme) => ({
        root: {
          color: theme.colors.gold[8],
          background: theme.colors.gold[9],
        },
      }),
      gradient: (theme) => ({
        root: {
          padding: 1,
          color: theme.colors.dark[7],
        },
        inner: {
          width: '100%',
          borderRadius: '0.5rem',
        },
      }),
    },
    styles: {
      root: {
        borderRadius: '0.5rem',
        transition: '50ms',
      },
    },
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
}

export default components
