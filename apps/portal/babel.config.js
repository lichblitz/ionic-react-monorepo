module.exports = {
  plugins: [
    [
      "module-resolver",
      {
        root: ["."],
        alias: {
          components: "./src/presentation/components",
          modules: "./src/presentation/modules",
        },
      },
    ],
  ],
};
