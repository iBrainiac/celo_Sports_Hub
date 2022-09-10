const {ethers} = require("hardhat")

async function main(){
    //get the contract
    const YourContract  = await ethers.getContractFactory("Marketplace");
    //deploy
    const YourContractDeploy = await YourContract.deploy();
    //await deployment
    await YourContractDeploy.deployed();
    console.log("Contract Address:",YourContractDeploy.address);
    
}
main()
.then(()=> process.exit(0))
.catch((error)=>{
    console.error(error);
    process.exit(1);
})