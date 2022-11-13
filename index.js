
let provider = new ethers.providers.Web3Provider(window.ethereum)
let signer

// 1. Connect Metamask with Dapp
async function connectMetamask() {
    // MetaMask requires requesting permission to connect users accounts
    await provider.send("eth_requestAccounts", []);

    signer = await provider.getSigner();

    console.log("Account address is:", await signer.getAddress());
}

// 2. Get balance
async function getBalance() {
    const balance = await signer.getBalance()
    const convertToEth = 1e18;
    console.log("accounts balance in ether:", balance.toString() / convertToEth);
}

