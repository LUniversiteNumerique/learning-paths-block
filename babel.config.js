module.exports = {
    presets: ["@babel/env", "@babel/preset-react", "@babel/preset-typescript"],
    plugins: ["@babel/transform-arrow-functions", "@babel/proposal-class-properties"], // same as "@babel/plugin-transform-arrow-functions"
};
/*
{
    "plugins": ["@babel/syntax-dynamic-import", "@babel/plugin-proposal-class-properties"],
    "presets": [
        "@babel/preset-react",
        [
            "@babel/preset-env",
            {
                "targets": "last 2 versions, ie 11, > 0.5%, not dead",
                "useBuiltIns": "entry",
                "corejs": "3"
            }
        ]
    ]
}
*/