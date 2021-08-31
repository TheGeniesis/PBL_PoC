import {PblBlockchain} from '../Chain/PblBlockchain'
import {CryptoBlock} from '../Chain/Blocks/CryptoBlock'

let smashingCoin = new PblBlockchain();

smashingCoin.addNewBlock(
  new CryptoBlock(1, "01/06/2020", {
    sender: "Iris Ljesnjanin",
    recipient: "Cosima Mielke",
    quantity: 50
  })
);

smashingCoin.addNewBlock(
  new CryptoBlock(2, "01/07/2020", {
    sender: "Vitaly Friedman",
    recipient: "Ricardo Gimenes",
    quantity: 100
  })
);


console.log(smashingCoin)
