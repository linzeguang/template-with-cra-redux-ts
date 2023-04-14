import React, { useEffect, useState } from 'react'
import CountUp from 'react-countup'
import styled from '@emotion/styled'
import { Flex, rem } from '@mantine/core'
import { useInterval } from '@mantine/hooks'

import { homeImages } from '@/assets/images'

const PrizePool: React.FC = () => {
  const [prevAmount, setPrevAmount] = useState(0)
  const [amount, setAmount] = useState(Number(Date.now().toString().substring(6)))
  const { start, stop } = useInterval(() => {
    setPrevAmount(amount)
    setAmount((prev) => prev + Math.ceil(Math.random() * 10000))
  }, 5000)

  useEffect(() => {
    start()
    return () => stop()
  }, [start, stop])

  return (
    <Wrapper>
      <StyledCountUp start={prevAmount} end={amount} />
    </Wrapper>
  )
}

export default PrizePool

const Wrapper = styled(Flex)`
  position: relative;
  height: ${rem(76)};
  margin: ${rem(10)} 0;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(${homeImages['prizePool']['1x']});

  ${({ theme }) => theme.other['2x']} {
    background-image: url(${homeImages['prizePool']['2x']});
  }
`

const StyledCountUp = styled(CountUp)`
  position: absolute;
  right: 8%;
  bottom: 22%;
  width: 60%;
  font-size: ${rem(32)};
  font-family: Microsoft YaHei, Helvetica Neue;
  font-weight: bolder;
  line-height: 1;
  letter-spacing: ${rem(8)};
  text-align: center;
  background-image: linear-gradient(
    180deg,
    #fffff8 15.62%,
    #fff145 46.35%,
    #ffbf1a 57.29%,
    #f19903 80.21%
  );
  background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke: 0.5px #fff58d;
`
