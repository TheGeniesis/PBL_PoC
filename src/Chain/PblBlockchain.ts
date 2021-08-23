
import { CryptoBlock } from "./Blocks/CryptoBlock";

export class PblBlockchain {
    blockchain:Array<CryptoBlock> = [];
    difficulty:number = 0;

    constructor() {
    this.blockchain = [this.startGenesisBlock()];
    this.difficulty = 4;
  }
  startGenesisBlock():CryptoBlock {
    return new CryptoBlock(
        0, 
        "01/01/2020", 
        {    
            sender: "Admin",
            recipient: "Admin",
            quantity: 0
        }, 
        "0"
    );
  }

  obtainLatestBlock():CryptoBlock {
    return this.blockchain[this.blockchain.length - 1];
  }
  addNewBlock(newBlock:CryptoBlock) {
    newBlock.precedingHash = this.obtainLatestBlock().hash;
    //newBlock.hash = newBlock.computeHash();
    newBlock.proofOfWork(this.difficulty);
    this.blockchain.push(newBlock);
  }

  checkChainValidity():boolean {
    for (let i = 1; i < this.blockchain.length; i++) {
      const currentBlock = this.blockchain[i];
      const precedingBlock = this.blockchain[i - 1];

      if (currentBlock.hash !== currentBlock.computeHash()) {
        return false;
      }
      if (currentBlock.precedingHash !== precedingBlock.hash) return false;
    }
    return true;
  }
}
