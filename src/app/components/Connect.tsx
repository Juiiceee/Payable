"use client";
import { useAccount } from "wagmi";
import { ConnectButton } from "@rainbow-me/rainbowkit";


export default function Connect() {
	const { address } = useAccount();
	return (
		<div className={!address ? "flex items-center justify-center min-h-screen" : "flex items-center justify-end m-3"}>
			<ConnectButton chainStatus="icon" />
		</div>
	);
}