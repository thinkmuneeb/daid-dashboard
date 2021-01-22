import { useEffect, useState } from 'react'
import BigNumber from 'bignumber.js'

import { getLastPriceEvent, getTokenBalance } from '../utils/infura'
import { toTokenUnitsBN } from '../utils/number'
import { DAID, UNI, DAI, DAIDS } from '../constants/tokens'
import { atom, useRecoilState } from 'recoil'
// import { useEpoch } from './epoch'

export const spotPriceAtom = atom({
  key: 'SpotPrice',
  default: new BigNumber(1),
})

export const usePrices = () => {
  const [twapPrice, setTwapPrice] = useState(new BigNumber(0))
  const [spotPrice, setSpotPrice] = useRecoilState(spotPriceAtom)

  // const { epoch } = useEpoch()

  useEffect(() => {
    let isCancelled = false

    let update = async () => {
      if (isCancelled) {
        return
      }
      const [pairBalanceDaidStr, pairBalanceDaiStr] = await Promise.all([
        getTokenBalance(DAID.addr, UNI.addr),
        getTokenBalance(DAI.addr, UNI.addr),
        getLastPriceEvent(DAIDS.addr),
      ])

      const spotPrice = toTokenUnitsBN(
        pairBalanceDaiStr,
        DAI.decimals,
      ).dividedBy(toTokenUnitsBN(pairBalanceDaidStr, DAID.decimals))

      // console.log(priceEvent)

      // const prevPrice = toTokenUnitsBN(priceEvent.data.price, 30)

      setTwapPrice(spotPrice.isFinite() ? spotPrice : new BigNumber('1'))
      setSpotPrice(spotPrice.isFinite() ? spotPrice : new BigNumber('1'))
    }
    update()
    const id = setInterval(update, 10000)

    return () => {
      isCancelled = true
      clearInterval(id)
    }
  }, [setSpotPrice])

  return {
    twapPrice,
    spotPrice,
  }
}
