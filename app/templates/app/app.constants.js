const constants = {
    'LOCAL': {
        apiUrl: "http://localhost:8080"
    },
    'PROD': {
        apiUrl: "http://localhost:8080"
    },
    'TEST': {
        apiUrl: "http://localhost:8080"
    }
};
export default constants[process.env.ENVIRONMENT];