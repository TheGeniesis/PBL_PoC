# Ethereum chain

## Pre-requirements

- [Docker](https://www.docker.com/)
- [Docker-compose](https://docs.docker.com/compose/)
- [Task](https://taskfile.dev)
- curl

## First start

All steps are described on [openethereum tutorial page](https://openethereum.github.io/Demo-PoA-tutorial).

We did some modifications:

1. Step 1 is already done. Chainspec is available in config directory. Please clear validator list
2. Remove `unlock` and `engine_signer` from `config/*.conf`. To create accounts and start chain execute `task start:first`. For now please use one password and put it in `config/password`. Put generated ids to `unlock` and `engine_signer`. 
3. You might need to add generated miner account to chainspec file (validators section)
4. Step skipped
5. Run `task enode` and copy results from requests (`enode://RESULT` part) to config/peers file. Replace IP with container name (enode://<hash>@rpc_1:30303). Restart containers with `task:start`
6. To test [check truffle](../truffle/README.md) section. Remember to call RPC not nodes for more info from blockchain
