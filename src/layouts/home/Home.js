import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
      <main className="container">
        <nav className='header'>

        </nav>
        <section className='splash-title'>
          <h1>Noncense</h1>
          <h4>A precious stone marketplace built on Ethereum blockchain</h4>
        </section>

        <section className='why-ethereum'>
          <h1>Why Ethereum</h1>
          <hr className='underline' />

          <div>
            <div className='image-background' />
            <img src='https://bitcoinist.com/wp-content/themes/bitcoinist/img/ETHEREUM-LOGO-2.png'
              alt='long way to go' />
            <p>
              'brief note outlining the security and functionality associated with Ethereum. This should include the problem statement.brief note outlining the security and functionality associated with Ethereum. This should include the problem statement.brief note outlining the security and functionality associated with Ethereum. This should include the problem statement.brief note outlining the security and functionality associated with Ethereum. This should include the problem statement.brief note outlining the security and functionality associated with Ethereum. This should include the problem statement.'
            </p>
          </div>
        </section>

        <section className='how-it-works'>
          <h1>How it Works</h1>
          <hr className='underline' />
          <ul>
            <li>
              <h6>
                Smart Contracts
              </h6>
              <img className="contract-img" src="https://image.flaticon.com/icons/svg/306/306438.svg" />
              <p>
                This is some info about Smart ContractsThis is some info about Smart ContractsThis is some info about Smart ContractsThis is some info about Smart ContractsThis is some info about Smart ContractsThis is some info about Smart ContractsThis is some info about Smart Contracts
              </p>
            </li>
            <li>
              <h6>
                Noncense Smart Contract
              </h6>
                <img className="contract-img" src="https://image.flaticon.com/icons/svg/306/306471.svg" />
              <p>
                This is some info about that delicious contract we're usingThis is some info about that delicious contract we're usingThis is some info about that delicious contract we're usingThis is some info about that delicious contract we're usingThis is some info about that delicious contract we're usingThis is some info about that delicious contract we're usingThis is some info about that delicious contract we're using
              </p>
            </li>
            <li>
              <h6>
                Noncense Smart Contract Functionality
                <img className="contract-img" src="https://image.flaticon.com/icons/svg/306/306431.svg" />
              </h6>
              <p>
                This is what that amazing contract doesThis is what that amazing contract doesThis is what that amazing contract doesThis is what that amazing contract doesThis is what that amazing contract doesThis is what that amazing contract doesThis is what that amazing contract doesThis is what that amazing contract doesThis is what that amazing contract does
              </p>
            </li>
          </ul>
        </section>
        <section className='instructions'>
          <h1>How to Use Noncense</h1>
          <hr className='underline' />
          <ul>
            <li>
              <h6>
                Step 1
              </h6>
              <p>
                Get Metamask.io
              </p>
            </li>
            <li>
              <h6>
                Step 2
              </h6>
              <p>
                This
              </p>
            </li>
            <li>
              <h6>
                Step 3
              </h6>
              <p>
                Something else
              </p>
            </li>
            <li>
              <h6>
                Step 4
              </h6>
              <p>
                Profit
              </p>
            </li>
          </ul>
        </section>
        <section className='contributors'>
          <h1>Contributors</h1>
          <hr className='underline' />
          <ul>
            <li>
              <h6>Linda Chan</h6>
              <div>
                <a href='https://github.com/cylinda47'>
                  GitHub
                </a>
                <a>
                  LinkedIn
                </a>
              </div>
            </li>
            <li>
              <h6>Jacob Butler</h6>
              <div>
                <a href='https://github.com/DrAmaze'>
                  GitHub
                  </a>
                <a href='https://www.linkedin.com/in/jacob-butler-a2ab7093/'>
                  LinkedIn
                </a>
              </div>
            </li>
            <li>
              <h6>Kevin Lee</h6>
              <div>
                <a>
                  GitHub
                </a>
                <a>
                  LinkedIn
                </a>
              </div>
            </li>
            <li>
              <h6>William Meng</h6>
              <div>
                <a href='https://github.com/will-meng'>
                  GitHub
                </a>
                <a>
                  LinkedIn
                </a>
              </div>
            </li>
          </ul>
        </section>
      </main>
    )
  }
}

export default Home;
