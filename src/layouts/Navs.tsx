import React, { useMemo } from 'react'
import styled from '@emotion/styled'
import { Flex, Group, rem } from '@mantine/core'

import type { RouterType, TranslationType } from '@/components/HOC'
import { WithRouter, WithTranslation } from '@/components/HOC'
import { NavIcon } from '@/components/Svgr'
import { useStayTuned } from '@/components/Uikit'

interface Props {
  visible: boolean
}

const Navs: React.FC<Props & TranslationType & RouterType> = ({
  visible,
  t,
  pathname,
  navigate,
}) => {
  const toastStayTuned = useStayTuned()
  const navs = useMemo(
    () => [
      {
        defaultIcon: <NavIcon.Members />,
        selectedIcon: <NavIcon.MembersSelected />,
        name: t('nav.members'),
        href: '/members',
      },
      {
        defaultIcon: <NavIcon.Promotion />,
        selectedIcon: <NavIcon.PromotionSelected />,
        name: t('nav.promotion'),
        // href: '/promotion',
      },
      {
        defaultIcon: (
          <BBWIcon>
            <NavIcon.BBW />
          </BBWIcon>
        ),
        selectedIcon: (
          <BBWIcon>
            <NavIcon.BBWSelected />
          </BBWIcon>
        ),
        name: t('nav.home'),
        href: '/',
      },
      {
        defaultIcon: <NavIcon.Deposit />,
        selectedIcon: <NavIcon.DepositSelected />,
        name: t('nav.deposit'),
        // href: '/deposit',
      },
      {
        defaultIcon: <NavIcon.Services />,
        selectedIcon: <NavIcon.ServicesSelected />,
        name: t('nav.services'),
        // href: '/services',
      },
    ],
    [t],
  )

  if (!visible) return null
  return (
    <NavsWrapper grow spacing={0}>
      {navs.map((nav) => (
        <NavButton
          key={nav.name}
          onClick={() => {
            if (nav.href) navigate(nav.href)
            else toastStayTuned()
          }}
        >
          {pathname === nav.href ? nav.selectedIcon : nav.defaultIcon}
          <span>{nav.name}</span>
        </NavButton>
      ))}
    </NavsWrapper>
  )
}

export default WithTranslation(WithRouter(Navs)) as React.FC<Props>

const NavsWrapper = styled(Group)`
  position: fixed;
  z-index: ${({ theme }) => theme.other.zIndex.footer};
  bottom: 0;
  left: 0;
  right: 0;
  height: ${({ theme }) => theme.other.navHeight};
  background-color: ${({ theme }) => theme.black};
`

const NavButton = styled.a`
  position: relative;
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  span {
    padding-top: 48%;
    font-size: ${rem(12)};
    color: ${({ theme }) => theme.colors.gold[8]};
  }

  > svg,
  > div {
    position: absolute;
    bottom: 40%;
  }
`

const BBWIcon = styled(Flex)`
  width: ${rem(55)};
  height: ${rem(55)};
  border-radius: 50%;
  background: radial-gradient(#261d00, #322500, #4d3b00);
  border: 1px solid ${({ theme }) => theme.colors.gold[6]};
  box-shadow: 0px -2px 8px ${({ theme }) => theme.fn.rgba(theme.colors.gold[7], 0.57)},
    0px 2px 8px ${({ theme }) => theme.fn.rgba(theme.colors.gold[7], 0.57)};
`

BBWIcon.defaultProps = {
  align: 'center',
  justify: 'center',
}
