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

  });
