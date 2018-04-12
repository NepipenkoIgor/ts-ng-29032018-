module.exports = {
    "globals": {
        "ts-jest": {
            "tsConfigFile": "./src/AbramovVitalii/configs/test.tsconfig.json"
        }
    },
    "transform": {
        ".ts": "<rootDir>/node_modules/ts-jest/preprocessor.js"
    },
    "testMatch": [
        "<rootDir>/src/AbramovVitalii/**/*.test.ts"
    ],
    "silent": false,
    "moduleFileExtensions": [
        "ts", "js"
    ]
}