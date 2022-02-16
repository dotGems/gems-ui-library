# dotGems UI; Complex Shop Example

In this example, we built a complex NFT shop using the dotGems library, highlighting its features and showcasing what's possible with the library.

# Running the Example

The example is meant to use the local definition of the dotGems UI Library. Therefore, you'll need the entire repo to run it. Here's how to make it work;

1. Clone the entire repository
2. Install dependencies for both the library (`~/ $ yarn i` & `~/example/03_complex_shop $ yarn i`)
3. Link the package to the example `~/ $ yarn link && ~/example/03_complex_shop $ yarn link @dotGems/react`
4. (automated) The prestart script will resolve duplicated react instance issue
5. Run the project with `yarn start`

# Common Issues

- If you have an error about some linked library being there twice, delete your `node_modules` at the library and `example` levels as well as the `package-lock.json` and `yarn-lock.json` reinstall your dependencies.
- Hot reload is not working at the moment.

# Resources;
- [Duplicated React Instance](https://www.offerzen.com/blog/live-reloading-react-apps-shared-library)
- [Fix Hot Refresh with Shared Library](https://www.offerzen.com/blog/live-reloading-react-apps-shared-library)