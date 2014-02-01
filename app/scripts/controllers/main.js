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

    $scope.handleClick = function(i,j) {
    	console.log(i,j);
    }

  });
