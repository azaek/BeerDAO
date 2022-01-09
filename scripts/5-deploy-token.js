import sdk from "./1-initialize-sdk.js";

// In order to deploy the new contract we need our old friend the app module again.
const app = sdk.getAppModule("0xC7ABEdb52BC0048Ebe57ec7f34aEAEb56a0783A3");

(async () => {
    try {
        const tokenModule = await app.deployTokenModule({
            name: "BeerDAO Governance Token",
            symbol: "BEER",
        });

        console.log(
            "✅ Successfully deployed token module, address:", 
            tokenModule.address
        );
    } catch (err) {
        console.error("Failed to deploy token module", err);
    }
})()