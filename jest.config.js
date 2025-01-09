// In jest.config.js
module.exports = {
    testEnvironment: "jsdom", // Ensure Jest can handle DOM elements
    moduleNameMapper: {
        "\\.(css|less|scss|sass)$": "identity-obj-proxy", // Mock CSS files
    },
    transform: {
        "^.+\\.[t|j]sx?$": "babel-jest", // Add this to process modern JS syntax
    },
};
