import React, { Component } from 'react'
import SignUpFormContainer from '../../ui/signupform/SignUpFormContainer'

class SignUp extends Component {

  render() {
    return(
      <main className="container">
        <div className="pure-g">
          <div className='pure-u-1-1'>
            <h1>How To</h1>
            <p>
              You need to download Metamask in order to sign up.<br/>
              Ensure your account has ether (test ether is acceptable!) as each interaction with the blockchain requires gas.
            </p>
          </div>
          <div className="pure-u-1-1">
            <h1>Sign Up</h1>
            <p>We've got your wallet information, simply input your name and your account is made!</p>
            <SignUpFormContainer />
          </div>

        </div>
      </main>
    )
  }
}

export default SignUp
