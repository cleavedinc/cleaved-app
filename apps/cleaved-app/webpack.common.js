const HTMLWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");

const HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
  template: "index.html",
  filename: "index.html",
  inject: true,
});

const sharedPlugins = [HTMLWebpackPluginConfig];

const getEntries = () => {
  const entries = {
    accountMembership: ["./src/utils/i18n.ts", "./src/pages/account/account-membership.tsx"],
    accountOrganizations: ["./src/utils/i18n.ts", "./src/pages/account/account-organizations.tsx"],
    accountOrganizationRegister: ["./src/utils/i18n.ts", "./src/pages/account/account-organization-register.tsx"],
    accountPersonalInformation: ["./src/utils/i18n.ts", "./src/pages/account/account-personal-information.tsx"],
    accountProfessionalInformation: ["./src/utils/i18n.ts", "./src/pages/account/account-professional-information.tsx"],
    home: ["./src/utils/i18n.ts", "./src/pages/home.tsx"],
    login: ["./src/utils/i18n.ts", "./src/pages/login/login.tsx"],
    main: ["./src/utils/i18n.ts", "./src/pages/index.tsx"],
    notFound: ["./src/utils/i18n.ts", "./src/pages/not-found.tsx"],
    professionalInvite: ["./src/utils/i18n.ts", "./src/pages/professional/professional-invite.tsx"],
    professionalOnboarding: ["./src/utils/i18n.ts", "./src/pages/professional/professional-onboarding.tsx"],
    professionalShareLinkRegistration: [
      "./src/utils/i18n.ts",
      "./src/pages/professional/professional-share-link-registration.tsx",
    ],
    professional: ["./src/utils/i18n.ts", "./src/pages/professional/professional.tsx"],
    privacyPolicy: ["./src/utils/i18n.ts", "./src/pages/agreements/privacy-policy.tsx"],
    projectList: ["./src/utils/i18n.ts", "./src/pages/project/project-list.tsx"],
    projectStartNew: ["./src/utils/i18n.ts", "./src/pages/project/project-start-new.tsx"],
    project: ["./src/utils/i18n.ts", "./src/pages/project/project.tsx"],
    search: ["./src/utils/i18n.ts", "./src/pages/search.tsx"],
    teamsList: ["./src/utils/i18n.ts", "./src/pages/teams/teams-list.tsx"],
    termsOfService: ["./src/utils/i18n.ts", "./src/pages/agreements/terms-of-service.tsx"],
    termsOfServiceAgreement: ["./src/utils/i18n.ts", "./src/pages/agreements/terms-of-service-agreement.tsx"],
  };

  return entries;
};

module.exports = {
  entry: getEntries(),

  devtool: "inline-source-map",

  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        loader: "babel-loader",
        options: {
          presets: [
            [
              "@babel/env",
              {
                modules: false,
              },
            ],
            "@babel/react",
            "@babel/typescript",
          ],
          plugins: ["react-hot-loader/babel", "@babel/plugin-transform-runtime"],
          env: {
            test: {
              presets: [
                "@babel/react",
                [
                  "@babel/env",
                  {
                    modules: "commonjs",
                  },
                ],
              ],
            },
          },
        },
      },
      {
        enforce: "pre",
        test: /\.(m?)js$/,
        loader: "source-map-loader",
        exclude: [/node_modules/],
      },
      {
        // For pure CSS (without CSS modules)
        test: /\.css$/i,
        exclude: /\.module\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: "url-loader",
        options: {
          limit: 10000,
        },
      },
    ],
  },

  optimization: {
    runtimeChunk: {
      name: "vendor",
    },
    splitChunks: {
      chunks: "all",
    },
    usedExports: true,
    minimizer: [new TerserPlugin()],
  },

  output: {
    filename: "[name].[fullhash].js",
    path: path.join(__dirname, "/build"),
    publicPath: "/",
  },

  plugins: [...sharedPlugins],

  resolve: {
    extensions: [".ts", ".tsx", ".mjs", ".js"],
  },
};
