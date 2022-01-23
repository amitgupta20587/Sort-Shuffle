// List of all the numbers in Blocks
const allNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];


// Function to intialize the number blocks
const initializeNumberBlocks = () => {
    let blockLayout = ``;

    allNumbers.forEach(num => {
        blockLayout = blockLayout +
            `<div class="text background-color-${num}">
                <h1>${num}</h1>
            </div>`
    });

    const numberBlocks = document.querySelector(".blocks");
    numberBlocks.innerHTML = blockLayout;
}

/**
 * Function to Shuffle the number blocks
 * @param - blocks list of the blocks
 */ 
const shuffleBlocks = (blocks) => {
    const blockLength = blocks.length;
    for (let i = blockLength - 1; i > 0; i--)
    {
        let j = Math.floor(Math.random() * (i + 1));
        [blocks[i], blocks[j]] = [blocks[j], blocks[i]];
    }

    initializeNumberBlocks(blocks);
}

/**
 * This method will sort the blocks in ascending order
 *
 * @param blocks list of the blocks
 */
const sortBlocks = (blocks) => {
    blocks.sort((num1, num2) => num1 - num2);
    initializeNumberBlocks(blocks);
}

initializeNumberBlocks(allNumbers);