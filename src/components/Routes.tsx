import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import About from './About'
import Mechanics from './Mechanics'
import Presale from './Presale'

import NavBar from './NavBar'

import Dashboard from './Dashboard'


import { Top } from './Layout'
import ConnectModal from './ConnectModal'
import DAOModal from './DAOModal'
import CouponsModal from './CouponsModal'
import LiquidityModal from './LiquidityModal'
import RewardsModal from './RewardsModal'
import ProposeModal from './ProposeModal'

import ConnectedRoute from './ConnectedRoute'

import { SupplyThemeProvider, LiquidityThemeProvider } from './Theme'

import {
  useUpdateUserData,
  useUpdateUserPoolData,
  useUpdateDaidData,
} from '../hooks'

const DaidUpdater = () => {
  useUpdateDaidData()

  return null
}

const UserUpdater = () => {
  useUpdateUserData()
  useUpdateUserPoolData()

  return null
}

const Routes = () => {
  return (
    <Router>
      <Top>
        <NavBar />
      </Top>
      <MainRoutes />
    </Router>
  )
}

const MainRoutes = () => {
  return (
    <>
      <DaidUpdater />
      <UserUpdater />
      <Switch>
        <Route path="/about/">
          <About />
        </Route>
        <Route path="/mechanics/">
          <Mechanics />
        </Route>
        <Route path="/presale/">
          <Presale />
        </Route>

        <Route path="/dashboard">
          <Dashboard />
          <Switch>
            <ConnectedRoute path="/dashboard/dao">
              <SupplyThemeProvider>
                <DAOModal />
              </SupplyThemeProvider>
            </ConnectedRoute>
            <ConnectedRoute path="/dashboard/coupons">
              <SupplyThemeProvider>
                <CouponsModal />
              </SupplyThemeProvider>
            </ConnectedRoute>
            <ConnectedRoute path="/dashboard/liquidity">
              <LiquidityThemeProvider>
                <LiquidityModal />
              </LiquidityThemeProvider>
            </ConnectedRoute>
            <ConnectedRoute
              path={['/dashboard/rewards', '/dashboard/rewards/:panel']}
            >
              <LiquidityThemeProvider>
                <RewardsModal />
              </LiquidityThemeProvider>
            </ConnectedRoute>
          </Switch>
        </Route>

        <Route path="/">
          <Dashboard />

          <Route path="/connect">
            <ConnectModal />
          </Route>
        </Route>
      </Switch>
    </>
  )
}

export default Routes
