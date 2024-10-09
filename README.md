# TFSA
![image](https://github.com/user-attachments/assets/9b08d30e-0258-41ea-85aa-862f70258a7c)

## Description
The Transportation Flexible Spending Account (TFSA) ecosystem is an EVM-compatible DApp and token that facilitates a universal metro card network, allows users to transfer remaining balance from one metro to another.

See below for a more detailed description :)

## Rootstock Integration
The TFSA DApp is built and deployed on the Rootstock ecosystem; core contracts include the Metro Aggregator smart contract and the TFSA token contract. Additional token contracts are added as each metro network issues their ERC20 token.

MetroAggregator Contract - [0x8412b9446ae027a3e734d478b10935c0a6421288](https://explorer.testnet.rootstock.io/address/0x8412b9446ae027a3e734d478b10935c0a6421288)

TFSA Token Contract - [0x531e0d48cac83fedd2cb4c056188f9dac6d41abc](https://explorer.testnet.rootstock.io/address/0x531e0d48cac83fedd2cb4c056188f9dac6d41abc)

WMATA Token Contract - [0xb77d1bb38f22bd467a18e30636f41e73d97457cc](https://explorer.testnet.rootstock.io/address/0xb77d1bb38f22bd467a18e30636f41e73d97457cc)

TRAX Token Contract - [0xb77d1bb38f22bd467a18e30636f41e73d97457cc](https://explorer.testnet.rootstock.io/address/0xb77d1bb38f22bd467a18e30636f41e73d97457cc)

MetroAggregator Treasury Address - [0xe755336a328066d67a50d1bc08cb3dff864f4bac](https://explorer.testnet.rootstock.io/address/0xe755336a328066d67a50d1bc08cb3dff864f4bac)

// links to testnet txns

## Team
We are a team from Accenture's Digital Assets practice in DC. We all have solid technical backgrounds and industry knowledge/familiarity, but a mix of experience levels with web3 and frontend development.  
- Garret Berg: Data Engineer/Web3 Dev
- Carlo Burgos: Lead Software Architect
- Annajune Ghrist: Data Scientist
- Karim Hassan: Data Analyst

## Testing the Integration

// probably good to mention how to exclude the AWS component, that could potentially impact ability to test

## Experience Developing with Rootstock

- Really easy to get up and running the EVM-compatability component makes it easy to follow and deploy contract
- The Rootstock team provided demos during their workshop session and documentation were very helpful!
- Maybe an issue with showing txn timestamps?

## Detailed Project Description

In selecting a project, our aim was to make something with real-world utility both for existing and new crypto users.

### Addressing Potential Questions and Concerns:
- What if people can just pay directly without buying metro-specific fare? E.g. in the NYC metro, users can just use a credit card directly to pay fare.
  - Not all metros have this; we are designing this with all metros in mind. Creating this network would allow users in the ecosystem to be rewarded from it. 
  - Employer subsidy case - employer isnt just going to give you cash.
- How does the volatility in price of ETH, BTC, other tokens that can be exchanged for TFSA impact the monetary value of TFSA? Will employers have to pay more to stock their employees commute accounts if BTC is up?
  - The TFSA has its own ecosystem meaning the price of the TFSA token will be dependent on the supply and demand of users using the ecosystem. Employers can also directly work with the issuer in which they wouldn't have to pay more and can still pay a fixed price.
- Is this only a use case for the metro system?
  - No, this can be expanded upon just the metro network, it can include bus, bicycle, other transportation forms, and other FSA type accounts. This can also be thought of as a concept in which specific ecosystems can have an umbrella like structure.
- Why would the transportation companies or governments approve this system change?
  - Users can still pay in fiat if they want to however this optimizes different metro systems across the country while also giving transportation companies an opportunity for another stream of revenue which is from LP rewards and potentially transaction fees onchain
- How would you make users and companies adopt your system?
  - Users and companies would adopt the system just like any other DeFi protocol or DApp that has a value use case, the opportunity of generating another stream of income while allowing users to utilize the full amount of funds on their metro cards provides a solution that can be built upon further.
