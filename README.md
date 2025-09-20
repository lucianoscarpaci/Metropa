# 🚦🌆💡 Smart-Traffic-Light-System

## 📚 Introduction
Welcome to the Smart Traffic Light System project! This innovative system is designed to enhance urban traffic management by integrating smart technology with traditional traffic lights. The system uses two Arduino boards: the Arduino Uno for controlling the pedestrian light system and the Arduino Nano for managing the traffic light system. 🚥

## ✨ Features
- **Automated Traffic Control**: Automatically switches between red and green lights based on a timer.
- **Pedestrian Integration**: Allows pedestrians to safely cross streets with a dedicated button.
- **Serial Communication**: Connects the traffic and pedestrian systems for synchronized operation.
- **Cybersecurity Focus**: Incorporates advanced protection for urban infrastructure.

## 🛡️ Track Details
### 04 Smart Cities & Cybersecurity
Ensuring advanced protection for urban infrastructure through cybersecurity and blockchain-powered solutions.

- **Focus Areas**: Cybersecurity, Blockchain Systems, Infrastructure Protection, Emergency Systems.
- **Prize Pool Value**: $625+
- **Featured Track**: Extra prizes for security innovations.
- **Main Sponsor**: Harshith Vaddiparthy ($625 prize value)
- **Additional Prizes**: Unibee.dev (3 months subscription)

## 🚀 Getting Started
To get started with the Smart Traffic Light System, follow these steps:
1. **Clone the Repository**: `git clone https://github.com/lucianoscarpaci/Smart-Traffic-Light-System.git`
2. **Load the Main Program**: Open the Arduino IDE and load the main program onto the boards.
3. **Run the System**: Power the boards and observe the smart traffic light system in action.

## 🛠️ Requirements
- **Hardware**: Arduino Uno and Arduino Nano.
- **Software**: Haskell, Nix, and Arduino IDE installed on your machine.
1. Start Nix shell:
```bash
nix-shell
```
2. Run the following commands to install both the AVR core and Intel arc32 core.
```bash
   arduino-cli core install arduino:avr Intel:arc32
```
3. Once the core is installed, you can compile and flash your sketch. Navigate to the project directory and run:
```bash
./flash
```
- **Code Editor**: A code editor like VS Code.

## 🏃‍♂️ Usage
- **Press the Green Button**: Activates the pedestrian light for 30 seconds.
- **Automatic Transition**: After 30 seconds, the signal transitions to red on the Arduino Nano.

## 🤝 Contributing
We welcome contributions! Please fork the repository and submit a pull request for any improvements or features you'd like to add.

## 📄 License
This project is licensed under the MIT License.
