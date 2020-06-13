const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp();

// Create and Deploy Your Cloud Functions
exports.addAdmin = functions.https.onCall(async (data, context) => {
    // Add custom claims to user
    const user = await admin.auth().getUserByEmail(data.email);
    try {
        await admin.auth().setCustomUserClaims(user.uid, {
            admin: true
        });
        return {
            message: `${data.email} Successfully added as an admin`
        };
    }
    catch (error) {
        return error;
    }
})
