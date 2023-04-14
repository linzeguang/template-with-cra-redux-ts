import React, { useEffect, useState } from 'react'
import { useModel } from 'foca'
import styled from '@emotion/styled'
import { createStyles, Flex, rem, Text } from '@mantine/core'
import Affix from '@uiw/react-affix'

import { Rectangle } from '@/components/Svgr'
import { Drawer } from '@/components/Uikit'
import { commonModel } from '@/models'

const useStyles = createStyles((theme) => ({
  affix: {
    paddingTop: rem(10),
    paddingBottom: rem(10),
    backgroundColor: '#1a1a1a',
  },
  button: {
    position: 'relative',
    width: '100%',
    height: rem(38),
    transform: 'translateZ(0)',

    '::after': {
      content: "''",
      position: 'absolute',
      zIndex: -2,
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'linear-gradient(to bottom, #fef924, #522d00)',
      borderRadius: '0.5rem',
    },
    '::before': {
      content: "''",
      position: 'absolute',
      zIndex: -1,
      top: 1,
      left: 1,
      right: 1,
      bottom: 1,
      background: '#303030',
      borderRadius: '0.5rem',
    },
  },
  platformGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '14px 12px',
  },
  platform: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: rem(44),
    padding: '0 10px',

    img: {
      height: '40%',
    },
    borderRadius: '0.5rem',
    background: 'linear-gradient(180deg, #303030 0%, #303030 100%)',
    filter: 'grayscale(100%)',
  },
  selected: {
    background: 'linear-gradient(180deg, #FFAA4F 0%, #A16A12 100%)',
    filter: 'grayscale(0)',
  },
}))

const Platforms: React.FC = () => {
  const { classes } = useStyles()
  const { gamePlatform, gamePlatforms } = useModel(commonModel)
  const [currentPlatform, setCurrentPlatform] = useState(gamePlatform)

  useEffect(() => {
    setCurrentPlatform(gamePlatform)
  }, [gamePlatform])

  return (
    <Affix className={classes.affix}>
      <Drawer
        title='Vendor'
        targetButtonProps={{ className: classes.button }}
        targetNode={
          <Flex sx={{ width: '100%' }} align='center' justify='center'>
            <Current>
              <img src={gamePlatform.logo} alt={gamePlatform.name} />
              <Text size='sm'>{gamePlatform.name}</Text>
            </Current>
            <Rectangle style={{ paddingRight: rem(12), boxSizing: 'content-box' }} />
          </Flex>
        }
        onConfirm={() => {
          commonModel.changeGamePlatform(currentPlatform)
        }}
      >
        <div className={classes.platformGrid}>
          {gamePlatforms.map((platform, index) => (
            <button
              key={platform.id + '' + index}
              className={`${classes.platform} ${
                platform.id === currentPlatform.id ? classes.selected : ''
              }`}
              onClick={() => setCurrentPlatform(platform)}
            >
              <img src={platform.logo} alt={platform.name} />
              <Text
                size='xs'
                sx={{ marginLeft: 8, lineHeight: 1, wordBreak: 'break-all' }}
                align='left'
              >
                {platform.name}
              </Text>
            </button>
          ))}
        </div>
      </Drawer>
    </Affix>
  )
}

export default Platforms

const Current = styled(Flex)`
  flex: 1;
  align-items: center;
  padding: 0 ${rem(12)};

  img {
    height: ${rem(20)};
  }

  .mantine-Text-root {
    margin-left: ${rem(8)};
    line-height: 1;
  }
`
