import React, { useCallback } from 'react'
import { useLoading, useModel } from 'foca'
import styled from '@emotion/styled'
import type { TextProps } from '@mantine/core'
import { createPolymorphicComponent, Flex, Grid, rem, Text, Transition } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import Affix from '@uiw/react-affix'

import type { GameType } from '@/apis'
import { homeInterface } from '@/apis'
import type { RouterType, TranslationType } from '@/components/HOC'
import { WithRouter, WithTranslation } from '@/components/HOC'
import { collectImg, NoCollect as NoCollectSvg } from '@/components/Svgr'
import { Loading, NoData, PageMain, useToast } from '@/components/Uikit'
import { commonModel, userModel } from '@/models'

import NoCollect from './NoCollect'
import Platforms from './Platforms'

const Games: React.FC<TranslationType & RouterType> = ({ navigate, t }) => {
  const toast = useToast()
  const { isLogin } = useModel(userModel)
  const { gameTypes, gameList, currentType } = useModel(commonModel)
  const loading = useLoading(commonModel.fetchHotGame, commonModel.fetchGameList)
  // 打开游戏loading
  const [opened, handlers] = useDisclosure(false)

  // 点击游戏
  const handleGameClick = useCallback(
    async (id: number) => {
      if (!isLogin) return navigate('/sign')
      handlers.open()
      try {
        const { data, isSuccess, message } = await homeInterface.launchGame(id)
        if (isSuccess) window.open(data, '_self')
        else toast(message)
      } catch (error) {
        //
      }
      handlers.close()
    },
    [handlers, isLogin, navigate, toast],
  )

  return (
    <Wrapper>
      <Affix className='game-nav'>
        <TypeNav
          {...{
            id: -1,
            logo: collectImg,
            name: t('game.type.collect'),
            pid: -1,
            type: 'COLLECT',
          }}
        />
        {gameTypes.map((gameNav) => (
          <TypeNav key={gameNav.type} {...gameNav} />
        ))}
      </Affix>
      <GamesWrapper>
        {currentType !== 'COLLECT' && <Platforms />}
        <Loading visible={loading} loaderStyle={{ marginTop: '-40vh' }}>
          {gameList.length ? (
            <>
              <Loading visible={opened} overlayOpacity={0.6} />
              <Grid gutter='sm'>
                {gameList?.map((item, index) => (
                  <Grid.Col
                    key={item.id + '' + index}
                    span={4}
                    onClick={() => handleGameClick(item.id)}
                  >
                    <ImageBox>
                      {currentType === 'COLLECT' && <Corner>JILI</Corner>}
                      <NoCollectIcon />
                      <GameImage src={item.logo} alt={item.name} />
                    </ImageBox>
                    <Text size='sm' lineClamp={1} align='center' mt='4px'>
                      {item.name}
                    </Text>
                  </Grid.Col>
                ))}
              </Grid>
            </>
          ) : currentType === 'COLLECT' ? (
            <NoCollect />
          ) : (
            <NoData text='No game project' mt='10vh' />
          )}
        </Loading>
      </GamesWrapper>
    </Wrapper>
  )
}

export default WithTranslation(WithRouter(Games)) as React.FC

const Wrapper = styled(Flex)`
  position: relative;
  margin-top: -${rem(10)};
  .game-nav {
    width: ${rem(70)};
    padding-top: ${rem(10)};
    padding-bottom: ${rem(10)};
    background: linear-gradient(to bottom, transparent, #000, #000);
    height: ${({ theme }) => `calc(100vh - ${theme.other.navHeight})`};
    overflow-y: scroll;
    &::-webkit-scrollbar {
      display: none;
    }
  }
`

const TypeButton = styled.button<{ selected: boolean }>`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: ${rem(70)};
  height: ${rem(74)};
  justify-content: center;
  overflow: hidden;
  transform: translateZ(0px);
  filter: grayscale(${({ selected }) => (selected ? 0 : 0.8)});
  transition: all 200ms;

  ::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(to right, transparent, #414141, transparent);
  }
  &:last-of-type::after {
    display: none;
  }

  img {
    width: ${rem(28)};
  }

  .mantine-Text-root {
    margin-top: ${rem(8)};
    color: ${({ theme }) => theme.colors['gold'][7]};
  }
`

const TypeNav: React.FC<GameType> = (props) => {
  const { type, logo, name } = props
  const { currentType } = useModel(commonModel)
  return (
    <TypeButton
      selected={currentType === type}
      onClick={() => commonModel.changeCurrentType(props)}
    >
      <Transition
        mounted={currentType === type}
        duration={200}
        timingFunction='ease'
        transition={{
          common: { backgroundSize: '0 100%' },
          in: { opacity: 1, backgroundSize: '100%' },
          out: { opacity: 0, backgroundSize: '0' },
          transitionProperty: 'all',
        }}
      >
        {(styles) => <ActiveBg style={styles} />}
      </Transition>
      <img src={logo} alt={name} />
      <Text size='xs'>{name}</Text>
    </TypeButton>
  )
}

const ActiveBg = styled.div`
  position: absolute;
  z-index: -1;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-repeat: no-repeat;
  background-image: url(./images/home/game_nav.png),
    linear-gradient(to left, rgb(226, 200, 50, 0.3), rgba(201, 175, 25, 0));
  background-position: right;

  ::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    width: 2px;
    background: linear-gradient(to bottom, transparent, rgba(255, 232, 102, 0.8), transparent);
    filter: blur(1px);
  }
`

const GamesWrapper = styled(PageMain)`
  position: relative;
  flex: 1;
  padding-bottom: 1.5rem;
`

const ImageBox = styled.div`
  position: relative;
  border-radius: ${rem(12)};
  border: 1px solid ${({ theme }) => theme.colors.gold[7]};
  overflow: hidden;
`

const GameImage = styled.img`
  display: block;
  width: 100%;
`

const Corner = createPolymorphicComponent<'div', TextProps>(styled(Text)`
  position: absolute;
  top: -1px;
  left: -1px;
  font-size: 10px;
  padding: 0 10px;
  background-color: rgba(254, 176, 40, 0.8);
  border-bottom-right-radius: 6px;
`)

const NoCollectIcon = styled(NoCollectSvg)`
  position: absolute;
  right: ${rem(2)};
  top: ${rem(2)};
  width: ${rem(12)};
  height: ${rem(12)};
  padding: ${rem(3)};
  box-sizing: content-box;
`
