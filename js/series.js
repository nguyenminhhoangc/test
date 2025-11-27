function setupSlider(rowId) {
    const slide_rows = document.getElementById(rowId);
    const container = slide_rows.parentElement;
    const leftArrow = container.querySelector('.arrow.left');
    const rightArrow = container.querySelector('.arrow.right');
    const slidewidth = 230 + 10;
    let currentPosition = 0;

    leftArrow.addEventListener('click', () => {
        currentPosition += slidewidth;
        if (currentPosition > 0) {
            currentPosition = 0;
        }
        slide_rows.style.transform = `translateX(${currentPosition}px)`;

    });
    rightArrow.addEventListener('click', () => {
        const maxPosition = -(slide_rows.scrollWidth - container.offsetWidth);
        currentPosition -= slidewidth;
        if (currentPosition < maxPosition){
            currentPosition = maxPosition;
        }
            slide_rows.style.transform = `translateX(${currentPosition}px)`;
    });
}

setupSlider('row1');
setupSlider('row2');
setupSlider('row3');