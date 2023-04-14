import React, { useMemo, useRef } from 'react'
import Autoplay from 'embla-carousel-autoplay'
import { useModel } from 'foca'
import styled from '@emotion/styled'
import { Carousel } from '@mantine/carousel'
import { rem, Text } from '@mantine/core'
import { useHover } from '@mantine/hooks'

import { homeImages } from '@/assets/images'
import type { RouterType } from '@/components/HOC'
import { type TranslationType, WithRouter, WithTranslation } from '@/components/HOC'
import { useStayTuned } from '@/components/Uikit'
import { commonModel, userModel } from '@/models'

const Banners: React.FC<TranslationType & RouterType> = ({ t, navigate }) => {
  const { banners } = useModel(commonModel)
  const { isLogin } = useModel(userModel)
  const toastStayTuned = useStayTuned()
  const { hovered: loginHovered, ref: loginRef } = useHover<HTMLButtonElement>()
  const { hovered: registerHovered, ref: registerRef } = useHover<HTMLButtonElement>()
  const autoplay = useRef(Autoplay({ delay: 2500 }))

  const loginConfig = useMemo(() => {
    return {
      ...(isLogin
        ? {
            path: '/deposit',
            text: t('members.deposit'),
          }
        : {
            path: '/sign?signType=login',
            text: t('sign.login'),
          }),
      btnBg: homeImages[loginHovered ? 'loginClicked' : 'login'],
    }
  }, [isLogin, loginHovered, t])

  const registerConfig = useMemo(() => {
    return {
      ...(isLogin
        ? {
            path: '/witdrawal',
            text: t('members.witdrawal'),
          }
        : {
            path: '/sign?signType=register',
            text: t('sign.register'),
          }),
      btnBg: homeImages[registerHovered ? 'registerClicked' : 'register'],
    }
  }, [isLogin, registerHovered, t])

  return (
    <Wapper>
      <Carousel
        height={rem(200)}
        withControls={false}
        loop
        plugins={[autoplay.current]}
        onMouseEnter={autoplay.current.stop}
        onMouseLeave={autoplay.current.reset}
      >
        {banners.map((banner, index) => (
          <Carousel.Slide key={index}>
            <BannerLink href={banner.link} style={{ backgroundImage: `url(${banner.pic})` }} />
          </Carousel.Slide>
        ))}
      </Carousel>
      <ButtonWrapper>
        <SignButton
          className='login'
          ref={loginRef}
          onClick={() => (isLogin ? toastStayTuned() : navigate(loginConfig.path))}
        >
          <img
            alt='login'
            src={loginConfig.btnBg['1x']}
            srcSet={`${loginConfig.btnBg['1x']}, ${loginConfig.btnBg['2x']} 2x`}
          />
          <Text size='xs' weight='bold'>
            {loginConfig.text}
          </Text>
        </SignButton>
        <SignButton
          ref={registerRef}
          onClick={() => (isLogin ? toastStayTuned() : navigate(registerConfig.path))}
        >
          <img
            alt='register'
            src={registerConfig.btnBg['1x']}
            srcSet={`${registerConfig.btnBg['1x']}, ${registerConfig.btnBg['2x']} 2x`}
          />
          <Text size='xs' weight='bold'>
            {registerConfig.text}
          </Text>
        </SignButton>
      </ButtonWrapper>
    </Wapper>
  )
}

export default WithTranslation(WithRouter(Banners)) as React.FC

const Wapper = styled.div`
  position: relative;
`

const ButtonWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: calc(36 / 375 * 100vw);
  background-image: url(./images/home/banner_border.png);
  background-size: 100% 100%;
`

const BannerLink = styled.a`
  display: block;
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
`

const SignButton = styled.button`
  position: absolute;
  z-index: 1;
  right: 0;
  bottom: 0;
  padding: 0;
  height: auto;
  width: 24%;
  border: none;
  height: calc(30 / 375 * 100vw);
  transition: all 50ms;

  img {
    position: absolute;
    z-index: -1;
    height: 100%;
    right: 0;
    bottom: 0;
  }

  &.login {
    right: 25.4%;
  }

  &.login img {
    right: 50%;
    transform: translateX(50%);
  }

  .mantine-Text-root {
    color: #fff;
  }
`
