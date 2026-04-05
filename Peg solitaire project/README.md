# 🧠 Intelligent Peg Solver

### A Multi-Algorithm Peg Solitaire Game with AI Opponent

![Python](https://img.shields.io/badge/Python-3.13+-blue.svg)
![Pygame](https://img.shields.io/badge/Pygame-2.5+-green.svg)
![License](https://img.shields.io/badge/License-MIT-yellow.svg)
![AI](https://img.shields.io/badge/AI-MCTS%20%7C%20IDA*%20%7C%20Search-orange.svg)

---

## 📖 Overview

**Intelligent Peg Solver** is a comprehensive Peg Solitaire implementation featuring multiple AI search algorithms, an interactive GUI, and a powerful AI opponent using Monte Carlo Tree Search (MCTS).

---

## 🎯 What is Peg Solitaire?

Peg Solitaire is a classic puzzle played on a 7×7 cross-shaped board with 33 holes. The objective is to reduce the board to a single peg.

**Rule:** A peg jumps over an adjacent peg into an empty space, removing the jumped peg.

### Starting Position

```
    X X X
    X X X
X X X X X X X
X X X . X X X
X X X X X X X
    X X X
    X X X
```

`X = Peg`, `.` = Empty hole

---

## ✨ Features

| Feature               | Description                     |
| --------------------- | ------------------------------- |
| 🎮 Single-Player Mode | Solve optimally using IDA*      |
| 🤖 Two-Player Mode    | Play against AI (MCTS) or human |
| 🌳 MCTS Visualization | Real-time search tree view      |
| 🔥 Heatmap            | Move frequency visualization    |
| 🎨 Themes             | Dark/Light toggle               |
| 📊 Statistics         | Search metrics and efficiency   |
| 🏆 Win Tracking       | Track streaks                   |

---

## 🚀 Installation

### Prerequisites

- Python 3.13+
- pip

### Clone Repository

```bash
git clone https://github.com/your-username/peg-solitaire.git
cd peg-solitaire
```

### Install Dependencies

```bash
pip install -r requirements.txt
```

### Run GUI

```bash
python gui.py
```

### CLI Solver

```bash
python main.py
```

---

## 🎮 How to Play

### Controls

| Action       | Control                |
| ------------ | ---------------------- |
| Select peg   | Left-click             |
| Make move    | Left-click destination |

---

## 🧠 Algorithms

### 1. IDA* (Optimal Solver)

- Finds optimal solution (1 peg)
- Heuristic: `peg_count - 1`
- Uses symmetry pruning

### 2. Best-First Minimize

- Finds minimum remaining pegs
- Greedy priority queue

### 3. Monte Carlo Tree Search (MCTS)

- AI opponent
- Uses UCB1
- Hybrid simulation (heuristic + random)

---

## 🔬 Visualizations

### MCTS Tree

- Node color → win rate
- Node size → visit count

### Heatmap

- Red → high usage
- Blue → low usage

---

## 📁 Project Structure

```
peg-solitaire/
├── board.py
├── state.py
├── heuristic.py
├── search.py
├── minimize.py
├── mcts.py
├── tree_viz.py
├── gui.py
├── main.py
├── requirements.txt
└── README.md
```

---

## ⚙️ Configuration

Edit `gui.py`:

```python
self.mcts_time_limit = 5
self.max_search_time = 60
```

Edit `heuristic.py`:

```python
HEURISTIC_TYPE = 'simple'
```

---

## 🐛 Troubleshooting

| Issue               | Fix                |
| ------------------- | ------------------ |
| Game not starting   | Install pygame     |
| Slow solving        | Reduce time limits |
| Laggy visualization | Reduce MCTS time   |

---

## 📦 Build Executable

```bash
pip install pyinstaller
py -3.13 -m PyInstaller --onedir --windowed --name "PegSolitaire" gui.py
```

---

## 👥 Team

| Name             | Roll      | Branch    |
| ---------------- | --------- | --------- |
| Anusha Nikam     | 23CH3EP11 | Chemical  |
| Sahil Ranjan     | 23CH10100 | Chemical  |
| Uttkarsh Solanki | 23CH3EP19 | Chemical  |
| Vishesh Gupta    | 23HS10059 | Economics |

---

## 📄 License

MIT License

---

## 🙏 Acknowledgments

- Pygame community
- AI research community

---

⭐ If you like this project, consider starring the repo!