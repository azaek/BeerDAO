import sdk from "./1-initialize-sdk.js";

import dotenv from "dotenv";
dotenv.config();


const tokenModule = sdk.getTokenModule(
    "0xfDD264bC4e3250332835b3B4F54e8E5D9704bae3",
);

(async () => {
    try {
        // Log the current roles.
        console.log(
            "👀 Roles that exist right now:",
            await tokenModule.getAllRoleMembers()
        );

        // Revoke all the superpowers your wallete had over ERC-20 contract.
        await tokenModule.revokeAllRolesFromAddress(process.env.WALLET_ADDRESS);

        console.log(
            "🎉 Roles after revoking ourselves",
            await tokenModule.getAllRoleMembers()
        );
        console.log("✅ Successfully revoked our superpowers from the ERC-20 contract");

    } catch (error) {
        console.error("Failed to revoke ourselves from the DAO treasury", error);

    }
})()