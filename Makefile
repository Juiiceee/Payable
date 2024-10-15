# Define variables
RPC_URL := 127.0.0.1:8545
PRIVATE_KEY := 0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80
CONTRACT_PATH :=  blockchain/src/Payable.sol
CONTRACT := Payable

all: deploy

# Compile the contract
compile:
	forge build --contracts $(CONTRACT_PATH)

deploy:
	forge create --rpc-url $(RPC_URL) --private-key $(PRIVATE_KEY) --contracts $(CONTRACT_PATH) $(CONTRACT)

.PHONY: all compile deploy