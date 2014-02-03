'use strict';

angular.module('chessApp')
  .controller('MainCtrl', function ($scope) {

  	var alreadySelectedACell = function() {
  		return $scope.selectedCell[0] >= 0 && $scope.selectedCell[1] >= 0;
  	},
  	cellIsOccupied = function(i, j) {
  		return $scope.board[i][j] !== '';
  	}, moveSelectedPieceTo = function ( i, j ) {
		var piece = $scope.board[ $scope.selectedCell[0] ][ $scope.selectedCell[1] ];
		$scope.board[ $scope.selectedCell[0] ][ $scope.selectedCell[1] ] = $scope.board[i][j];
		$scope.board[i][j] = piece;
		$scope.selectedCell = [ -1, -1 ];
  	}, pieceBelongsToEnemy = function(i, j) {
  		return $scope.board[i][j].indexOf($scope.currentPlayer) === -1;
  	},
  	endCurrentPlayersTurn = function() {
    	$scope.currentPlayer = ($scope.currentPlayer == 'White' ? 'Black' : 'White');
  	}, movementIsValid = function ( from, to ) {
  		var piece = $scope.board[from[0]][from[1]],
  			diff_y = Math.abs(from[0] - to[0]),
  			diff_x = Math.abs(from[1] - to[1]);

  		if (piece == "BlackRook" || piece == "WhiteRook") {
  			return ((diff_y == 0 || diff_x == 0) && (diff_y > 0 || diff_x > 0));
  		}
  		else if (piece == "BlackKnight" || piece == "WhiteKnight") {
  			return ((diff_y == 2 && diff_x == 1) || (diff_y == 1 && diff_x == 2));
  		}
  		else if (piece == "BlackBishop" || piece == "WhiteBishop") {
  			return diff_y > 0 && diff_y == diff_x;
  		}
  		else if (piece == "BlackQueen" || piece == "WhiteQueen") {
  			// return true - he he just kidding
  			return ((diff_y > 0 && diff_y == diff_x) || ((diff_y == 0 || diff_x == 0) && (diff_y > 0 || diff_x > 0)));
  		}
  		else if (piece == "BlackKing" || piece == "WhiteKing") {
  			return ((diff_y > 0 || diff_x > 0) && (diff_y <= 1 && diff_x <= 1));
  		}
  		else if (piece == "BlackPawn" || piece == "WhitePawn") {
  			if ( cellIsOccupied(to[0], to[1]) ) {
  				return (diff_y == 1 && diff_x == 1);
  			}
  			else {
  				return (diff_y == 1 && diff_x == 0);
  			}
  			
  		}
  		else {
  			alert(piece);
  		}



  	}

  	$scope.currentPlayer = 'White';

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

    	if ( alreadySelectedACell() ) {
    		/* means we need to check if destination is empty (movement) or occupied (capture) */

    		if ( cellIsOccupied(i, j) ) {
    			if ( pieceBelongsToEnemy(i, j) ) {
    				if (movementIsValid( $scope.selectedCell, [i, j] ) ) {
    					$scope.errorMessage = "";
    					/* conquer */
	    				$scope.board[i][j] = '';
	    				moveSelectedPieceTo ( i, j );
	    				endCurrentPlayersTurn();
    				}
    				else {
    					$scope.errorMessage = "Invalid movement";
    				}
    				
    			}
    			else {
    				$scope.selectedCell = [i,j];
    			}
    		}
    		else {
    			if (movementIsValid($scope.selectedCell, [i, j])) {
	    			/* movement */
	    			moveSelectedPieceTo ( i, j );
	    			endCurrentPlayersTurn();
	    			$scope.errorMessage = '';
    			}
				else {
					$scope.errorMessage = "Invalid movement";
				}
    		}

    	}
    	else if (cellIsOccupied(i, j)) {
    		// Check if the piece in the selected cell corresponds to the current player
    		if ($scope.board[i][j].indexOf($scope.currentPlayer) === -1) {
    			$scope.errorMessage = "Now is " + $scope.currentPlayer + " player's turn";
    		}
    		else {
				$scope.errorMessage = '';
    			$scope.selectedCell = [i,j];
    		}

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
