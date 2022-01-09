import { ethers } from "ethers";
import sdk from "./1-initialize-sdk.js";

const tokenModule = sdk.getTokenModule(
    "0xfDD264bC4e3250332835b3B4F54e8E5D9704bae3"
);

(async () => {
    try {
        const amount = 1_000_000;
        const amountWith18Decimals = ethers.utils.parseUnits(amount.toString(), 18);

        await tokenModule.mint(amountWith18Decimals);
        const totalSupply = await tokenModule.totalSupply();

        console.log(
            "✅ There now is",
            ethers.utils.formatUnits(totalSupply, 18),
            "$BEER in circulation",
        );
    } catch (err) {
        console.error("Failed to print money", err);
    }
})()