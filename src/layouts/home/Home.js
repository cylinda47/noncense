import React, { Component } from 'react';
import $ from 'jquery';

class Home extends Component {

  componentDidMount() {
    $('svg').css('opacity', '1');
    $('.base').css('opacity', '1');
  }

  componentWillUnmount() {
    $('svg').css('opacity', '0');
    $('.base').css('opacity', '0');
  }

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

<<<<<<< HEAD
          <div>
            <div className='image-background' />
            <img src='https://bitcoinist.com/wp-content/themes/bitcoinist/img/ETHEREUM-LOGO-2.png'
              alt='Ethereum logo' />
            <p>
              The marketplace for precious stones is monopolized by big, corporate retailers due to their readily available access to effective evaluators of clarity, cut, color, and carat weight.
              Noncense enables all buyers and sellers to have access to any stone's credentials, including past sale prices. This is made possible through Ethereum blockchain technology.
              In essence, this technology is a linked list that stores the historical information for any given product. Ethereum makes this possible by decentralizing the traditional 'server' into many private Ethereum Nodes.
              These nodes ensure 100% security for transactions conducted by both buyers and sellers.
            </p>
          </div>
        </section>
=======
          <div className="why-ethereum-containers">
            <div className="why-ethereum-container-1">
              <div className='image-background' />
                <img src='https://bitcoinist.com/wp-content/themes/bitcoinist/img/ETHEREUM-LOGO-2.png'
                alt='long way to go' />
              </div>
              <div className="why-ethereum-container-2">
                The marketplace for precious stones is monopolized by big, corporate retailers due to their readily available access to effective evaluators of clarity, cut, color, and carat weight.
                Noncense enables all buyers and sellers to have access to any stone's credentials, including past sale prices. This is made possible through Etehreum blockchain technology.
                In essence, this technology is a linked list that stores the historical information for any given product. Ethereum makes this possible by decentralizing the traditional 'server' into many private Ethereum Nodes.
                These nodes ensure 100% security for transactions conducted by both buyers and sellers.
              </div>
            </div>
          </section>
>>>>>>> d84864fea5b050d021d600784075773005e125f8

        <section className='how-it-works'>
          <h1>How It Works</h1>
          <hr className='underline' />
          <ul>
            <li>
              <h6>
                Smart Contracts
              </h6>
              <img className="contract-img" src="https://image.flaticon.com/icons/svg/306/306438.svg" />
              <p>
                Smart Contracts regulate the communication between the application and the blockchain.
                These self-executing contracts define the terms of agreement between the buyer and the seller directly by writing them into the lines of the code.
                In other words, these contracts create trust, and are then deployed to and subsequently written on the blockchain.
                The code and the agreements contained therein, exist across the distributed blockchain network.
              </p>
            </li>
            <li>
              <h6>
                Noncense Smart Contract
              </h6>
                <img className="contract-img" src="https://image.flaticon.com/icons/svg/306/306471.svg" />
              <p>
                Due to the nature of precious stone transactions, Noncense necessitates users being able to interact securely and accurately.
                Using a traditional network server database, users sacrifice security for minimally improved performance speed.
                Our architecture is not only lightweight in order to improve speed, but also built on the Ethereum blockchain, utilizing Smart Contracts to maximize security.
              </p>
            </li>
            <li>
              <h6>
                Noncense Smart Contract Functionality
                <img className="contract-img" src="https://image.flaticon.com/icons/svg/306/306431.svg" />
              </h6>
              <p>
                Noncense cultivates transactions through Smart Contracts of its own.
                Our Smart Contracts deployed to the Ethereum blockchain are written in the computing language of Solidity.
                These contracts firstly enable users to buy and sell products, exchanging the product for currency.
                Secondly, these contracts enable users to upload a stone to the marketplace, specifying its unique credentials.
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
                Download a program that enables your browser to run on an Ethereum Node.
                We recommend the chrome extension: metamask.io.
              </p>
            </li>
            <li>
              <h6>
                Step 2
              </h6>
              <p>
                Create an account with metamask.io.
                Use the TestRPC network to
              </p>
            </li>
            <li>
              <h6>
                Step 3
              </h6>
              <p>
                Navigate to the Noncense URL using a browser running on the Ethereum node.
                While our site is in beta, we allow users to use the Ropsten Test Network to login to Noncense.
              </p>
            </li>
            <li>
              <h6>
                Step 4
              </h6>
              <p>
                Sign up for Noncense using our secure authentication system.
                Browse the available products, make purchases, and sell your precious stones!
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
                <a href='https://www.linkedin.com/in/linda-cyl/'>
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
                <a href='https://github.com/kl2695'>
                  GitHub
                </a>
                <a href='https://www.linkedin.com/in/kevin-lee-34a9aa2a/'>
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
                <a href='https://www.linkedin.com/in/william-meng-74039a11/'>
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
