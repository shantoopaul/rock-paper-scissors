const callMeSupreme = () => {

    /* Rules Pop-up */
    const rules = () => {
        const btnModal = document.getElementById('rules');
        const container = document.querySelector('.container');
        const btnClose = document.querySelector('.close-btn');
        const overlay = document.querySelector('.modal-overlay');

        btnModal.addEventListener('click', function () {
            overlay.classList.add('open-modal');
            container.classList.add('container-blur');
        });

        btnClose.addEventListener('click', function () {
            overlay.classList.remove('open-modal');
            container.classList.remove('container-blur');
        });
    }

    /* Main Game Function */
    const mainGame = () => {
        const rps = document.querySelectorAll('.circle');

        const scoreElement = document.getElementById('score');

        const mainGame = document.querySelector('.main-game');
        const result = document.querySelector('.result');

        const winner = document.querySelector('.heading-winner');

        const resetBtn = document.querySelector('.reset');

        const playerChoose = document.querySelector('.player-choose');
        const computerChoose = document.querySelector('.computer-choose');
        const announce = document.querySelector('.announcement');

        const playerContainer = document.querySelector('.player-picked-container');
        const computerContainer = document.querySelector('.house-picked-container');


        const computer = ['paper', 'rock', 'scissors'];
        let score = 0;
        scoreElement.textContent = 0;

        rps.forEach((option) => {
            option.addEventListener('click', function (e) {
                mainGame.classList.add('show-main');
                result.classList.add('show-result');

                const user = e.target.id;
                const comp = computer[Math.floor(Math.random() * computer.length)];

                console.log(`user: ${user} ######## computer: ${comp}`);

                playerChoose.classList.add(`${user}-magic`);
                playerContainer.classList.add('player-magic-init');
                computerChoose.classList.add(`${comp}-magic`);
                computerContainer.classList.add('computer-magic-init');
                announce.classList.add('announcement-magic');

                if (user === comp) {
                    winner.textContent = "It's a draw!";
                } else if (user === 'paper' && comp === 'rock') {
                    score++;
                    winner.textContent = "User wins!";
                    scoreElement.textContent = score;
                } else if (user === 'paper' && comp === 'scissors') {
                    if (score != 0) {
                        score--;
                    }
                    winner.textContent = "Computer wins!";
                    scoreElement.textContent = score;
                } else if (user === 'paper' && comp === 'rock') {
                    score++;
                    winner.textContent = "User wins!";
                    scoreElement.textContent = score;
                } else if (user === 'rock' && comp === 'paper') {
                    if (score != 0) {
                        score--;
                    }
                    winner.textContent = "Computer wins!";
                    scoreElement.textContent = score;
                } else if (user === 'rock' && comp === 'scissors') {
                    score++;
                    winner.textContent = "User wins!";
                    scoreElement.textContent = score;
                } else if (user === 'scissors' && comp === 'paper') {
                    score++;
                    winner.textContent = "User wins!";
                    scoreElement.textContent = score;
                } else if (user === 'scissors' && comp === 'rock') {
                    if (score != 0) {
                        score--;
                    }
                    winner.textContent = "Computer wins!";
                    scoreElement.textContent = score;
                }
            });
        });    
        
        const reset = () => {
            resetBtn.addEventListener('click', function () {
                winner.textContent = "";
                //    scoreElement.textContent = 0;
                mainGame.classList.remove('show-main');
                result.classList.remove('show-result');

                for (let rm of computer) {
                    playerChoose.classList.remove(`${rm}-magic`);
                    console.log(rm);
                    computerChoose.classList.remove(`${rm}-magic`);
                }
                announce.classList.remove('announcement-magic');
                playerContainer.classList.remove('player-magic-init');
                computerContainer.classList.remove('computer-magic-init');

            });
        }
        reset();
    }

    /*Calling inner functions*/
    rules();
    mainGame();

}

callMeSupreme();