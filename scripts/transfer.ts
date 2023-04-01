import { ethers } from 'ethers';
import { KmsSigner } from './common';

const main = async () => {

  const to ="0x19ff500d70f1b73ce4356ff754435239ee6ddf4a";

  const signer = KmsSigner();
  const address = await signer.getAddress();
  console.log("signingAddress:"+address);
  const nonce =await signer.getTransactionCount();
  console.log("nonce:"+nonce);
  var gasPrice =ethers.BigNumber.from(30000000000);
  console.log(`Gas price: ${gasPrice}`);
  const balance = await signer.getBalance();
  console.log(`Balance: ${ethers.utils.formatEther(balance)}`);
  const gasLimit = 21000;
  console.log(`Gas limit: ${gasLimit}`);


  const value=balance.sub(gasPrice.mul(gasLimit))
  console.log(`Value: ${ethers.utils.formatEther(value)}`);

  const tx = {
    nonce: nonce,
    to: to,
    value: value,
    gasPrice: gasPrice,
    gasLimit: gasLimit,
  };

  const response = await signer.sendTransaction(tx);
  console.log('Transaction hash:', response.hash);

  // 送金後の残高を確認
  const newBalance = await signer.getBalance();
  console.log(`New balance: ${ethers.utils.formatEther(newBalance)}`);
}

main()
.then(() => process.exit(0))
.catch(error => {
    console.error(error);
    process.exit(1);
});


