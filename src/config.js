export const config = {
    // Base URL
    MBS_CMS_API_URL: process.env.REACT_APP_API_URL
};

export const awsAuthConfig = {
    region: process.env.REACT_APP_AUTH_REGION,
    userPoolId: process.env.REACT_APP_AUTH_USER_POOL_ID,
    userPoolWebClientId: process.env.REACT_APP_AUTH_USER_POOL_WEB_CLIENT_ID
};
