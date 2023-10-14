const path = require("path");

module.exports = {
   entry: "./src/index.js",
   output: {
      filename: "main.js",
      path: path.resolve(__dirname, "dist"),
   },
   module: {
      rules: [
         {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
         },
         {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: "asset/resource",
         },
      ],
      moduleNameMapper: {
         "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
            "<rootDir>/__mocks__/fileMock.js",
         "\\.(css|less)$": "<rootDir>/__mocks__/styleMock.js",
      },
   },
};
