import { createContext, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { client } from '../lib/client';

export const TwitterContext = createContext();

export const TwitterProvider = ({ children }) => {
	const [appStatus, setAppStatus] = useState('notConnected');
	const [currentAccount, setCurrentAccount] = useState('');
	const router = useRouter();

	const checkIfWalletIsConnected = async () => {
		if (!window.ethereum) return;
		try {
			const ethAccounts = await window.ethereum.request({
				method: 'eth_accounts',
			});
			if (ethAccounts.length > 0) {
				setAppStatus('connected');
				setCurrentAccount(ethAccounts[0]);
				createUserAccount(ethAccounts[0]);
			} else {
				router.push('/');
				setAppStatus('notConnected');
			}
		} catch (error) {
			console.log(error);
		}
	};

	const connectToWallet = async () => {
		if (!window.ethereum) return setAppStatus('noMetaMask');
		try {
			setAppStatus('loading');

			const addressArray = await window.ethereum.request({
				method: 'eth_requestAccounts',
			});

			if (addressArray.length > 0) {
				setCurrentAccount(addressArray[0]);
				createUserAccount(addressArray[0]);
				setAppStatus('connected');
			} else {
				router.push('/');
				setAppStatus('notConnected');
			}
		} catch (error) {
			setAppStatus('error');
		}
	};

	const createUserAccount = async (userWalletAddress = currentAccount) => {
		if (!window.ethereum) return setAppStatus('noMetaMask');
		try {
			const userDoc = {
				_type: 'users',
				_id: userWalletAddress,
				name: 'Unnamed',
				isProfileImageNft: false,
				profileImage: '',
				walletAddress: userWalletAddress,
			};
			await client.createIfNotExists(userDoc);
			setAppStatus('connected');
		} catch (error) {
			router.push('/');
			setAppStatus('error');
		}
	};

	return (
		<TwitterContext.Provider
			value={{ appStatus, currentAccount, connectToWallet }}
		>
			{children}
		</TwitterContext.Provider>
	);
};
