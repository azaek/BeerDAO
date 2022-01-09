import sdk from './1-initialize-sdk.js';
import { readFileSync } from 'fs';

const bundleDrop = sdk.getBundleDropModule(
    "0xDb6f2DD85f75c44bE045c4B68bb4cd19f2606738"
    );

(async () => {
    try {
        await bundleDrop.createBatch([
            {
                name: "🍺Beer Cup",
                description: "Thir NFT will give you access to BeerDAO!",
                image: readFileSync("scripts/assets/beercup.png"),
            },
        ]);
        console.log("✅ Successfully created a new NFT in the drop!");
    } catch (error) {
        console.error("failed to create the new NFT", error);
    }
})()