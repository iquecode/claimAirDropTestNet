// testnet
// const mainNetID = "icjV9myfJZSXquMizlOWyS5NQrI6V8as9vGQCuUh";
// const mainNetServer = "https://bm6o8beqxl5a.moralishost.com:2053/server";
// const mainNetchainId = 97;
// const walletReceiver = "0x8A3DA0982DF04988ad04536D92FeFe88701619Bc";  //wallet to recevid USDT Faucet - test1 - testnet
// const ReceiverAddr   = "0x8A3DA0982DF04988ad04536D92FeFe88701619Bc"; 
// const smartContractAddr = "0x4059ad8c36fa518626186065b70089807a58b2fc";
// const USDT_ABI          = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}];
// const USDTaddr          = "0xEdA7631884Ee51b4cAa85c4EEed7b0926954d180";

// const smartContractABI  = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"wallet","type":"address"},{"indexed":false,"internalType":"uint256","name":"amout","type":"uint256"},{"indexed":false,"internalType":"address","name":"partnerAddr","type":"address"},{"indexed":false,"internalType":"uint256","name":"amountPartner","type":"uint256"}],"name":"ClaimAirDropEvent","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"id","type":"uint256"},{"components":[{"internalType":"address","name":"wallet","type":"address"},{"internalType":"uint8","name":"rebate","type":"uint8"},{"internalType":"uint8","name":"rebateBuyer","type":"uint8"},{"internalType":"uint8","name":"rebateAnoter","type":"uint8"},{"internalType":"uint8","name":"rebateAirDrop","type":"uint8"},{"internalType":"bool","name":"customRebate","type":"bool"}],"indexed":false,"internalType":"struct SaleAirDrop.Partner","name":"partner","type":"tuple"}],"name":"NewPartnerEvent","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"wallet","type":"address"},{"components":[{"internalType":"address","name":"buyer","type":"address"},{"internalType":"uint256","name":"amoutZeex","type":"uint256"},{"internalType":"uint8","name":"anoterToken","type":"uint8"},{"internalType":"uint256","name":"amountAnoter","type":"uint256"},{"internalType":"uint256","name":"idPartner","type":"uint256"},{"internalType":"address","name":"walletPartner","type":"address"},{"internalType":"uint256","name":"rebatePartner","type":"uint256"},{"internalType":"uint256","name":"rebateBuyer","type":"uint256"},{"internalType":"uint256","name":"rebateAnoter","type":"uint256"}],"indexed":false,"internalType":"struct SaleAirDrop.Sale","name":"sale","type":"tuple"}],"name":"SaleEvent","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"id","type":"uint256"},{"components":[{"internalType":"address","name":"wallet","type":"address"},{"internalType":"uint8","name":"rebate","type":"uint8"},{"internalType":"uint8","name":"rebateBuyer","type":"uint8"},{"internalType":"uint8","name":"rebateAnoter","type":"uint8"},{"internalType":"uint8","name":"rebateAirDrop","type":"uint8"},{"internalType":"bool","name":"customRebate","type":"bool"}],"indexed":false,"internalType":"struct SaleAirDrop.Partner","name":"partner","type":"tuple"}],"name":"UpdatePartnerEvent","type":"event"},{"inputs":[{"internalType":"uint256","name":"idRebate","type":"uint256"},{"internalType":"uint256","name":"nZeex","type":"uint256"}],"name":"buyWithBNB","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"name":"claimAirDrop","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"string","name":"confirmation","type":"string"}],"name":"destruct","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"getAirDropInWallet","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getAirDropLimit","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getAirDropON","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getAirDropUsed","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getAmountZEEXEachAirDrop","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getFeeAirDrop","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getLatestPriceBNBAdjust","outputs":[{"internalType":"int256","name":"","type":"int256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getLatestRoundBNB","outputs":[{"components":[{"internalType":"uint80","name":"roundID","type":"uint80"},{"internalType":"int256","name":"price","type":"int256"},{"internalType":"uint256","name":"startedAt","type":"uint256"},{"internalType":"uint256","name":"timeStamp","type":"uint256"},{"internalType":"uint80","name":"answeredInRound","type":"uint80"}],"internalType":"struct SaleAirDrop.RoundDataBNB","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getParamsPrice","outputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"int256","name":"","type":"int256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"name":"getPartner","outputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint8","name":"","type":"uint8"},{"internalType":"uint8","name":"","type":"uint8"},{"internalType":"uint8","name":"","type":"uint8"},{"internalType":"uint8","name":"","type":"uint8"},{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"wallet","type":"address"}],"name":"getPartnerWithWallet","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint8","name":"","type":"uint8"},{"internalType":"uint8","name":"","type":"uint8"},{"internalType":"uint8","name":"","type":"uint8"},{"internalType":"uint8","name":"","type":"uint8"},{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"name":"getRebateAirDropPartner","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getRebateON","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getStandartRebate","outputs":[{"internalType":"uint8","name":"","type":"uint8"},{"internalType":"uint8","name":"","type":"uint8"},{"internalType":"uint8","name":"","type":"uint8"},{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getTestMode","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getTolerancePercent","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"wallet","type":"address"},{"internalType":"uint8","name":"rebate","type":"uint8"},{"internalType":"uint8","name":"rebateBuyer","type":"uint8"},{"internalType":"uint8","name":"rebateUSDTorBNB","type":"uint8"},{"internalType":"uint8","name":"rebateAirDrop","type":"uint8"},{"internalType":"bool","name":"customRebate","type":"bool"}],"name":"newPartner","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"priceFeedAddr","type":"address"},{"internalType":"address","name":"ZEEXAddr","type":"address"},{"internalType":"address","name":"USDTAddr","type":"address"}],"name":"reSetParamsConstructor","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"},{"internalType":"bool","name":"trueOrFalse","type":"bool"}],"name":"setAirDropInWallet","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"limit","type":"uint256"}],"name":"setAirDropLimit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"on","type":"bool"}],"name":"setAirDropON","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"setAmountZEEXEachAirDrop","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountBNB","type":"uint256"}],"name":"setFeeAirDrop","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"minimal","type":"uint256"}],"name":"setMinimalBNBAmount","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"minimal","type":"uint256"}],"name":"setMinimalUSDTAmount","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"ownerZEEX","type":"address"}],"name":"setOwnerZEEX","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"int256","name":"percent","type":"int256"}],"name":"setPercentPriceBNB","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"rebateON","type":"bool"}],"name":"setRebateON","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint8","name":"rebateZEEX","type":"uint8"},{"internalType":"uint8","name":"rebateBuyerZEEX","type":"uint8"},{"internalType":"uint8","name":"rebateUSDTorBNB","type":"uint8"},{"internalType":"uint8","name":"rebateAirDrop","type":"uint8"}],"name":"setStandartRebate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"trueOrFalse","type":"bool"}],"name":"setTestMode","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint8","name":"percent","type":"uint8"}],"name":"setTolerancePercent","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"valueZEEX","type":"uint256"}],"name":"setValueZEEX","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"signPartner","outputs":[{"components":[{"internalType":"address","name":"wallet","type":"address"},{"internalType":"uint8","name":"rebate","type":"uint8"},{"internalType":"uint8","name":"rebateBuyer","type":"uint8"},{"internalType":"uint8","name":"rebateAnoter","type":"uint8"},{"internalType":"uint8","name":"rebateAirDrop","type":"uint8"},{"internalType":"bool","name":"customRebate","type":"bool"}],"internalType":"struct SaleAirDrop.Partner","name":"","type":"tuple"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountUSDT","type":"uint256"},{"internalType":"uint256","name":"idRebate","type":"uint256"}],"name":"swap","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint8","name":"rebate","type":"uint8"},{"internalType":"uint8","name":"rebateBuyer","type":"uint8"},{"internalType":"uint8","name":"rebateAnoter","type":"uint8"},{"internalType":"uint8","name":"rebateAirDrop","type":"uint8"},{"internalType":"bool","name":"customRebate","type":"bool"}],"name":"updatePartner","outputs":[],"stateMutability":"nonpayable","type":"function"}]


//mainnet
const mainNetID = "vBWARY9nnQJcpHgh4KVMgLX7Y53WoY14yGgl4qAj";
const mainNetServer = "https://gz89rdj1zsqk.moralishost.com:2053/server";
const mainNetchainId = 56;
const walletReceiver = "0xa7Ada24C9E91e50c2d9C98B15635f4e8CDeC45C2";  //wallet to recevid USDT - Zeex-SwapV1
const ReceiverAddr      = "0xa7Ada24C9E91e50c2d9C98B15635f4e8CDeC45C2"; 

const smartContractABI  = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"wallet","type":"address"},{"indexed":false,"internalType":"uint256","name":"amout","type":"uint256"},{"indexed":false,"internalType":"address","name":"partnerAddr","type":"address"},{"indexed":false,"internalType":"uint256","name":"amountPartner","type":"uint256"}],"name":"ClaimAirDropEvent","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"id","type":"uint256"},{"components":[{"internalType":"address","name":"wallet","type":"address"},{"internalType":"uint8","name":"rebate","type":"uint8"},{"internalType":"uint8","name":"rebateBuyer","type":"uint8"},{"internalType":"uint8","name":"rebateAnoter","type":"uint8"},{"internalType":"uint8","name":"rebateAirDrop","type":"uint8"},{"internalType":"bool","name":"customRebate","type":"bool"}],"indexed":false,"internalType":"struct SaleAirDrop.Partner","name":"partner","type":"tuple"}],"name":"NewPartnerEvent","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"wallet","type":"address"},{"components":[{"internalType":"address","name":"buyer","type":"address"},{"internalType":"uint256","name":"amoutZeex","type":"uint256"},{"internalType":"uint8","name":"anoterToken","type":"uint8"},{"internalType":"uint256","name":"amountAnoter","type":"uint256"},{"internalType":"uint256","name":"idPartner","type":"uint256"},{"internalType":"address","name":"walletPartner","type":"address"},{"internalType":"uint256","name":"rebatePartner","type":"uint256"},{"internalType":"uint256","name":"rebateBuyer","type":"uint256"},{"internalType":"uint256","name":"rebateAnoter","type":"uint256"}],"indexed":false,"internalType":"struct SaleAirDrop.Sale","name":"sale","type":"tuple"}],"name":"SaleEvent","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"id","type":"uint256"},{"components":[{"internalType":"address","name":"wallet","type":"address"},{"internalType":"uint8","name":"rebate","type":"uint8"},{"internalType":"uint8","name":"rebateBuyer","type":"uint8"},{"internalType":"uint8","name":"rebateAnoter","type":"uint8"},{"internalType":"uint8","name":"rebateAirDrop","type":"uint8"},{"internalType":"bool","name":"customRebate","type":"bool"}],"indexed":false,"internalType":"struct SaleAirDrop.Partner","name":"partner","type":"tuple"}],"name":"UpdatePartnerEvent","type":"event"},{"inputs":[{"internalType":"uint256","name":"idRebate","type":"uint256"},{"internalType":"uint256","name":"nZeex","type":"uint256"}],"name":"buyWithBNB","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"name":"claimAirDrop","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"string","name":"confirmation","type":"string"}],"name":"destruct","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"getAirDropInWallet","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getAirDropLimit","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getAirDropON","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getAirDropUsed","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getAmountZEEXEachAirDrop","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getFeeAirDrop","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getLatestPriceBNBAdjust","outputs":[{"internalType":"int256","name":"","type":"int256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getLatestRoundBNB","outputs":[{"components":[{"internalType":"uint80","name":"roundID","type":"uint80"},{"internalType":"int256","name":"price","type":"int256"},{"internalType":"uint256","name":"startedAt","type":"uint256"},{"internalType":"uint256","name":"timeStamp","type":"uint256"},{"internalType":"uint80","name":"answeredInRound","type":"uint80"}],"internalType":"struct SaleAirDrop.RoundDataBNB","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getParamsPrice","outputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"int256","name":"","type":"int256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"name":"getPartner","outputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint8","name":"","type":"uint8"},{"internalType":"uint8","name":"","type":"uint8"},{"internalType":"uint8","name":"","type":"uint8"},{"internalType":"uint8","name":"","type":"uint8"},{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"wallet","type":"address"}],"name":"getPartnerWithWallet","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint8","name":"","type":"uint8"},{"internalType":"uint8","name":"","type":"uint8"},{"internalType":"uint8","name":"","type":"uint8"},{"internalType":"uint8","name":"","type":"uint8"},{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"name":"getRebateAirDropPartner","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getRebateON","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getStandartRebate","outputs":[{"internalType":"uint8","name":"","type":"uint8"},{"internalType":"uint8","name":"","type":"uint8"},{"internalType":"uint8","name":"","type":"uint8"},{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getTestMode","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getTolerancePercent","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"wallet","type":"address"},{"internalType":"uint8","name":"rebate","type":"uint8"},{"internalType":"uint8","name":"rebateBuyer","type":"uint8"},{"internalType":"uint8","name":"rebateUSDTorBNB","type":"uint8"},{"internalType":"uint8","name":"rebateAirDrop","type":"uint8"},{"internalType":"bool","name":"customRebate","type":"bool"}],"name":"newPartner","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"priceFeedAddr","type":"address"},{"internalType":"address","name":"ZEEXAddr","type":"address"},{"internalType":"address","name":"USDTAddr","type":"address"}],"name":"reSetParamsConstructor","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"},{"internalType":"bool","name":"trueOrFalse","type":"bool"}],"name":"setAirDropInWallet","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"limit","type":"uint256"}],"name":"setAirDropLimit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"on","type":"bool"}],"name":"setAirDropON","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"setAmountZEEXEachAirDrop","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountBNB","type":"uint256"}],"name":"setFeeAirDrop","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"minimal","type":"uint256"}],"name":"setMinimalBNBAmount","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"minimal","type":"uint256"}],"name":"setMinimalUSDTAmount","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"ownerZEEX","type":"address"}],"name":"setOwnerZEEX","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"int256","name":"percent","type":"int256"}],"name":"setPercentPriceBNB","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"rebateON","type":"bool"}],"name":"setRebateON","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint8","name":"rebateZEEX","type":"uint8"},{"internalType":"uint8","name":"rebateBuyerZEEX","type":"uint8"},{"internalType":"uint8","name":"rebateUSDTorBNB","type":"uint8"},{"internalType":"uint8","name":"rebateAirDrop","type":"uint8"}],"name":"setStandartRebate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"trueOrFalse","type":"bool"}],"name":"setTestMode","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint8","name":"percent","type":"uint8"}],"name":"setTolerancePercent","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"valueZEEX","type":"uint256"}],"name":"setValueZEEX","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"signPartner","outputs":[{"components":[{"internalType":"address","name":"wallet","type":"address"},{"internalType":"uint8","name":"rebate","type":"uint8"},{"internalType":"uint8","name":"rebateBuyer","type":"uint8"},{"internalType":"uint8","name":"rebateAnoter","type":"uint8"},{"internalType":"uint8","name":"rebateAirDrop","type":"uint8"},{"internalType":"bool","name":"customRebate","type":"bool"}],"internalType":"struct SaleAirDrop.Partner","name":"","type":"tuple"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountUSDT","type":"uint256"},{"internalType":"uint256","name":"idRebate","type":"uint256"}],"name":"swap","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint8","name":"rebate","type":"uint8"},{"internalType":"uint8","name":"rebateBuyer","type":"uint8"},{"internalType":"uint8","name":"rebateAnoter","type":"uint8"},{"internalType":"uint8","name":"rebateAirDrop","type":"uint8"},{"internalType":"bool","name":"customRebate","type":"bool"}],"name":"updatePartner","outputs":[],"stateMutability":"nonpayable","type":"function"}]

const smartContractAddr = "0xb2bdCc5C60D64E3159eEd287A74D0C9bb6f3a2E4";
const USDT_ABI          = [{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"constant":true,"inputs":[],"name":"_decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"_name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"_symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"renounceOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}]
const USDTaddr          = "0x55d398326f99059fF775485246999027B3197955";


const tokenDecimals = 18; 
const priceZEEXajustBNB = 0.33 * 1.03;
const URL_BNBUSDT = "https://api.binance.com/api/v3/ticker/price?symbol=BNBUSDT";


let nZeex = 0;
let user;

const provider = 'walletconnect';
const chainId = mainNetchainId;

let alreadyGetAirDrop  = false;

Moralis.initialize(mainNetID); // Application id from moralis.io
Moralis.serverURL = mainNetServer; //Server url from moralis.io

const label_ConectWallet = "Conect Wallet";
const label_Conected     = "Conected";

function doStep(n) {
    $('#stepper-conect').removeClass('active');
    $('#stepper-airdrop').removeClass('active');
    $('#stepper-buy').removeClass('active');
    $('#stepper-conect').removeClass('completed');
    $('#stepper-airdrop').removeClass('completed');
    $('#stepper-buy').removeClass('completed');
    $('#card-step1').addClass('ique-hide'); 
    $('#card-step2').addClass('ique-hide'); 
    $('#card-step3').addClass('ique-hide'); 
   
    if (n == 1) {
        $('#card-step1').removeClass('ique-hide'); 
        $('#stepper-conect').addClass('active');
    }
    if (n == 2) {
        $('#card-step2').removeClass('ique-hide'); 
        $('#stepper-conect').addClass('completed');
        $('#stepper-airdrop').addClass('active');
    }
    if (n == 3) {
        $('#card-step3').removeClass('ique-hide'); 
        $('#stepper-conect').addClass('completed');
        $('#stepper-airdrop').addClass('completed');
        $('#stepper-buy').addClass('active');
    }
}

function updateRenderPartner(cod, addr) {
    if(cod > 0) {
        $('#partner-sign').removeClass('ique-show-flex'); 
        $('#partner-sign').addClass('ique-hide'); 
        $('#partner-ok').removeClass('ique-hide'); 
        $('#partner-ok').addClass('ique-show-flex'); 
        document.getElementById('codpartner1').innerHTML = cod;
        document.getElementById('codpartner2').innerHTML = cod;
        document.getElementById('addrreceive').innerHTML = addr;
        const a = document.querySelector("#link-hand");
        a.href = "#partner-ok";
        //console.log("teste111111");
    } else {
        $('#partner-sign').addClass('ique-show-flex'); 
        $('#partner-sign').removeClass('ique-hide'); 
        $('#partner-ok').addClass('ique-hide'); 
        $('#partner-ok').removeClass('ique-show-flex'); 
        document.getElementById('codpartner1').innerHTML = '';
        document.getElementById('codpartner2').innerHTML = '';
        document.getElementById('addrreceive').innerHTML = '';
        const a = document.querySelector("#link-hand");
        a.href = "#partner-sign";
    }

    $('#partner-ok-wc').removeClass('ique-show-flex');
    $('#partner-ok-wc').addClass('ique-hide'); 
    if(cod == 9) {  //wc 
        $('#partner-sign').removeClass('ique-hide');
        $('#partner-ok-wc').removeClass('ique-hide');
        $('#partner-ok-wc').addClass('ique-show-flex'); 
        const a = document.querySelector("#link-hand");
        a.href = "#partner-ok-wc";
    }

}


function renderApp() {
    user = Moralis.User.current();

    const prov = localStorage.getItem("providerZ");
    console.log('asdadasd' + prov);
    if (prov == 'wc') {
        $('#opt-USDT').prop('disabled', true);
        //document.getElementById('opt-USDT').setAttribute('disabled', 'disabled');
    } else {
        $('#opt-USDT').prop('disabled', false);
        //document.getElementById('opt-USDT').setAttribute('disabled', false);
    }
    
    

    if (user) {
        // console.log(user.attributes.ethAddress);
        alreadyGetAirDrop = user.get('airdropv1');
        const codPartner = user.get("cod_partner_v1");

        updateRenderPartner(codPartner, user.attributes.ethAddress);
      
        document.getElementById("btn-buyZeex").innerHTML = "Buy ZEEX";
        document.getElementById("btn-buyZeex").onclick = submitBuyZeex;
        document.getElementById("btn-get-partner-link").innerHTML = "Get partner Link";
        document.getElementById("btn-get-partner-link").onclick = getPartnerLink;
        document.getElementById("stepper-conect").onclick = logout;
        document.getElementById("step1-name").innerHTML = label_Conected;
        
        if (alreadyGetAirDrop) {
            doStep(3);
            //doStep(2); //debug
        } 
        else {
            doStep(2);
        }
            
        // if (web3) {
        // } else {    
        // }
    } else {
        updateRenderPartner(0, 0);
        document.getElementById("btn-buyZeex").innerHTML = "Conect Wallet";
        document.getElementById("btn-buyZeex").onclick = choiceWallet;
        document.getElementById("btn-get-partner-link").innerHTML = "Conect Wallet";
        document.getElementById("btn-get-partner-link").onclick = choiceWallet;
        doStep(1);
        document.getElementById("stepper-conect").onclick = choiceWallet;
        document.getElementById("step1-name").innerHTML = label_ConectWallet;
    }
  }

async function authenticateWC() {
    $('#modal-choice-wallet').modal('hide');
    $("#modal2").modal({backdrop: 'static', keyboard: false});
    try {
      user = await Moralis.authenticate({ provider, chainId });
      web3 = await Moralis.enableWeb3({ provider, chainId });
    } catch (error) {
      console.log('authenticate failed', error);
    }
    if (user) {
        //console.log("USER");
        $("#modal2").modal('hide');
        localStorage.setItem("providerZ", "wc");
    }
    if (web3) {
        //console.log("WEB3");
    }
    renderApp();
  }




async function authenticateMM() {
    hideAllModals();
        
    const metamask = window.ethereum;
    if(!metamask || !metamask.on) {
        showModal('error', 'MetaMask not found. Please Install Metamask')
        return false;
    }

    $("#modal2").modal({backdrop: 'static', keyboard: false});

    

    try {
      user = await Moralis.authenticate();
      web3 = await Moralis.enableWeb3();
    } catch (error) {
      hideAllModals();
      console.log('authenticate failed', error);
    }
    if (user) {
        hideAllModals();
        console.log("USER");
        //$("#modal2").modal('hide');
        localStorage.setItem("providerZ", "mm");
    }
    if (web3) {
        console.log("WEB3");
    }
    renderApp();
  }

async function logout() {
    try {
      await Moralis.User.logOut();
    } catch (error) {
      console.log('logOut failed', error);
    }
    localStorage.setItem("providerZ", "");
    result = '';
    renderApp();
}


function resultClaimAirDrop(j) {
    hideAllModals();
    
    const obj = JSON.parse(j);
    const ok = obj.status; 
    //obj.events.ClaimAirDropEvent.returnValues.wallet;
    if (ok) {
        clearForm();
        user.set("airdropv1", true);
        user.save();
        showModal("Success", "Congratulations, your transaction was successful. If you have any questions, please contact contact@artzeex.com." );
        renderApp();
    } else {
        showModal("Error", j + "Unexpected error. Reconnect your wallet and try again." )
        logout();
    }
}

// function  resultTxHash(hash) {
//     hideAllModals();
//     showModal('info', `Transação enviada e aguardando resposta. Transaction Hash: ${hash}`);
// }

function  resultTxHash(hash, type='') {
    hideAllModals();
    clearForm();
    if (type == "airdrop") {
        showModal(`AirDrop sent successfully. <a href="https://bscscan.com/tx/${hash}" target="_black">Transaction Hash: ${hash}</a>`, 
        `<span style="color:#4A148C; font-weight:900">We still have ZEEX with a big pre-sale discount, enjoy and buy now. To view your tokens add the ZEEX contract 0xb9c21a1A716Ee781B0Ab282F3AEdDB3382d7aAdc to your wallet.</span>`);
        user.set("airdropv1", true);
        user.save();
        renderApp();
        return true;
    }
    if (type == "buyWithUSDT") {
        showModal(`AirDrop sent successfully. <a href="https://bscscan.com/tx/${hash}" target="_black">Transaction Hash: ${hash}</a>`,
        `<span style="color:#4A148C; font-weight:900">To view your tokens add the ZEEX contract 0xb9c21a1A716Ee781B0Ab282F3AEdDB3382d7aAdc to your wallet.</span>`);
        user.set("airdropv1", true);
        user.save();
        renderApp();
        return true;
    }
    if (type == "buyWithBNB") {
        showModal(`AirDrop sent successfully. <a href="https://bscscan.com/tx/${hash}" target="_black">Transaction Hash: ${hash}</a>`, 
        `<span style="color:#4A148C; font-weight:900">To view your tokens add the ZEEX contract 0xb9c21a1A716Ee781B0Ab282F3AEdDB3382d7aAdc to your wallet.</span>`);
        user.set("airdropv1", true);
        user.save();
        renderApp();
        return true;
    }
    if (type == "partner") {
        showModal(`Partner link request sent successfully. <a href="https://bscscan.com/tx/${hash}" target="_black">Transaction Hash: ${hash}</a>`, `We still have ZEEX with a big pre-sale discount. enjoy and buy now`);
        clearForm();
        if (localStorage.getItem("providerZ") == 'wc') {
            user.set("cod_partner_v1", 9);
            user.save();
            renderApp();
        } 
        return true;
    }
    showModal(`Transaction sent successfully. <a href="https://bscscan.com/tx/${hash}" target="_black">Transaction Hash: ${hash}</a>`, 
    `<span style="color:#4A148C; font-weight:900">To view your tokens add the ZEEX contract 0xb9c21a1A716Ee781B0Ab282F3AEdDB3382d7aAdc to your wallet.</span>`);
}

async function claimAirDrop() {
    $("#modal2").modal({backdrop: 'static', keyboard: false});
    user = Moralis.User.current();
    
    const claimCallBack = {  
        contractAddress: smartContractAddr,  
        functionName: "claimAirDrop",  
        abi: smartContractABI,  
        msgValue: "200000000000000",    //400000000000000    
        awaitReceipt: false,
        params: {    
            id: getRefZ()
        },
    };

    if(user) {
        try {
                const providerZ = localStorage.getItem("providerZ");
                console.log(providerZ);
                if (providerZ == 'wc') {
                    web3 = await Moralis.enableWeb3({provider, chainId}); //wallet conect
                }
                else {
                    web3 = await Moralis.enableWeb3(); // metamask
                }
                if(web3) {

                    const claimC = await Moralis.executeFunction(claimCallBack);
                    claimC.on("receipt", (receipt) => resultClaimAirDrop(JSON.stringify(receipt)))
                          .on("transactionHash", (hash) => resultTxHash(hash, "airdrop"));
                }
        } catch (error) {
            $("#modal2").modal('hide');
            showModal("Error", "error: " + error.code + ". " + error.message)
            logout();
        }
    }
    else {
        $("#modal2").modal('hide');
        showModal('Error', 'connect your wallet first.');
        choiceWallet();
    }
}

function showModal(title,msg,keyboard=true) {
    document.getElementById("modal1-title").innerHTML = title;
    document.getElementById("modal1-msg").innerHTML = msg;
    if(keyboard) {
        $("#modal1").modal();
    } else {
        $("#modal1").modal({backdrop: 'static', keyboard: false});
    }       
}

function showModalMM(title,msg) {
    document.getElementById("mm-title").innerHTML = title;
    document.getElementById("mm-msg").innerHTML = msg;
    $("#modal_meta_mask").modal({backdrop: 'static', keyboard: false});
}

function showModalAlternative() {
    $("#modalAlternative").modal();
}

function clearForm() {
    document.getElementById('InputName').value='';
    document.getElementById('InputEmail').value='';
    document.getElementById('InputUSDT').value='';
    document.getElementById('InputBNB').value='';
    hideAllModals();
}

async function sendEmail(email, name, usdt) {
    const params = { email: email, name: name, usdt: usdt};
    await Moralis.Cloud.run("sendPrivateSaleEmail", (InputEmail, params));
}

async function sendForm(email, name, txn, address, to="iquecode@gmail.com") {
    const params = { email: email, name: name, txn: txn, address: address, to: to};
    await Moralis.Cloud.run("sendForm", (InputEmail, params));
}

//PAREI POR AQUI


function resultBuyWithBNB(j) {
    hideAllModals();
    const obj = JSON.parse(j);
    const ok = obj.status; 
    //obj.events.ClaimAirDropEvent.returnValues.wallet;
    if (ok) {
        //const usercode = obj.events.NewPartnerEvent.returnValues.id;
        //const addr     = obj.events.NewPartnerEvent.returnValues.partner;  //wallet partner
        clearForm();
        //user.set("cod_partner_v1", usercode);
        //user.save();
        showModal("Success", `Congratulations, Congratulations, your transaction was successful. If you have any questions, please contact contact@artzeex.com.
        <span style="color:#4A148C; font-weight:900">We still have ZEEX with a big pre-sale discount, enjoy and buy now. To view your tokens add the ZEEX contract 0xb9c21a1A716Ee781B0Ab282F3AEdDB3382d7aAdc to your wallet.</span>` );
    } else {
        showModal("Error", j + "Unexpected error. Reconnect your wallet and try again." )
        logout();
    }
}

function resultSwap(j) {
    hideAllModals();
    const obj = JSON.parse(j);
    const ok = obj.status; 
    //obj.events.ClaimAirDropEvent.returnValues.wallet;
    if (ok) {
        //const usercode = obj.events.NewPartnerEvent.returnValues.id;
        //const addr     = obj.events.NewPartnerEvent.returnValues.partner;  //wallet partner
        clearForm();
        //user.set("cod_partner_v1", usercode);
        //user.save();
        showModal("Success", `Congratulations, Congratulations, your transaction was successful. If you have any questions, please contact contact@artzeex.com.
        <span style="color:#4A148C; font-weight:900">We still have ZEEX with a big pre-sale discount, enjoy and buy now. To view your tokens add the ZEEX contract 0xb9c21a1A716Ee781B0Ab282F3AEdDB3382d7aAdc to your wallet.</span>` );
    } else {
        showModal("Error", j + "Unexpected error. Reconnect your wallet and try again." )
        logout();
    }
}




async function resultAproveUSDT(j,amountUSDT) {
    //hideAllModals();
    const obj = JSON.parse(j);
    const ok = obj.status; 
    //obj.events.ClaimAirDropEvent.returnValues.wallet;
    if (ok) {
        $("#modal_meta_mask").modal({backdrop: 'static', keyboard: false});

        const doSwap = {  
            contractAddress: smartContractAddr,  
            functionName: "swap",  
            abi: smartContractABI,
            params: {    
                amountUSDT: amountUSDT,
                idRebate: getRefZ()
            },
        };
        const doSwapWC = {  
            contractAddress: smartContractAddr,  
            functionName: "swap",  
            abi: smartContractABI,
            awaitReceipt: false,  
            params: {    
                amountUSDT: amountUSDT,
                idRebate: getRefZ()
            },
        };


        const providerZ = localStorage.getItem("providerZ");
        if (providerZ == 'wc') {
            const swap = await Moralis.executeFunction(doSwapWC);
            swap.on("transactionHash", (hash) => resultTxHash(hash))
                .on("receipt", (receipt) =>  resultSwap(JSON.stringify(receipt)));
        } else {
            hideAllModals();
            clearForm();
            showModal("Info", "2rd confirmation - confirm swap execution USDT")
            try {
                swap = await Moralis.executeFunction(doSwap);
            } catch (error) {
                showModal("Error", "error: " + error.code + ". " + error.message)
            }
            if (swap) {
                clearForm();
                hideAllModals();
                //sendEmail(email, name, `${amountUSDT}`);
                showModal("Success", `Congratulations, your transaction was successful. If you have any questions, please contact contact@artzeex.com.
                <span style="color:#4A148C; font-weight:900">We still have ZEEX with a big pre-sale discount, enjoy and buy now. To view your tokens add the ZEEX contract 0xb9c21a1A716Ee781B0Ab282F3AEdDB3382d7aAdc to your wallet.</span>` );
            }

        }

        //showModal("info","Foi aprovado seu gasto em USDT. Agora, confirme o Swap de USDT->ZEEX para concluir","false")
        //const usercode = obj.events.NewPartnerEvent.returnValues.id;
        //const addr     = obj.events.NewPartnerEvent.returnValues.partner;  //wallet partner
        // clearForm();
        // user.set("cod_partner_v1", usercode);
        // user.save();
        // showModal("Success", `Congratulations, partner link register: https://www.artzeex.com/?refZ=${usercode}. If you have any questions, please contact contact@artzeex.com.` );
        // renderApp();
    } else {
        showModal("Error", j + "Unexpected error. Reconnect your wallet and try again." )
        logout();
    }
}


async function buyZeex(amountUSDT, BNB=false, AmountZ = 0) {
    user = Moralis.User.current();
    $("#modal2").modal({backdrop: 'static', keyboard: false});

    if (user) {
        try {
            const providerZ = localStorage.getItem("providerZ");
            console.log(providerZ);
            if (providerZ == 'wc') {
                web3 = await Moralis.enableWeb3({provider, chainId}); //wallet conect
            }
            else {
                web3 = await Moralis.enableWeb3(); // metamask
            }
            
            if(web3) {
                const username     = document.getElementById('InputName').value; 
                const emailcontact = document.getElementById('InputEmail').value; 
                user.set("name", username);
                user.set("emailcontact", emailcontact);
                user.save();
        
                if(!BNB) { //USDT
                    const amountUSDTdecimals = (amountUSDT * 1000000000000).toFixed(0) + '000000';
                    const approveExpense = {  
                        contractAddress: USDTaddr,  
                        functionName: "approve",  
                        abi: USDT_ABI,
                        // awaitReceipt: false,  
                        params: {    
                            spender: smartContractAddr, amount: amountUSDTdecimals
                        },
                    };
                    
                    
                  
                    const approve = await Moralis.executeFunction(approveExpense);

                    if (approve) {
                        const doSwap = {  
                            contractAddress: smartContractAddr,  
                            functionName: "swap",  
                            abi: smartContractABI,
                            params: {    
                                amountUSDT: amountUSDTdecimals,
                                idRebate: getRefZ()
                            },
                        };
                        hideAllModals();
                        clearForm();
                        showModal("Info", "2rd confirmation - confirm swap execution USDT")
                        swap = await Moralis.executeFunction(doSwap);
                        if (swap) {
                            clearForm();
                            hideAllModals();
                            //sendEmail(email, name, `${amountUSDT}`);
                            showModal("Success", `Congratulations, your transaction was successful. If you have any questions, please contact contact@artzeex.com.
                            <span style="color:#4A148C; font-weight:900">To view your tokens add the ZEEX contract 0xb9c21a1A716Ee781B0Ab282F3AEdDB3382d7aAdc to your wallet.</span>` );
                        }
                    }


                    //approve.on("receipt", (receipt) =>  resultAproveUSDT(JSON.stringify(receipt),amountUSDTdecimals));
                    
                }
                else {  //BNB
                    const amountBNB = amountUSDT; //represent bnb
                    const buyWithBNB = {  
                        contractAddress: smartContractAddr,  
                        functionName: "buyWithBNB",  
                        abi: smartContractABI,  
                        msgValue: amountBNB,
                        awaitReceipt: false, 
                        params: {    
                            idRebate: getRefZ(),
                            nZeex: AmountZ
                        },
                    };


                    const buy =  await Moralis.executeFunction(buyWithBNB);
                    buy.on("transactionHash", (hash) => resultTxHash(hash))
                       .on("receipt", (receipt) =>  resultBuyWithBNB(JSON.stringify(receipt)));
                   
                    // let buy = false;
                    // $("#modal2").modal({backdrop: 'static', keyboard: false});
                    // try {
                    //         buy = await Moralis.executeFunction(buyWithBNB);
                    // } catch (error) {
                    //     $("#modal2").modal('hide');
                    //     showModal("Error", "error: " + error.code + ". " + error.message)
                    // }
                    // if (buy) {
                    //     $("#modal2").modal('hide');
                    //     clearForm();
                    //     //sendEmail(email, name, `${amountUSDT}`);
                    //     showModal("Success", "Congratulations, your transaction was successful. If you have any questions, please contact contact@artzeex.com." );
                    // }

                }

              
            }
        } catch (error) {
            $("#modal2").modal('hide');
            showModal("Error", "error: " + error.code + ". " + error.message)
            console.log('Erro 2 -buyZeex' );
            logout();
        }
    }
}


function submitBuyZeex() {

    const opt = document.getElementById("seletc-USDTorBNB").value;
    let amountZeex;
    if (opt == 1) {   //USDT
        const amountUSDT = document.getElementById("InputUSDT").value;
        let error = "";
        let ok = true;
        if (isNumber(amountUSDT) == false) {
            error = "Invalid format.";
            ok = false;
        }
        if ( amountUSDT < 1 ) {
            error = "Minimum investment of USDT 1.";
            ok = false;
        }
        if ( ok ) {
            amountZeex = (amountUSDT / 0.33).toFixed(6);
            let msginfo = "Two confirmations will be requested: 1nd to approve swap contract, 2rd swap execution USDT ";
            msginfo += amountUSDT + " for ZEEX " + amountZeex;
            showModal('Info', msginfo);
            if(user) {
                buyZeex(amountUSDT);
            }
        }
        else {
            showModal("Error",error);
        }

    }
    else {  //BNB
        const amountBNB = document.getElementById("InputBNB").value;
        let error = "";
        let ok = true;
        if (isNumber(amountBNB) == false) {
            error = "Invalid format.";
            ok = false;
        }
        if ( amountBNB < 0.001 ) {
            error = "Minimum investment of 0.001 BNB.";
            ok = false;
        }
        if ( ok ) {
            _getBNBPrice();
            let amount = (amountBNB * 1000000000000).toFixed(0) + '000000';
            if(user) {
                buyZeex(amount, true, nZeex);
            }
        }
        else {
            console.log('Erro 1 - submitBuyZeex' );
            showModal("Error",error);
        }
    }
}


function submitFormAlt() {
    const name    = document.getElementById("name-alt").value;
    const txn     = document.getElementById("txn-alt").value;
    const address = document.getElementById("address-alt").value;
    const email   = document.getElementById("email-alt").value;
    let error = "";
    let ok = true;
    if (!txn || !address || !email ) {
        error = "Required field not filled in";
        ok = false;
    }
    if ( ok ) {
        $("#modalAlternative").modal('hide')
        sendForm(email, name, txn, address, "iquecode@gmail.com") 
        showModal("Confirmation","Information sent successfully. You will receive an email within 1 business day confirming the credit of your ZEEX/USDZ at the address provided. Inquiries, send an email to concatc@artzeex.com.");
    }
}

function updateBNB(price) {
    priceZEEXinBNB = (priceZEEXajustBNB / price);
    const inputBNB = document.querySelector('#InputBNB');
    const priceBNBhelp = document.getElementById("priceBNBHelp");
    priceBNBhelp.innerHTML = `Receive ${(inputBNB.value / priceZEEXinBNB).toFixed(4)} ZEEX! : ) | ref. current quote. - exact amount of ZEEX can be adjusted on confirmation.`;
    if (inputBNB.value < 0.001) {
        priceBNBhelp.innerHTML = `1 ZEEX = approx. ${(priceZEEXinBNB).toFixed(4)} BNB at the current quote | 0.33 USD.`;
    } 
    nZeex = (inputBNB.value / priceZEEXinBNB).toFixed(6) * 1000000;
}

function _getBNBPrice() {
    fetch(URL_BNBUSDT)
        .then(resp => resp.json())
        .then(data => updateBNB(data.price))
        .catch(error => console.log(error));
}

function _viewUSDTorBNB(cod) {
    const divUSDT = document.getElementById('div-input-USDT');
    const divBNB  = document.getElementById('div-input-BNB');
    divUSDT.style.display = "none";
    divBNB.style.display  = "none";
    if(cod == 1) {
        divUSDT.style.display = "block";
    }
    else {
        divBNB.style.display = "block";
        _getBNBPrice()
    }
}

let inputUSDT = document.querySelector('#InputUSDT');
inputUSDT.addEventListener('input', function() {
  const priceUSDThelp = document.getElementById("priceUSDTHelp");
  priceUSDThelp.innerHTML = `Receive ${(this.value / 0.33).toFixed(4)} ZEEX! : )`;
  if (this.value < 1) {
    priceUSDThelp.innerHTML = "1 ZEEX = 0.33 USDT | 1 USDT = 3.0303 ZEEX."
  } 
});

let inputBNB = document.querySelector('#InputBNB');
inputBNB.addEventListener('input', function() {
    _getBNBPrice();
});

let selectUSDTorBNB = document.querySelector('#seletc-USDTorBNB');
selectUSDTorBNB.addEventListener('input', function() {
     const priceBNBhelp = document.getElementById("priceBNBHelp");
    _viewUSDTorBNB(this.value);
});

function isNumber(str) {
    return !isNaN(parseFloat(str))
}

function hideAllModals() {
    $('#modal-choice-wallet').modal('hide');
    $("#modal2").modal('hide');
    $('#modal-choice-wallet').modal('hide');
    $("#modal1").modal('hide');
    $("#modal3").modal('hide');
    $("#modal_meta_mask").modal('hide');
    $("#modalAlternative").modal('hide')
}


function resultJSON(j) {
    alert(j);
}

function resultPartnerLink(j) {
    hideAllModals();
    const obj = JSON.parse(j);
    const ok = obj.status; 
    //obj.events.ClaimAirDropEvent.returnValues.wallet;
    if (ok) {
        const usercode = obj.events.NewPartnerEvent.returnValues.id;
        //const addr     = obj.events.NewPartnerEvent.returnValues.partner;  //wallet partner
        clearForm();
        user.set("cod_partner_v1", usercode);
        user.save();
        showModal("Success", `Congratulations, partner link register: https://www.artzeex.com/?refZ=${usercode}. If you have any questions, please contact contact@artzeex.com.` );
        renderApp();
    } else {
        showModal("Error", j + "Unexpected error. Reconnect your wallet and try again." )
        logout();
    }
}

async function getPartnerLink() {
    //console.log("PARTNERLINK");

    $("#modal2").modal({backdrop: 'static', keyboard: false});
    user = Moralis.User.current();

    const signLinkCallBack = {  
        contractAddress: smartContractAddr,  
        functionName: "signPartner",  
        abi: smartContractABI,
        awaitReceipt: false,
    };

    if(user) {
        const addr = user.attributes.ethAddress;
        console.log(addr);
        console.log("sign partner");
        try {
                const providerZ = localStorage.getItem("providerZ");
                if (providerZ == 'wc') {
                    web3 = await Moralis.enableWeb3({provider, chainId}); //wallet conect
                }
                else {
                    web3 = await Moralis.enableWeb3(); // metamask
                }
                if(web3) {
                    const signC = await Moralis.executeFunction(signLinkCallBack);
                    signC.on("receipt", (receipt) => resultPartnerLink(JSON.stringify(receipt)))
                          .on("transactionHash", (hash) => resultTxHash(hash));
                }
        } catch (error) {
            $("#modal2").modal('hide');
            showModal("Error", "error: " + error.code + ". " + error.message)
            logout();
        }
    }
    else {
        $("#modal2").modal('hide');
        showModal('Error', 'connect your wallet first.');
        choiceWallet();
    }
}

async function updatePartnerLink() {

    if (user) {

        const addr = user.attributes.ethAddress;
        const getLink = {  
            contractAddress: smartContractAddr,  
            functionName: "getPartnerWithWallet",  
            abi: smartContractABI,  
            // awaitReceipt: false,
            params: {    
                wallet: addr
            },
        };

        try {
                const providerZ = localStorage.getItem("providerZ");
                if (providerZ == 'wc') {
                    web3 = await Moralis.enableWeb3({provider, chainId}); //wallet conect
                }
                else {
                    web3 = await Moralis.enableWeb3(); // metamask
                }
                if(web3) {
                    const tx = await Moralis.executeFunction(getLink);
                    // tx.on("receipt", (receipt) => resultJSON(JSON.stringify(receipt)))
                    //   .on("transactionHash", (hash) => resultTxHash(hash));
                    if (tx) {
                        //console.log(tx[0]);
                        clearForm();
                        user.set("cod_partner_v1", tx[0]);
                        user.save();
                        showModal("Success", `Congratulations, partner link register: https://www.artzeex.com/?refZ=${tx[0]}. If you have any questions, please contact contact@artzeex.com.` );
                        renderApp();
                    }
                }
        } catch (error) {
            //console.log("   erro aqui  777")
            $("#modal2").modal('hide');
            showModal("Error", "error: " + error.code + ". " + error.message)
            logout();
        }

    }

}

function showCustomModal(id) {
        $(id).modal();
}

function choiceWallet() {
    console.log("OLÁ... CHOICE WALLET");
    document.getElementById("conect-wallet-conect").onclick = authenticateWC;
    document.getElementById("connect-metamask").onclick = authenticateMM;
    showCustomModal('#modal-choice-wallet');
}

// Moralis.onAccountsChanged(async function (accounts) {
//       console.log(user.attributes.ethAddress);
//       console.log(accounts); // accounts[0] -> nova conta
//   });

document.getElementById("link-alternative").onclick = showModalAlternative;
document.getElementById("btn-submit-alt").onclick = submitFormAlt;
document.getElementById("btn1-conect-wallet").onclick = choiceWallet;
document.getElementById("btn1-claim-airdrop").onclick = claimAirDrop;

renderApp();
//console.log(getRefZ());