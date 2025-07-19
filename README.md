# 📱 To Do List – React Native

This is a simple mobile to-do list app built with React Native and Expo. Users can add, mark as completed, and delete tasks. It also tracks how many tasks were created and completed.

  🧩 This project has a twin web version built with React. You can find it [here](https://github.com/ithauront/ToDoList).

## 🔍 Features

   * ✅ Add tasks

   * ☑️ Toggle tasks as completed

   * ❌ Remove tasks

   * 📊 View count of created and completed tasks

   * 📱 Simple and clean mobile interface

## 🧪 Technologies Used

   * React Native

   * Expo

   * TypeScript

   * React Native StyleSheet

🎨 UI & Styling

The interface is built using native React Native components like View, Text, TouchableOpacity, TextInput, and FlatList. All styles are handled via the StyleSheet API.

🧠 What I Praticed

This was one of  my first project using React Native, and it helped me understand the basics of building mobile apps. In this project, I preticed how to:

  *  Set up and run a React Native app using Expo

  *  Use the Expo Go app to test directly on a physical device

  *  Emulate an Android device using Android Studio

  *  Create components using React Native primitives like View, Text, FlatList, and TouchableOpacity

  *  Manage component state and arrays with useState

  *  Style mobile components using StyleSheet API



## 🧪 Getting Started

Before running the app, make sure you have:

   * Node.js installed

   * Expo CLI installed globally:
```bash
npm install -g expo-cli
```

### 🚀 Running the App

```bash
# Clone the repo
git clone https://github.com/ithauront/to-do-list-react-native
cd to-do-list-react-native

# Install dependencies
npm install

# Start the development server
npx expo start
```

**📱 Option 1**: Run on your physical device (recommended for beginners)

   * Install Expo Go from the Play Store or App Store

   * Scan the QR code shown in your terminal or browser after expo start

This works without needing to configure any Android SDK.

**🖥️ Option 2**: Run on an Android Emulator (requires Android Studio)

If you prefer running the app in an emulator:

  * Install Android Studio

  *  Install an Android Virtual Device (AVD) via AVD Manager

  *  Make sure your ANDROID_HOME environment variable is correctly set

  *  Then run:

 ```bash 
    npx expo start --android
```
