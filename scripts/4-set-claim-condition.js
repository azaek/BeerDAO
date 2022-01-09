import sdk from "./1-initialize-sdk.js";

const bundleDrop = sdk.getBundleDropModule(
    "0xDb6f2DD85f75c44bE045c4B68bb4cd19f2606738",
);

(async () => {
    try {
        const claimConditionFactory = bundleDrop.getClaimConditionFactory();

        claimConditionFactory.newClaimPhase({
            startTime: new Date(),
            maxQuantity: 50_000,
            maxQuantityPerTransaction: 1,
        });

        await bundleDrop.setClaimCondition(1, claimConditionFactory);
        console.log("✅ Sucessfully set claim condition on bundle drop:", bundleDrop.address);
    } catch (error) {
        console.error("Failed to set claim condition", error);
    }
})()