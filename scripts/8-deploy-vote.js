import sdk from "./1-initialize-sdk.js";

// Grab the app module address.
const appModule = sdk.getAppModule(
    "0xC7ABEdb52BC0048Ebe57ec7f34aEAEb56a0783A3",
);

(async () => {
    try {
        const voteModule = await appModule.deployVoteModule({
            // Give your governance contract a name here.
            name: "BeerDAO's Proposals",

            // This is the location of our governance token, our ERC-20 contract.
            votingTokenAddress: "0xfDD264bC4e3250332835b3B4F54e8E5D9704bae3",

            // After a proposal is created, when can members start voting?
            // For now, we set this to immediately.
            proposalStartWaitTimeInSeconds: 0,

            // How long do members have to vote ona proposal when it's created?
            // Here, we set it to 24 hours (86400 seconds).
            proposalVotingTimeInSeconds: 24*60*60,

            // Will explain more below.
            votingQuorumFraction: 0,

            // What's the minimum # of token a user needs to be allowed to create a proposal?
            // Setting it 0. This means that anyone can create a proposal.
            minimumNumberOfTokensNeededToPropose: "0",
        });

        console.log(
            "✅ Successfully deployed vote module, address:",
            voteModule.address,
        );
    } catch (err) {
        console.log("Failed to deploy vote module", err);
    }
})();