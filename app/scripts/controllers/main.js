'use strict';

angular.module('chessApp')
  .controller('MainCtrl', function ($scope) {
    $scope.board = [
    	[ 'BlackRook', 'BlackKnight', 'BlackBishop', 'BlackQueen', 'BlackKing', 'BlackBishop', 'BlackKnight', 'BlackRook' ],
    	[ 'BlackPawn', 'BlackPawn', 'BlackPawn', 'BlackPawn', 'BlackPawn', 'BlackPawn', 'BlackPawn', 'BlackPawn' ],
    	[ '', '', '', '', '', '', '', '' ],
    	[ '', '', '', '', '', '', '', '' ],
    	[ '', '', '', '', '', '', '', '' ],
    	[ '', '', '', '', '', '', '', '' ],
    	[ 'WhitePawn', 'WhitePawn', 'WhitePawn', 'WhitePawn', 'WhitePawn', 'WhitePawn', 'WhitePawn', 'WhitePawn' ],
    	[ 'WhiteRook', 'WhiteKnight', 'WhiteBishop', 'WhiteQueen', 'WhiteKing', 'WhiteBishop', 'WhiteKnight', 'WhiteRook' ],
    ];

    $scope.selectedCell = [-1,-1];

    $scope.handleClick = function(i,j) {
    	
    	if ($scope.board[i][j]) {
    		// If we have a piece here, set this cell as selected
    		$scope.selectedCell = [i,j];
    	}
    }

    $scope.boardCellClass = function(i,j) {
    	if ( i == $scope.selectedCell[0] && j == $scope.selectedCell[1]) {
    		return 'selected';
    	}
    	else {
    		return '';
    	}
    }

    $scope.pieceAtPosition = function(i,j) {
    	if ($scope.board[i][j] == 'BlackRook') {
    		return '\u265c';
    	}
    	if ($scope.board[i][j] == 'BlackKnight') {
    		return '\u265e';
    	}
    	if ($scope.board[i][j] == 'BlackBishop') {
    		return '\u265d';
    	}
    	if ($scope.board[i][j] == 'BlackQueen') {
    		return '\u265b';
    	}
    	if ($scope.board[i][j] == 'BlackKing') {
    		return '\u265a';
    	}
    	if ($scope.board[i][j] == 'BlackPawn') {
    		return '\u265f';
    	}
    	if ($scope.board[i][j] == 'WhiteRook') {
    		return '\u2656';
    	}
    	if ($scope.board[i][j] == 'WhiteKnight') {
    		return '\u2658';
    	}
    	if ($scope.board[i][j] == 'WhiteBishop') {
    		return '\u2657';
    	}
    	if ($scope.board[i][j] == 'WhiteQueen') {
    		return '\u2655';
    	}
    	if ($scope.board[i][j] == 'WhiteKing') {
    		return '\u2654';
    	}
    	if ($scope.board[i][j] == 'WhitePawn') {
    		return '\u2659';
    	}
    }

  });
