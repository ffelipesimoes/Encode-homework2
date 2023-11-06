import { ethers } from 'ethers';

import * as dotenv from 'dotenv';
import { Ballot, Ballot__factory } from '../typechain-types';
dotenv.config();

async function main() {
  const provider = new ethers.JsonRpcProvider(process.env.RPC_ENDPOINT_URL ?? "");
    const wallet = new ethers.Wallet(process.env.PRIVATE_KEY ?? "", provider);
  const parameters = process.argv.slice(2);
if (!parameters || parameters.length < 1)
  throw new Error("Parameters not provided");
const contractAddress = parameters[0];
const myOtherParameter = parameters[1];

const ballotFactory = new Ballot__factory(wallet);
const ballotContract = await ballotFactory.attach(contractAddress) as Ballot;
const tx = ballotContract.chairperson();
// const receipt = await tx.wait();
// console.log(`Transaction completed ${receipt?.hash}`)

  }

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});