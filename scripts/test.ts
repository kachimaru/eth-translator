import { ethers } from 'ethers';
import { KmsSigner } from './common';

const main = async () => {
  const signer = KmsSigner();
  const address = await signer.getAddress();
  console.log("signingAddress:"+address);
  const nonce =await signer.getTransactionCount();

  var gasPrice =ethers.BigNumber.from(30);
  console.log(`Gas price: ${gasPrice}`);
  const balance = await signer.getBalance();
  console.log(`Balance: ${ethers.utils.formatEther(balance)}`);
  const gasLimit = 21000;
  console.log(`Gas limit: ${gasLimit}`);


  const value=balance.sub(gasPrice.mul(gasLimit))
  console.log(`Value: ${ethers.utils.formatEther(value)}`);
}

main()
.then(() => process.exit(0))
.catch(error => {
    console.error(error);
    process.exit(1);
});


