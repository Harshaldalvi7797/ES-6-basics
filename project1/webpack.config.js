var path = require("path");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = {
  // entry: {
  //   demo:"../../../Batch5/Day17/ES6/src/ClassDemo/demo.js",
  //   main:"../../../Batch5/Day17/ES6/src/ClassDemo/main.js"
  // },
  mode: "production", // development // production
  entry: [
    // "../project1/src/Class/classDemo.js",
    // "../project1/src/Class/mainDemo.js",
    // "../project1/src/static/staticMethod.js",
    // "../project1/src/static/nonStaticDemo1.js",
    // "../project1/src/static/nonStaticDemo2.js",
    // "../project1/src/static/main.js",
    // "../project1/src/abstarct/abstractDemo.js",
    // "../project1/src/abstarct/childDemo.js",
    // "../project1/src/abstarct/mainDemo.js",

    // "../project1/src/Inheritance/SingleInheritance/parent.js",
    // "../project1/src/Inheritance/SingleInheritance/child.js",
    // "../project1/src/Inheritance/SingleInheritance/main.js",

    // "../project1/src/Inheritance/multilevel/A.js",
    // "../project1/src/Inheritance/multilevel/B.js",
    // "../project1/src/Inheritance/multilevel/C.js",
    // "../project1/src/Inheritance/multilevel/main.js"

    // "../project1/src/DiscountEx/discount.js",
    // "../project1/src/DiscountEx/customerA.js",
    // "../project1/src/DiscountEx/customerB.js",
    // "../project1/src/DiscountEx/salesContext.js",
    // "../project1/src/DiscountEx/salesModel.js",
    // "../project1/src/DiscountEx/salesMain.js"
    "../project1/src/DiscountExample/discount.js",
    "../project1/src/DiscountExample/customerA.js",
    "../project1/src/DiscountExample/customerB.js",
    "../project1/src/DiscountExample/salesContext.js",
    "../project1/src/DiscountExample/salesModel.js",
    "../project1/src/DiscountExample/salesMain.js"

    // "../Day19/src/Class/classDemo.js",
    // "../Day19/src/Class/mainDemo.js"
  ],
  output: {
    publicPath: "./dist/",
    path: path.join(__dirname, "./dist/"),
    //filename: "[name].build.js",
    filename: "build.js",
    library: "appGlobal"
  },
  module: {
    rules: [
      // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
      { test: /\.tsx?$/, loader: "ts-loader" },
      //{test:/\.css?$/,loaders: ['style-loader', 'css-loader']}
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              // you can specify a publicPath here
              // by default it uses publicPath in webpackOptions.output
              publicPath: "../ES6/dist/",
              hmr: process.env.NODE_ENV === "development"
              //minimize:true
            }
          },
          "css-loader"
        ]
      }
    ]
  },
  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: [".ts", ".tsx", ".js", ".jsx", ".json"]
  },
  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // all options are optional
      filename: "[name].css",
      chunkFilename: "[id].css",
      ignoreOrder: false // Enable to remove warnings about conflicting order
    }),
    new OptimizeCSSAssetsPlugin({})
  ]
};
