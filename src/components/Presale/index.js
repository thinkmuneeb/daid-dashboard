import React, { Component } from 'react'
import Web3 from 'web3'

import { jsx, css } from '@emotion/react'
import { Route, Switch, useHistory } from 'react-router-dom'
import Token from './Dollar'
import EthSwap from './EthSwap'
import { formInputAtomFamily, FigureInput, ActionLabel } from '../Forms'
import ethLogo from './eth-logo.png'
import Panel, {
  PanelBody,
  PanelHeader,
  PanelHeading,
} from '../../components/Panel'
import Page from '../Page'
import { rem, transparentize } from 'polished'
import { atomFamily, useRecoilState } from 'recoil'
import BigNumber from 'bignumber.js'
import {
  P,
  Spacer,
  TableRow,
  Seperator,
  Text,
  Input,
  Flex,
  SwapButton,
  TwoCol,
  BigButton,
  Col,
} from '../Elements'
import { IconLocked } from '../Icons'
import { Themed } from '../Theme'
import NumberFormat from 'react-number-format'
import styled from '@emotion/styled'
const NumberInput = Input.withComponent(NumberFormat)


export const InputContainer = styled(Flex)`
  align-items: center;
  position: relative;
  width: 100%;
  appearance: none;
  outline: none;

  padding: ${rem(16)};

  border-radius: ${rem(12)};
  border-style: solid;
  border-width: ${rem(1)};

  border-color: #d8e0e3;
  background-color: #fff;

  font-weight: 400;
  font-family: 'Inter', 'Helvetica Neue', sans-serif;

  font-size: ${rem(20)};
  line-height: 1.35;

  transition: all 150ms cubic-bezier(0.215, 0.61, 0.355, 1) 0s;

  &:focus {
    border-color: var(--theme-ui-colors-primary, #25273d);
    color: var(--theme-ui-colors-primary, #25273d);
  }
`

const InputUnit = styled.div`
  flex: 0 0 auto;
  font-weight: 400;
  font-family: 'Inter', 'Helvetica Neue', sans-serif;

  font-size: ${rem(20)};
  line-height: 1.55;

  color: #708390;
`

// class Navbar extends Component {

//   render() {
//     return (
//       <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
//         <span
//           className="navbar-brand col-sm-3 col-md-2 mr-0"
//           rel="noopener noreferrer"
//         >
//           EthSwap
//         </span>

//         <ul className="navbar-nav px-3">
//           <li className="nav-item text-nowrap d-none d-sm-none d-sm-block">
//             <small className="text-secondary">
//               <small id="account">{this.props.account}</small>
//             </small>

//             { this.props.account
//               ? <img
//                 className="ml-2"
//                 width='30'
//                 height='30'
//                 src={''}
//                 alt=""
//               />
//               : <span></span>
//             }

//           </li>
//         </ul>
//       </nav>
//     );
//   }
// }

class BuyForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      output: '0'
    }
  }

  render() {
    return (
      <form className="mb-3" onSubmit={(event) => {
          event.preventDefault()
          let etherAmount
          etherAmount = this.input.value.toString()
          etherAmount = window.web3.utils.toWei(etherAmount, 'Ether')
          this.props.buyTokens(etherAmount)
        }}>
        <P>
          <TableRow
            left="ETH Balance"
            right={window.web3.utils.fromWei(this.props.ethBalance, 'Ether') + " ETH"}
          />
        </P>

        <div className="input-group mb-4">



   <Flex
      css={css`
        flex-direction: column;
        /* justify-content: space-between; */
        align-items: flex-start;

        padding-top: ${rem(16)};
      `}
    >
      <InputContainer>
        <Input
          placeholder="0"
          autoFocus={true}
          thousandSeparator={true}
          decimalScale={19}
            onChange={(event) => {
              const etherAmount = this.input.value.toString()
              this.setState({
                output: etherAmount * 1250
              })
            }}
            ref={(input) => { this.input = input }}
        />
        {<InputUnit>ETH</InputUnit>}
      </InputContainer>
    </Flex>

        </div>
        <P>
            <TableRow
              left="DAID Balance"
              right={window.web3.utils.fromWei(this.props.tokenBalance, 'Ether') + " DAID"}
            />
        </P>

        <div className="input-group mb-2">

           <Flex
              css={css`
                flex-direction: column;
                /* justify-content: space-between; */
                align-items: flex-start;

                padding-top: ${rem(16)};
              `}
            >
              <InputContainer>
                <Input
                  placeholder="0"
                  thousandSeparator={true}
                  decimalScale={19}
                  value={this.state.output}
                  disabled
                />
                {<InputUnit>DAID</InputUnit>}
              </InputContainer>
            </Flex>


        </div>
        <P>
            <TableRow
              left="Exchange Rate"
              right={`1 ETH = 1250 DAID / 1 DAI ≈ 1 DAID`}
            />
        </P>
        <SwapButton type="submit">
          Swap
        </SwapButton>
      </form>
    );
  }
}


class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentForm: 'buy'
    }
  }

  render() {
    let content
      content = <BuyForm
        ethBalance={this.props.ethBalance}
        tokenBalance={this.props.tokenBalance}
        buyTokens={this.props.buyTokens}
      />

    return (
      <div id="content" className="mt-3">


        <div className="card mb-4" >

          <div className="card-body">

            {content}

          </div>

        </div>

      </div>
    );
  }
}


class Presale extends Component {

  async componentWillMount() {
    await this.loadWeb3()
    await this.loadBlockchainData()
  }

  async loadBlockchainData() {
    const web3 = window.web3

    const accounts = await web3.eth.getAccounts()
    this.setState({ account: accounts[0] })

    const ethBalance = await web3.eth.getBalance(this.state.account)
    this.setState({ ethBalance })

    // Load Token
    const networkId = 4//web3.eth.net.getId()  /// 4 rinkeby 3 ropsten
    const tokenData = Token.networks[networkId]
    if(tokenData) {
      const token = new web3.eth.Contract(Token.abi, "0x927059a3Eb49536a7aF420f992D036b9479391d1") //ropsten not works "0xA5a1ccD7617e83810bc50aB6E66255d03D027cAE")
      // console.log(Token.address)
      this.setState({ token })
      let tokenBalance = await token.methods.balanceOf(this.state.account).call()
      this.setState({ tokenBalance: tokenBalance.toString() })
    } else {
      window.alert('Token contract not deployed to detected network.')
    }

    // Load EthSwap
    const ethSwapData = EthSwap.networks[networkId]
    if(ethSwapData) {
      const ethSwap = new web3.eth.Contract(EthSwap.abi, "0xd385F8ba4A2A9E74Eeb23CE10CF8dd93Ff0037bd") //ropsten not work "0x8357313311cDb2b497f1777B4fCdF047C99935E7"
      this.setState({ ethSwap })
    } else {
      window.alert('EthSwap contract not deployed to detected network.')
    }

    this.setState({ loading: false })
  }

  async loadWeb3() {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum)
      await window.ethereum.enable()
    }
    else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider)
    }
    else {
      window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!')
    }
  }

  buyTokens = (etherAmount) => {
    this.setState({ loading: true })
    this.state.ethSwap.methods.buyTokens().send({ value: etherAmount, from: this.state.account }).on('transactionHash', (hash) => {
      this.setState({ loading: false })
    })
  }


  constructor(props) {
    super(props)
    this.state = {
      account: '',
      token: {},
      ethSwap: {},
      ethBalance: '0',
      tokenBalance: '0',
      loading: true
    }
  }

  render() {
    let content

      content = <Main
        ethBalance={this.state.ethBalance}
        tokenBalance={this.state.tokenBalance}
        buyTokens={this.buyTokens}
      />


    return (


    <Page>
      <TwoCol>
        <Switch>
          <Route>
            <Col>
            <Panel style={{marginTop: '75px'}}>
              <PanelHeader  style={{textAlign: 'center'}}>
                  <PanelHeading style={{textAlign: 'center'}}>Presale</PanelHeading>
                </PanelHeader>
                <PanelBody>
                     {content}
                </PanelBody>
              </Panel>
            </Col>
          </Route>
        </Switch>
      </TwoCol>
    </Page>


    );
  }
}

export default Presale;
