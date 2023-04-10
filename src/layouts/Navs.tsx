import React, { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { Link, useLocation } from 'react-router-dom'
import styled from '@emotion/styled'
import { Flex, Group, rem } from '@mantine/core'

import { NavIcon } from '@/components/Svgr'

interface Props {
  visible: boolean
}

const Navs: React.FC<Props> = ({ visible }) => {
  const { t } = useTranslation()
  const { pathname } = useLocation()

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
        href: '/promotion',
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
        href: '/deposit',
      },
      {
        defaultIcon: <NavIcon.Services />,
        selectedIcon: <NavIcon.ServicesSelected />,
        name: t('nav.services'),
        href: '/services',
      },
    ],
    [t],
  )

  if (!visible) return null
  return (
    <NavsWrapper grow spacing={0}>
      {navs.map((nav) => (
        <NavButton key={nav.href} to={nav.href}>
          {pathname === nav.href ? nav.selectedIcon : nav.defaultIcon}
          <span>{nav.name}</span>
        </NavButton>
      ))}
    </NavsWrapper>
  )
}

export default Navs

const NavsWrapper = styled(Group)`
  position: fixed;
  z-index: ${({ theme }) => theme.other.zIndex.footer};
  bottom: 0;
  left: 0;
  right: 0;
  height: ${({ theme }) => theme.other.navHeight};
  background-color: ${({ theme }) => theme.black};
`

const NavButton = styled(Link)`
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
  width: 55px;
  height: 55px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.dark[6]};
  border: 1px solid ${({ theme }) => theme.colors.gold[6]};
  box-shadow: 0px 0px 8px 2px ${({ theme }) => theme.colors.gold[7]};
`

BBWIcon.defaultProps = {
  align: 'center',
  justify: 'center',
}
