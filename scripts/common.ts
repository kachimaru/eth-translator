import env, { ethers } from 'hardhat'
import { KmsProvider, NetworkOptions } from "aws-kms-provider"
import { HttpNetworkConfig } from "hardhat/types"

const region = process.env.AWS_REGION!;
const keyId = process.env.KMS_KEY_ID!;


export const KmsSigner = () => {

  const kmsProvider = new KmsProvider(
    (env.network.config as HttpNetworkConfig).url,
    { region, keyIds: [keyId] },
  );

  const provider = new ethers.providers.Web3Provider(kmsProvider)
  return provider.getSigner(0)
}
