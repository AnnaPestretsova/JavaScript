var chessBoard = {
    cells: [],
    height: 0,
    width: 0,
    element: {}
}

var BOARD = [
    " abcdefgh ",
    "8WBWBWBWB8",
    "7BWBWBWBW7",
    "6WBWBWBWB6",
    "5BWBWBWBW5",
    "4WBWBWBWB4",
    "3BWBWBWBW3",
    "2WBWBWBWB2",
    "1BWBWBWBW1",
    " abcdefgh "
]

var figures = [
    {
        className: "rookB-1",
        row: 1,
        col: 1
    },
    {
        className: "knightB-1",
        row: 1,
        col: 2
    },
    {
        className: "bishopB-1",
        row: 1,
        col: 3
    },
    {
        className: "queenB",
        row: 1,
        col: 4
    },
    {
        className: "kingB",
        row: 1,
        col: 5
    },
    {
        className: "bishopB-2",
        row: 1,
        col: 6
    },
    {
        className: "knightB-2",
        row: 1,
        col: 7
    },
    {
        className: "rookB-2",
        row: 1,
        col: 8
    },
    {
        className: "rookW-1",
        row: 8,
        col: 1
    },
    {
        className: "knightW-1",
        row: 8,
        col: 2
    },
    {
        className: "bishopW-1",
        row: 8,
        col: 3
    },
    {
        className: "queenW",
        row: 8,
        col: 4
    },
    {
        className: "kingW",
        row: 8,
        col: 5
    },
    {
        className: "bishopW-2",
        row: 8,
        col: 6
    },
    {
        className: "knightW-2",
        row: 8,
        col: 7
    },
    {
        className: "rookW-2",
        row: 8,
        col: 8
    }
]

for (i = 1; i < 9; i++) {
    figures.push({
        className: "pawnB",
        classExtra: "pb-" + i,
        row: 2,
        col: i
    })
    figures.push({
        className: "pawnW",
        classExtra: "pw-" + i,
        row: 7,
        col: i
    })
}

chessBoard.init = function (template, figures) {
    this.element = document.getElementById('chessboard');
    this.height = template.length;
    this.width = template[0].length;

    for (i = 0; i < this.height; i++) {
        this.cells.push([]);
        for (j = 0; j < this.width; j++) {

            this.cells[i].push({});
            this.cells[i][j].element = document.createElement('div');
            this.cells[i][j].element.classList.add('cell');

            switch (template[i][j]) {
                case 'B':
                    this.cells[i][j].type - 'Black';
                    this.cells[i][j].element.classList.add('black');
                    break;
                case 'W':
                    this.cells[i][j].type - 'White';
                    this.cells[i][j].element.classList.add('white');
                    break;
                default:
                    this.cells[i][j].type - 'Simple';
                    this.cells[i][j].element.classList.add('simple');
                    this.cells[i][j].element.innerText = template[i][j]
                    break;
            }
            this.element.appendChild(this.cells[i][j].element);

            for (h = 0; h < figures.length; h++) {
                if (figures[h].row == i && figures[h].col == j) {
                    this.cells[i][j].element.classList.add(figures[h].className);
                    if (figures[h].classExtra) {
                        this.cells[i][j].element.classList.add(figures[h].classExtra);
                    }
                }
            }

        }
    }
}

chessBoard.init(BOARD, figures);