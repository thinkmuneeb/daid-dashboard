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


const  BasicsPanel = () => {

  return (
    <Panel css={css`
                margin-top: 75px;
              `}>
      <PanelHeader>
        <PanelHeading>Basics</PanelHeading>
      </PanelHeader>
      <PanelBody>
         <P>
        Epoch Length: 2 hours
        </P>
         <P>
        Advance() incentive: None
        </P>
         <P>
        DAO Lockup: 1 Epoch
        </P>
        <P>
        LP Lockup: 1 Epoch
        </P>
         <P>
        Boostrap Period: 100 Epochs
        </P>
      </PanelBody>
    </Panel>
  )
}



const  ContractsPanel = () => {

  return (
    <Panel css={css`
                margin-top: 75px;
              `}>
      <PanelHeader>
        <PanelHeading>Contracts</PanelHeading>
      </PanelHeader>
      <PanelBody>
         <P>
        DAID:0x7bf5898a9c24818a90d9763bbf4cd1432645c17f
        </P>
         <P>
        DAO:0x68098cff6338425cd1a253a9a26eF63712646e46
        </P>
        <P>
        LP:0x3f616C39dF61dEB31B8574E9BB537B8E95C6367a
        </P>
         <P>
        Oracle:0x26eefc4a137c844ea8f011bec0ccb83265fc1b57
        </P>
         <P>
        Uniswap:0x190f5cd36c49e4d1b67166356aa9ac788f7067a2
        </P>
      </PanelBody>
    </Panel>
  )
}

const  ExpansionPanel = () => {

  return (
    <Panel>
      <PanelHeader>
        <PanelHeading>Expansion</PanelHeading>
      </PanelHeader>
      <PanelBody>
         <P>
        Maximum Supply Expansion: 3% per epoch (Dynamic)
        </P>
         <P>
        Supply Reward Distibution: 30% DAO / 60% LP / 5% Team / 5% Marketing
        </P>
         <P>
        Token Distibution: 2M in Presale / 3M in Boostrap (Dynamic) / 25M in 3 years (Dynamic)
        </P>
      </PanelBody>
    </Panel>
  )
}

const  ContractionPanel = () => {

  return (
    <Panel>
      <PanelHeader>
        <PanelHeading>Contraction</PanelHeading>
      </PanelHeader>
      <PanelBody>
         <P>
        Maximum Debt Expansion: 3% per epoch (Dynamic)
        </P>
         <P>
        Supply Distibution: 0% DAO / 0% LP / 0% Team / 0% Marketing
        </P>
         <P>
        Coupon Premium: 20% to 60%
        </P>
         <P>
        Coupon Expiry: 540 epochs
        </P>
      </PanelBody>
    </Panel>
  )
}


const Mechanics = () => {
  const history = useHistory()

  return (
    <Page>
      <TwoCol>
        <Switch>
          <Route>
            <Col
              css={css`
                width: 100%; height: 20%
              `}
            >
              <BasicsPanel />
            </Col>
              <Spacer size={10} />
            <Col
              css={css`
                width: 100%;margin-left:10px;
              `}
            >
              <ContractsPanel />
            </Col>

          </Route>
        </Switch>
      </TwoCol>
      <Spacer size={10} />
      <TwoCol>
        <Switch>
          <Route>
            <Col
              css={css`
                width: 100%;
              `}
            >
              <ExpansionPanel />
            </Col>
            <Col
              css={css`
                width: 100%;margin-left:10px;
              `}
            >
              <ContractionPanel />
            </Col>
          </Route>
        </Switch>
      </TwoCol>
    </Page>
  )
}

export default Mechanics
