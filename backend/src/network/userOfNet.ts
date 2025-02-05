// Import environments
import { env } from "../assets/config/environment";

import fs from "fs";
import path from "path";

import FabricCAServices, { IRegisterRequest } from "fabric-ca-client";
import { Wallets, Identity } from "fabric-network";

// Import utils
import { WalletUtils } from "./utils/wallet";

const testNetworkRoot = env.NETWORK_FILESYSTEM_ROOT as string;

const registerUser = async (registrarLabel: string, enrollmentID: string, secret: string, attrs?: any) => {
  const wallet = await WalletUtils.getWallet();
  console.log("Path of Test NET (Directory): ", testNetworkRoot);

  try {
    let registrarIdentity = await wallet.get(registrarLabel);

    if (!registrarIdentity) {
      console.log(`An identity for the registrar user ${registrarLabel} does not exist in the wallet`);
      console.log('Run the enrollUser.js application before retrying');
      return;
    }
    
    const orgName = registrarLabel.split('@')[1];
    const orgNameWithoutDomain = orgName.split('.')[0];
    let connectionProfile = JSON.parse(fs.readFileSync(
      path.join(
        testNetworkRoot,
        'organizations/peerOrganizations',
        orgName,
        `/connection-${orgNameWithoutDomain}.json`),
        'utf8'
      )
    );
    const ca = new FabricCAServices(connectionProfile['certificateAuthorities'][`ca.${orgName}`].url);
    const provider = wallet.getProviderRegistry().getProvider(registrarIdentity.type);
    const registrarUser = await provider.getUserContext(registrarIdentity, registrarLabel);

    let registerRequest: IRegisterRequest = {
      enrollmentID: enrollmentID,
      enrollmentSecret: secret || "",
      role: 'client',
      attrs: attrs || [],
      affiliation: ""
    };
    const s = await ca.register(registerRequest, registrarUser);
    console.log(`Successfully registered the user with the ${enrollmentID} enrollment ID and ${secret} enrollment secret.`);
    return s;
  } catch (error) {
    console.error(`Failed to register user: ${error}`);
  }
}

const enrollUser = async (identityLabel: string, enrollmentID: string, enrollmentSecret: string, attrs?: any) => {
  const wallet = await WalletUtils.getWallet();
  console.log("Path of Test NET (Directory): ", testNetworkRoot);

  try {
    // Logic for user enrollment would go here.
    // Todo: get identification
    // Example: args: ['AnhTuan@org1.example.com', 'AnhTuan@org1.example.com']
    const orgName = identityLabel.split('@')[1]; // org1.example.com
    const orgNameWithoutDomain = orgName.split('.')[0]; // org1
    let connectionProfile = JSON.parse(fs.readFileSync(
      path.join(
        testNetworkRoot,
        'organizations/peerOrganizations',
        orgName,
        `/connection-${orgNameWithoutDomain}.json`),
        'utf8'
    )); // full path: organizations/peerOrganizations/org1.example.com/connection-org1.json
    const ca = new FabricCAServices(connectionProfile['certificateAuthorities'][`ca.${orgName}`].url);
    let identity = await wallet.get(identityLabel);
    
    let enrollmentRequest = {
      enrollmentID: enrollmentID,
      enrollmentSecret: enrollmentSecret,
      attr_reqs: attrs
    };

    if(identity) {
      console.log(`An identity for the ${identityLabel} user already exists in the wallet`);
      return;
    }

    const enrollment = await ca.enroll(enrollmentRequest);
    const orgNameCapitalized =
    orgNameWithoutDomain.charAt(0).toUpperCase() + orgNameWithoutDomain.slice(1);

    identity = {
      credentials: {
        certificate: enrollment.certificate,
        privateKey: enrollment.key.toBytes(),
      },
      mspId: `${orgNameCapitalized}MSP`,
      type: 'X.509'
    } as any;

    await wallet.put(identityLabel, identity as any);
    return true;
  } catch (error) {
    console.error(`Failed to enroll user: ${error}`);
    throw new Error(`Failed to enroll user: ${error}`);
  }
}

export const UserOfNetwork = {
  registerUser,
  enrollUser
};