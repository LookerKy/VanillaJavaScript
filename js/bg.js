const body = document.querySelector("body");

const IMG_NUMBER = 9;

// const handleImgLoad = () =>{
//     console.log("end loading");
// };
let shareNum ;
const setImageNumber = (imgNumber) => {shareNum = imgNumber};
const getImageNumber = () => shareNum;

const panintImage = (imgNumber) =>{
    const image =new Image();
    image.src = `../../images/${imgNumber}.jpg`;
    image.classList.add("bgImage");
    body.prepend(image);
    // image.addEventListener('loadend', handleImgLoad);
    setImageNumber(imgNumber);
    
}

const genNumber = () => {
    return Math.ceil(Math.random() * IMG_NUMBER); 
}

const bgInit = () => {
    const randomNumber = genNumber();
    panintImage(randomNumber);
};

bgInit();