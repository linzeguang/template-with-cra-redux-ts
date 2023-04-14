import React, { useCallback, useMemo } from 'react'
import CountUp from 'react-countup'
import { useModel } from 'foca'
import styled from '@emotion/styled'
import { Button, Flex, rem, Skeleton, Text } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'

import { membersImages } from '@/assets/images'
import type { TranslationType } from '@/components/HOC'
import { WithTranslation } from '@/components/HOC'
import { MembersIcon, WalletRefresh } from '@/components/Svgr'
import { Image, PageMain, useStayTuned } from '@/components/Uikit'
import { Enum } from '@/constants'
import { userModel } from '@/models'

const Info: React.FC<TranslationType> = ({ t }) => {
  const toastStayTuned = useStayTuned()
  const { memberInfo, balance } = useModel(userModel)
  const [refresh, handlers] = useDisclosure(false)

  const amount = useMemo(() => {
    if (balance) return balance.toFixed(2).split('.')
    else return [0, 0]
  }, [balance])

  const handleRefresh = useCallback(async () => {
    handlers.open()
    await userModel.fetchWalletInfo()
    handlers.close()
  }, [handlers])

  return (
    <Wrapper>
      <AvatarWrapper>
        <StyledAvatar />
        <Text size='md' weight={400}>
          {memberInfo?.account}
        </Text>
      </AvatarWrapper>
      <Image
        width='100%'
        src={membersImages['info']['1x']}
        srcSet={`${membersImages['info']['1x']}, ${membersImages['info']['2x']} 2x`}
      />
      <AmoutRow>
        <Skeleton visible={refresh}>
          <CountUp
            prefix={Enum.CurrencySymbols['PHL'] + ' '}
            end={Number(amount[0])}
            style={{ fontSize: rem(24) }}
          />
          <CountUp
            prefix={Number(amount[1]) > 10 ? '.' : '.0'}
            end={Number(amount[1])}
            style={{ fontSize: rem(16) }}
          />
        </Skeleton>
        <Text className='label'>{t('wallet.balance')}</Text>
      </AmoutRow>
      <WalletRefreshButton onClick={handleRefresh} refresh={refresh}>
        <WalletRefresh />
      </WalletRefreshButton>
      <StyledButtonGroup>
        <button onClick={toastStayTuned}>{t('members.deposit')}</button>
        <button onClick={toastStayTuned}>{t('members.witdrawal')}</button>
      </StyledButtonGroup>
    </Wrapper>
  )
}

export default WithTranslation(Info) as React.FC

const Wrapper = styled(PageMain)`
  position: relative;
  padding-top: ${rem(44)};
`

const AvatarWrapper = styled(Flex)`
  margin: 0 8% ${rem(18)};
  align-items: center;
  gap: 10px;
`

const StyledAvatar = styled(Flex)`
  position: relative;
  align-items: center;
  justify-content: center;
  width: ${rem(52)};
  height: ${rem(52)};
  padding: ${rem(4)};
  background: url(${MembersIcon.AvatarBorder});
  background-size: 100%;

  ::before {
    content: '';
    width: 100%;
    height: 100%;
    border: 2px solid #f8d286;
    border-radius: 50%;
    background-color: #2e1c00;
    vertical-align: middle;
  }

  ::after {
    position: absolute;
    content: 'BBW';
    font-size: ${rem(14)};
    background: linear-gradient(180deg, #ffea4f -6.27%, #b58b00 99.85%);
    background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke: 0.5px #ffeb3b;
  }
`

const AmoutRow = styled(Flex)({
  position: 'absolute',
  zIndex: 1,
  left: '15%',
  bottom: 'calc(150 / 375 * 100vw)',
  fontWeight: 700,
  alignItems: 'baseline',
  color: '#fff',
  lineHeight: 1,

  '::after': {
    content: "''",
    position: 'absolute',
    bottom: rem(-8),
    left: 0,
    right: 0,
    height: rem(2),
    background: 'linear-gradient(to right, #fff, transparent)',
  },

  '.label': {
    position: 'absolute',
    bottom: 0,
    transform: 'translateY(180%)',
    whiteSpace: 'nowrap',
    fontWeight: 'normal',
    fontSize: rem(12),
  },
})

const WalletRefreshButton = styled.button<{ refresh: boolean }>`
  position: absolute;
  bottom: calc(130 / 375 * 100vw);
  right: 14%;
  width: ${rem(32)};
  height: ${rem(32)};
  padding: ${rem(8)};
  border-radius: 50%;
  background-image: linear-gradient(to bottom right, #fde5b4, #e5a62d);

  transform: translateZ(0px);

  ::before {
    content: '';
    position: absolute;
    bottom: 2px;
    top: 2px;
    left: 2px;
    right: 2px;
    z-index: -1;
    background-color: #625400;
    background-image: radial-gradient(50% 50% at 50% 50%, rgba(50, 43, 0, 0) 70%, #000000 100%);
    border-radius: 50%;
  }

  @keyframes rotate {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(-360deg);
    }
  }

  svg {
    width: 100%;
    height: 100%;
    ${({ refresh }) => (refresh ? 'animation: rotate infinite 1000ms linear;' : '')}
  }
`

const StyledButtonGroup = styled(Button.Group)`
  position: absolute;
  bottom: ${rem(32)};
  left: 50%;
  height: ${rem(36)};
  transform: translateX(-50%);
  border: 1px solid #ffc300;
  border-radius: 0.5rem;
  overflow: hidden;

  button {
    width: ${rem(124)};
    font-weight: 700;
    font-size: ${rem(14)};
    color: ${({ theme }) => theme.colors.gold[8]};
    background-image: linear-gradient(180deg, #45320d 0%, #bd9b57 47.59%, #36270b 100%);
    transition: font-size 200ms;
    & + button {
      border-left: 1px solid #ffc300;
    }

    :active {
      font-size: ${rem(12)};
    }
  }
`
