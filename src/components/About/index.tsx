/** @jsx jsx */
import React from 'react'
import { jsx, css } from '@emotion/react'
import { Route, Switch, useHistory } from 'react-router-dom'
import { rem } from 'polished'

import Panel, {
  PanelBody,
  PanelHeader,
  PanelHeading,
} from '../../components/Panel'
import Page from '../Page'

import {
  P,
  Spacer,
  TableRow,
  Seperator,
  Button,
  TwoCol,
  Col,
} from '../Elements'
import AddressLink from '../AddressLink'

import { formatPercent } from '../../utils/number'

const AboutPanel = () => {

  return (
    <Panel  css={css`
                margin-top: 75px;
              `}>
      <PanelHeader>
        <PanelHeading  css={css`
                width: 100%; text-align: center;
              `}>About DaiDynamic</PanelHeading>
      </PanelHeader>
      <PanelBody>
        <P>
         DaiDynamic is a new generation seigniorage token that solves problems of current seigniorage tokens — mainly ESD and it's clones. What are these problems and how do we solve them?
        </P>
        <P>
        - <strong>In ESD and its clones epochs are meant to be initiated by users, however bots do that and drain liquidity.</strong> This is extremely unfair for the new buyers and holders, especially in the bootstrapping phase. Bots eat the liquidity people put-in and they systematically reduce the token price by immediately selling high number of tokens they earn in every epoch. Some clones tried to solve this by paying a specific amount in DAI or USDC to advance the epoch, however this solution still leaves the risk of protocol failure – epoch not starting because of a higher gas fee to start the epoch than it’s reward. <strong>DaiDynamic solves this by handing the responsibility of starting the epoch to DAO</strong>. DAO uses the funds that come from pre-sale and advance rewards to pay for gas fees to advance every epoch. This removes the risk of protocol failure, bots draining the liquidity and token dumps in every epoch.
         </P>
        <P>
        - <strong>In ESD and its clones there is a limited supply mechanism that creates early holders (usually bots) profiting massively.</strong> Early users own great percent of liquidity pools and they sell their tokens to massively reduce the price at launch, as well as later on after the bootstrap. <strong>DaiDynamic solves this by initial swap offering of 1$ DAID that continues for 1 week.</strong> This is a great incentive for early buyers and enough time for everybody to invest in DAID fairly. All ESD clones without any exception had price appreciation of more than 3$ after the launch so earning at least 3x will be a great incentive to create early DAID community, create seeding for advancing epochs and create seeding for liquidity pools without diluting them — to offer high returns for farming. This is will also be great seed capital for DaiDynamic team to invest in professional paid marketing in the boostrap phase that will benefit holders.
         </P>
        <P>
        - <strong>In ESD and its clones there is a long lockup period for every action that seriously effects usability.</strong> While staging lockup period is important for the security of the system, there is no use of locking people’s money for hours and days. If a person is going to pull his money and sell, he is going to pull his money and sell because he wants to profit. If he will wait to earn rewards, he will wait to earn rewards because they compound. He may change his mind and paying gas fees for every change is enough. It’s proven from previous systems, especially in Binance and Bzx, that staking with locks only cause usability problems. <strong>DaiDynamic solves this by reducing the lockup periods to minimum, 1 epoch for both DAO and LP lockups, just enough to maintain system security</strong>.
        </P>
        <P>
        - <strong>In ESD and its clones there is an extreme token minting before and after the bootstrap period.</strong> You can check the charts of DSD, ZAI, TSD, PENN and DAIQ to see it's proof. They went down to below 1$ in few weeks, even to 0.02$ prices, all because of extreme minting in boostrap phase as well as extreme pre-mining. For example, TSD had supply of 24M at it’s 13th day from the launch with a price of 0.06$. PENN had 5.5M at its 8th day with price of 0.13$. ZAI had 400M at its 26th day with price of 0.015$. This much supply obviously leads to no one buying coupons to increase the price so the protocol fails. <strong>DaiDynamic solves this by dynamically limiting it’s supply to maximum 30M to be distributed in phase of 3 years.</strong> Presale supply of DaiDynamic is 2M. The expansion phase supply is 3M that will be distributed in its 1 month expansion dynamically. The rest of the 25 million will be distributed in 3 years, slowly and dynamically to keep the price close to 1$ peg.
        </P>
      </PanelBody>
    </Panel>
  )
}

const About = () => {
  const history = useHistory()

  return (
    <Page>
      <TwoCol>
        <Switch>
          <Route>
            <Col
              css={css`
                width: 100%;
              `}
            >
              <AboutPanel />
            </Col>
          </Route>
        </Switch>
      </TwoCol>
    </Page>
  )
}

export default About


// <P>
// - <strong>In ESD and its clones system owners experiment with people’s money.</strong> We have seen this in ZAI printing bug that made people lose considerable amounts. Other solutions did experiments of pre-mining, making system owners earn while making holders lose with “stablecoin” prices going to down to 0.01$. <strong>DaiDynamic is not experiment because people’s money can’t be something we can have the arduousity to experiment on. It’s mature.</strong> We created DAID using one year experience we got from early ESD-like experiments, ESD, ESD clones and losing money in some of them as other people did. We removed the common bugs such as the ZAI bug, covered the areas that made people lose money and battle-tested the code. This is why DaiDynamic has no proxy smart contracts that can be changed by governance proposals as they did in failing systems. We won’t listen the feature requests for smart contract changes at all, because smart contracts are not meant to be changed. They are immutable and one of the most important rules of Blockchain is immutability.
// </P>
