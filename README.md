<p align="center" >
  <img alt="React Native" src="https://img.shields.io/badge/react_native%20-%2320232a.svg?&style=for-the-badge&logo=react&logoColor=%2361DAFB"/>
  <img alt="TypeScript" src="https://img.shields.io/badge/typescript%20-%23007ACC.svg?&style=for-the-badge&logo=typescript&logoColor=white"/>
</p>

# React-Native Starter Kit

## Features
- Uses Typescript
- Uses React Native 0.66.4
- Uses React Navigation 6
- Ready to use Firebase services (app, messaging, and crashlytics)
- Uses MMKV as the local storage to gain high-performance on read-write operation
- Ready to use Fetch handler
- Ready to use notification handler (uses Notifee)
- Ready to use image-picker handler
- Uses absolute import instead of relative import
- Ready to use bottom-sheet component (uses Modalize & Portalize)
- Automatically remove all `console.*` logging on production build (uses `babel-plugin-transform-remove-console`), to improve app performance
- Hermes enabled on both iOS and Android
- Proguard enabled on Android

## Note
This template support SDK version 23 and above for Android, iOS 11 and above for iOS. See `android/build.gradle` for more detail.

## Usage

### Initialize a new project
```
npx react-native init ProjectName --template https://gitlab.com/react-native-crocodic/rn-starter-kit.git
```
Feel free to try running on device after your project initialization completed.

For next usage you must rename your project name first. 
Because of some limitations the init command above are not supposed to rename your whole project name.
It's just created a fresh new project based on our template. We will try to overcome this limitation as soon as possible.

To rename project run:
```
npx react-native-rename ProjectName
```
After completed, you must rename your app package-name for Android: 
```
npx react-native-rename ProjectName -b <your.package.name>
```
For iOS please use XCode to rename your app bundle-id. 
After both Android & iOS project renamed, both package-name & bundle-id renamed,
please double-check it to make sure it is correct.

### Running
Start the Metro server first:
```
npx react-native start --port 8081
```

For iOS:
```
npm run pod-install
npm run ios
```

For Android:
```
npm run android
```

## To Do
- [ ] Integrate ESLint

## Contributing
We want this community to be friendly and respectful to each other. Please follow it in all of your interactions with the project.

### Development workflow
To get started with the project, you will run your most operations in the `template` directory.
Run `npm install` to install the required dependencies.
```
cd template
npm install
```

#### Commit Message Conventions

We follow [Conventional Commit](https://www.conventionalcommits.org/en/v1.0.0/) 
based on [Angular commit message guidelines](https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#-commit-message-guidelines)
for our commit messages:
- `fix`: bug fixes. Example: `fix: TypeError after install new lib`
- `feat`: new features. Example: `feat: Add new method to the module`
- `chore`: tooling changes. Example: `chore: Uninstall unused libs`
- `refactor`: code refactor. Example: `refactor: Rename file name and function name`
- `docs`: changes into documentation. Example: `docs: Add usage example of the template`

#### Scripts
The `package.json` file contains various scripts for most common tasks.  
If you are in the root directory, `cd template` at first before you run:

- `npm run start`: Start the Metro server on port 8081
- `npm run android`: Run app on Android
- `npm run ios`: Run app on iOS by selecting the target device first
- `npm run gradle-clean`: Clean gradle Android
- `npm run pod-install`: Install all iOS pod
