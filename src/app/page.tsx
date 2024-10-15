"use client";
import { useAccount, useDisconnect, useReadContract, useWriteContract } from "wagmi";
import { Button, Input, Card } from "antd";
import { addressSm, ABISm } from "./constantes/sm";
import { useState } from "react";
import { writeContract } from "viem/actions";

export default function Home() {
	const [amount, setAmount] = useState(0);
	const { address } = useAccount();
	const { data: hash, isPending, error, writeContract } = useWriteContract();
	const [balance, setBalance] = useState(0);

	const { data, refetch } = useReadContract({
		address: addressSm,
		abi: ABISm,
		functionName: "getBalance",
		args: [],
	});

	const sendMoney = async () => {
		writeContract(
			{
				address: addressSm,
				abi: ABISm,
				functionName: "send",
				value: BigInt(amount),
				account: address,
			}
		)
		console.log("ampoount", amount);
	};

	const checkBalance = () => {
		refetch();
		setBalance(Number(data));
	}
	return (
		<>
			{address && <div className="flex justify-end flex-col w-1/2">
				<Input type="number" onChange={(e) => setAmount(Number(e.target.value))}></Input>
				<Button onClick={sendMoney}>Send Money</Button>
				<Button onClick={checkBalance}>Check balance</Button>
				<Card>
					<p>Balance: {balance}</p>
				</Card>
			</div>}
		</>
	);
}
