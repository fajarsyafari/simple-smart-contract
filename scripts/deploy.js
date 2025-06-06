async function main() {
    const [deployer] = await ethers.getSigners();

    console.log("Deploying contract with the account:", deployer.address);

    const SimpleStorage = await ethers.getContractFactory("SimpleStorage");
    const contract = await SimpleStorage.deploy(); // Deploy contract
    await contract.waitForDeployment(); // Tunggu kontrak siap

    console.log("Contract deployed to:", await contract.getAddress());
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
