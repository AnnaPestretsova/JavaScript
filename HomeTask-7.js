var FIELD_SIZE_X = 20;
var FIELD_SIZE_Y = 20;
var SNAKE_SPEED = 200;
var snake = [];
var direction = 'y+';
var gameIsRunning = false;
var snake_timer;
var food_timer;
var score = 0;
var scoreInfo = document.getElementById('score-text');


function createBarrier() {
    var barrierCreated = false;

    while (!barrierCreated) {
        var barrier_x = Math.floor(Math.random() * FIELD_SIZE_X);
        var barrier_y = Math.floor(Math.random() * FIELD_SIZE_Y);

        var barrier_cell = document.getElementsByClassName('cell-' + barrier_y + '-' + barrier_x)[0];
        var barrier_cell_classes = barrier_cell.getAttribute('class').split(' ');

        if (!barrier_cell_classes.includes('snake-unit') || !barrier_cell_classes.includes('food-unit')) {
            barrier_cell.classList.add('barrier-unit');
            barrierCreated = true;
        }
    }
}


function collisionBarrier(unit) {

    var unit_classes = unit.getAttribute('class').split(' ');

    if (unit_classes.includes('barrier-unit')) {
        finishTheGame();
    }
}


function init() {
    prepareGameField();

    var wrap = document.getElementsByClassName('wrap')[0];
    wrap.style.width = '400px';

    document.getElementById('snake-start').addEventListener('click', startGame);
    document.getElementById('snake-renew').addEventListener('click', refreshGame);
    addEventListener('keydown', changeDirection);
}

function prepareGameField() {

    var game_table = document.createElement('table');
    game_table.setAttribute('class', 'game-table');

    for (var i = 0; i < FIELD_SIZE_X; i++) {

        var row = document.createElement('tr');
        row.className = 'game-table-row row-' + i;

        for (var j = 0; j < FIELD_SIZE_Y; j++) {
            var cell = document.createElement('td');
            cell.className = 'game-table-cell cell-' + i + '-' + j;

            row.appendChild(cell);
        }
        game_table.appendChild(row);
    }

    document.getElementById('snake-field').appendChild(game_table);
}


function startGame() {
    gameIsRunning = true;
    respawn();

    snake_timer = setInterval(move, SNAKE_SPEED);
    setTimeout(createFood, 5000);
    barrierTimer = setInterval(createBarrier, 10000);
}


function respawn() {
    var start_coord_x = Math.floor(FIELD_SIZE_X / 2);
    var start_coord_y = Math.floor(FIELD_SIZE_Y / 2);


    var snake_tail = document.getElementsByClassName('cell-' + start_coord_y + '-' + start_coord_x)[0];
    snake_tail.setAttribute('class', snake_tail.getAttribute('class') + ' snake-unit');
    var snake_head = document.getElementsByClassName('cell-' + (start_coord_y - 1) + '-' + start_coord_x)[0];
    snake_head.setAttribute('class', snake_head.getAttribute('class') + ' snake-unit');

    snake.push(snake_tail);
    snake.push(snake_head);
}

function snakeOtherSide(x, y) {
    var unit;
    if (direction == 'x-') {
        unit = document.getElementsByClassName('cell-' + y + '-' + (FIELD_SIZE_X - 1))[0];
    } else if (direction == 'x+') {
        unit = document.getElementsByClassName('cell-' + y + '-' + 0)[0];
    } else if (direction == 'y-') {
        unit = document.getElementsByClassName('cell-' + 0 + '-' + x)[0];
    } else if (direction == 'y+') {
        unit = document.getElementsByClassName('cell-' + (FIELD_SIZE_Y - 1) + '-' + x)[0];
    }

    return unit;
}

function move() {

    var snake_head_classes = snake[snake.length - 1].getAttribute('class').split(' ');

    var new_unit;
    var snake_coords = snake_head_classes[1].split('-');
    var coord_y = parseInt(snake_coords[1]);
    var coord_x = parseInt(snake_coords[2]);

    if (direction == 'x-') {
        new_unit = document.getElementsByClassName('cell-' + (coord_y) + '-' + (coord_x - 1))[0];
    }
    else if (direction == 'x+') {
        new_unit = document.getElementsByClassName('cell-' + (coord_y) + '-' + (coord_x + 1))[0];
    }
    else if (direction == 'y+') {
        new_unit = document.getElementsByClassName('cell-' + (coord_y - 1) + '-' + (coord_x))[0];
    }
    else if (direction == 'y-') {
        new_unit = document.getElementsByClassName('cell-' + (coord_y + 1) + '-' + (coord_x))[0];
    }

    if (new_unit == undefined) {
        new_unit = snakeOtherSide(coord_x, coord_y);
    }

    if (!isSnakeUnit(new_unit) && new_unit && !collisionBarrier(new_unit)) {
        new_unit.setAttribute('class', new_unit.getAttribute('class') + ' snake-unit');
        snake.push(new_unit);

        if (!haveFood(new_unit)) {
            var removed = snake.splice(0, 1)[0];
            var classes = removed.getAttribute('class').split(' ');

            removed.setAttribute('class', classes[0] + ' ' + classes[1]);
        }
    } else {
        finishTheGame();
    }


}

/**
 * Проверка на змейку
 * @param unit
 * @returns {boolean}
 */
function isSnakeUnit(unit) {
    var check = false;

    if (snake.includes(unit)) {
        check = true;
    }
    return check;
}
/**
 * проверка на еду
 * @param unit
 * @returns {boolean}
 */
function haveFood(unit) {
    var check = false;

    var unit_classes = unit.getAttribute('class').split(' ');

    // Если еда
    if (unit_classes.includes('food-unit')) {
        check = true;
        createFood();
        score++;
        scoreInfo.innerText = score;
    }
    return check;
}

function createFood() {
    var foodCreated = false;

    while (!foodCreated) {
        var food_x = Math.floor(Math.random() * FIELD_SIZE_X);
        var food_y = Math.floor(Math.random() * FIELD_SIZE_Y);

        var food_cell = document.getElementsByClassName('cell-' + food_y + '-' + food_x)[0];
        var food_cell_classes = food_cell.getAttribute('class').split(' ');

        if (!food_cell_classes.includes('snake-unit') || !food_cell_classes.includes('barrier-unit')) {
            var classes = '';
            for (var i = 0; i < food_cell_classes.length; i++) {
                classes += food_cell_classes[i] + ' ';
            }

            food_cell.setAttribute('class', classes + 'food-unit');
            foodCreated = true;
        }
    }
}

/**
 * Изменение направления движения змейки
 * @param e - событие
 */
function changeDirection(e) {
    console.log(e);
    switch (e.keyCode) {
        case 37:
            if (direction != 'x+') {
                direction = 'x-'
            }
            break;
        case 38:
            if (direction != 'y-') {
                direction = 'y+'
            }
            break;
        case 39:
            if (direction != 'x-') {
                direction = 'x+'
            }
            break;
        case 40:
            if (direction != 'y+') {
                direction = 'y-'
            }
            break;
    }
}

function finishTheGame() {
    gameIsRunning = false;
    clearInterval(snake_timer);
    clearInterval(barrierTimer);
    alert('Вы проиграли! Ваш результат: ' + score.toString());
}


function refreshGame() {
    location.reload();
}

window.onload = init;