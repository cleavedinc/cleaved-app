/* eslint-disable */
module.exports = function(api) {
  api.cache(true);

  const presets = [
    [
     '@babel/preset-env',
     {
      modules: false
     }
    ]
   ];

  const plugins = [
    [
      "module-resolver",
      {
        alias: {
          "@components": ["./src/components"],
          "@root": ["."],
        },
        root: ["./"],
      },
    ],
    ["styled-components", { ssr: true }],
    "@babel/plugin-proposal-optional-chaining",
  ];

  return {
    plugins,
    presets,
  };
};
