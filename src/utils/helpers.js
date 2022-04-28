import { mainConfig, sudokuGenConfig, sudokuSolConfig } from "../config";

import {
  ApplyForwardAction as SudokuApplyForward,
  ApplyBackAction as SudokuApplyBack,
} from "./sudoku";

import {
  InitCells as SudokuGeneratorInit,
  UpdateCells as SudokuGeneratorUpdate,
  Solve as SolveSudokuGenerator,
} from "./sudokuGenerator";

import {
  InitCells as SudokuSolverInit,
  UpdateCells as SudokuSolverUpdate,
  Solve as SolveSudokuSolver,
} from "./sudokuSolver";

var { problemsEnum } = mainConfig;

var GetRandFromList = function (items) {
  return items[Math.floor(Math.random() * items.length)];
};

var GetDefaultOptions = function (problem) {
  if (problem == problemsEnum.sudokuGenerator)
    return { ...sudokuGenConfig.defaultValues };
  if (problem == problemsEnum.sudokuSolver)
    return { ...sudokuSolConfig.defaultValues };
};

var InitGrid = function (problem, options) {
  if (problem == problemsEnum.sudokuGenerator)
    return SudokuGeneratorInit(options);
  if (problem == problemsEnum.sudokuSolver) return SudokuSolverInit(options);
};

var UpdateGrid = function (problem, options, changedOption, grid) {
  if (problem == problemsEnum.sudokuGenerator)
    return SudokuGeneratorUpdate(options, changedOption, grid);
  if (problem == problemsEnum.sudokuSolver)
    return SudokuSolverUpdate(options, changedOption, grid);
};

var Solve = function (problem, options, grid) {
  if (problem == problemsEnum.sudokuGenerator)
    return SolveSudokuGenerator(options);
  if (problem == problemsEnum.sudokuSolver)
    return SolveSudokuSolver(options, grid);
};

var ApplyForwardAction = function (problem, actions, grid) {
  if (
    problem == problemsEnum.sudokuGenerator ||
    problem == problemsEnum.sudokuSolver
  )
    return SudokuApplyForward(actions, grid);
};

var ApplyBackAction = function (problem, actions, grid) {
  if (
    problem == problemsEnum.sudokuGenerator ||
    problem == problemsEnum.sudokuSolver
  )
    return SudokuApplyBack(actions, grid);
};

export {
  GetRandFromList,
  GetDefaultOptions,
  InitGrid,
  UpdateGrid,
  Solve,
  ApplyForwardAction,
  ApplyBackAction,
};
