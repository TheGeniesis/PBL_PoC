import sha256 from 'crypto-js/sha256';


export interface ICryptoBlockData {
    sender:string,
    recipient:string,
    quantity:number
}

export class CryptoBlock {
    public index:number
    public timestamp:string
    public data:ICryptoBlockData
    public precedingHash:string
    public hash:string
    public nonce:number=0

  constructor(index:number, timestamp:string, data:ICryptoBlockData, precedingHash:string = " ") {
    this.index = index;
    this.timestamp = timestamp;
    this.data = data;
    this.precedingHash = precedingHash;
    this.hash = this.computeHash();
    this.nonce = 0;
  }

  computeHash() {
    return sha256(
      this.index +
        this.precedingHash +
        this.timestamp +
        JSON.stringify(this.data) +
        this.nonce
    ).toString();
  }

  proofOfWork(difficulty:number) {
    while (
      this.hash.substring(0, difficulty) !== Array(difficulty + 1).join("0")
    ) {
      this.nonce++;
      this.hash = this.computeHash();
    }
  }
}

 