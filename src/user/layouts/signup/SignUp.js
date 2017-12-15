import React, { Component } from 'react'
import SignUpFormContainer from '../../ui/signupform/SignUpFormContainer'

class SignUp extends Component {
  render() {
    return(
      <main className="container">
        <div className="pure-g">
          <div className='pure-u-1-1'>
            <h1>How To</h1>
            <p>You need to download Metamask</p>
          </div>
          <div className="pure-u-1-1">
            <h1>Sign Up</h1>
            <p>We've got your wallet information, simply input your name and your account is made!</p>
            <SignUpFormContainer />
          </div>

          <div className='pure-u-1-1'>
            <h1>How To</h1>
            <p>
              Ensure your browser is running on an Ethereum node.
              Typically, your browser is running on a centralized network server.
              <br/><br/>
              The easiest way to switch your browsing experience is to download the chrome extension, metamask, at Metamask.io.
              <br/><br/>
              Once downloaded, create an account with Metamask and acquire Ether.
              <br/><br/>
              Note: most interactions with our website (logging in, selling a stone, buying a stone, etc.) require the user to pay a small transaction fee.
              In order to not incur cost while our site is in beta testing, please use a test network to acquire free test Ether.
            </p>
          </div>
        </div>
      </main>
    )
  }
}

export default SignUp
