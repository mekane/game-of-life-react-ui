(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.game = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"/build/game.js":[function(require,module,exports){
'use strict';

module.exports = {
    getCellAt: getCellAt,
    newGame: newGame,
    nextState: nextState,
    tick: tick
};

function getCellAt(board, x, y) {
    var validArray = board && Array.isArray(board) && board.length;
    var validCoord = x >= 0 && y >= 0 && x < board.length;
    if (validArray && validCoord) {
        var row = board[x];
        if (row && Array.isArray(row) && y < row.length) return row[y];
    }
    return 0;
}

function newGame(size) {
    //assuming square
    var board = [];

    for (var i = 0; i < size; i++) {
        board.push(new Array(size).fill(0));
    }

    return board;
}

function nextState(board) {
    if (!board || !Array.isArray(board)) throw new Error('bad board state');

    if (board.length < 3) throw new Error('bad board state - not 3x3 array');

    for (var i = 0; i < 3; i++) {
        if (!Array.isArray(board[i]) || board[i].length < 3) throw new Error('bad board state - not 3x3 array');
    }var thisCellIsLiving = !!board[1][1];

    var topRowLivingCount = !!board[0][0] + !!board[0][1] + !!board[0][2];
    var midRowLivingCount = !!board[1][0] + !!board[1][2];
    var botRowLivingCount = !!board[2][0] + !!board[2][1] + !!board[2][2];

    var totalLivingNeighbors = topRowLivingCount + midRowLivingCount + botRowLivingCount;
    var populationIsOk = totalLivingNeighbors === 2 || totalLivingNeighbors === 3;

    if (thisCellIsLiving && populationIsOk) return 1;

    if (!thisCellIsLiving && totalLivingNeighbors === 3) return 1;

    return 0;
}

function tick(board) {
    if (!board || !Array.isArray(board) || board.length === 0) return [];

    var nextBoard = newGame(board.length); //assuming square

    for (var x = 0; x < board.length; x++) {
        var row = board[x];
        for (var y = 0; y < row.length; y++) {
            var neighborhood = [[c(x - 1, y - 1), c(x - 0, y - 1), c(x + 1, y - 1)], [c(x - 1, y - 0), c(x - 0, y - 0), c(x + 1, y + 0)], [c(x - 1, y + 1), c(x - 0, y + 1), c(x + 1, y + 1)]];
            nextBoard[x][y] = nextState(neighborhood);
        }
    }

    return nextBoard;

    function c(x, y) {
        return getCellAt(board, x, y);
    }
}
},{}]},{},[])("/build/game.js")
});