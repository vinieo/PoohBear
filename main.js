function writeCode(code) {          //用代码画小熊维尼
    let domCode = document.querySelector('#code');
    let n = 0;
    let codeinterval = setInterval(() => {
        n = n + 9;
        domCode.innerHTML += code.substring(n - 9, n);
        styletag.innerHTML += code.substring(n - 9, n);

        domCode.scrollTop = domCode.scrollHeight;
        if (n >= code.length) {
            window.clearInterval(codeinterval);
        }
    }, 1);
}

var result =
    `
    html {
        height: 100%;
    }
    
    body {
        background-color: #fde493;
    }
    
    body .container {
        max-width: 280px;
        padding: 0;
        margin: 0 auto;
        min-height: 400px;
    }
    
    body .container :before,
    body .container :after {
        position: absolute;
        content: "";
        width: 0;
        height: 0;
    }
    
    .title {
        margin-top: 3vh;
        display: block;
    }
    
    .pooh-container {
        position: absolute;
        height: 250px;
        width: 180px;
        top: calc(45% - (180px / 2));
        left: calc(60% - (180px / 2));
        z-index:2;
    }
    
    .pooh {
        height: 180px;
        width: 180px;
        position: relative;
    }
    
    .pooh * {
        position: absolute;
    }
    
    .pooh .face {
        left: calc(50% - 75px);
        height: 140px;
        width: 150px;
        top: 7px;
        background: #ffe284;
        border: 3px solid #e18853;
        -moz-border-radius: 60% 60% 45% 45%/80% 80% 45% 45;
        -webkit-border-radius: 60% 60% 45% 45%/80% 80% 45% 45;
        border-radius: 60% 60% 45% 45%/80% 80% 45% 45%;
    }
    /* 维尼的两只眼睛 */
    .pooh .face .eye {
        top: 72px;
        background: #491c12;
        height: 20px;
        width: 15px;
        border-radius:20px 20px 20px 20px;
    }
    .pooh .face .eye.left {
        left: 32px; 
    }
    .pooh .face .eye.right {
        left: 100px;
    }
    .pooh .brow{
        top: 25px;
        height: 13px;
        width: 13px;
        border: 3px solid #491c12;
        border-right-color: transparent;
        border-top-color: transparent;
        border-left-color: transparent;
        -moz-border-radius: 0 0 50% 50%/60% 60% 40% 40%;
        -webkit-border-radius: 0;
        border-radius: 0 0 50% 50%/60% 60% 40% 40%;
        
    }
    .pooh .brow.left{
        left: 33px;
        -moz-transform: rotate(20deg);
        -ms-transform: rotate(20deg);
        -webkit-transform: rotate(20deg);
        transform: rotate(145deg);
    }
    .pooh .brow.right{
        right: 35px;
        -moz-transform: rotate(20deg);
        -ms-transform: rotate(20deg);
        -webkit-transform: rotate(20deg);
        transform: rotate(-145deg);
    }
    /* 维尼的脸颊 */
    .pooh .face .cheek{
        top: 87px;
        height: 19px;
        width: 22px;
        background: #fdcfc9;
        border-radius: 50%;
    }
    .pooh .face .cheek.left {
        right: 15px;
    }
    .pooh .face .cheek.right {
        right: 115px;
    }
    /* 维尼的嘴巴 */
    .pooh .face .mouth {
        top: 107px;
        left: 60px;
        height: 10px;
        width: 20px;
        background: #ffc6bf;
        border: 3px solid #e18853;
        -moz-border-radius: 0 0 60px 60px;
        -webkit-border-radius: 0 0 60px 60px;
        border-radius: 0 0 60px 60px;
    }
    
    /* 维尼的鼻子 */
    .pooh .nose {
        top: 80px;
        left: 65px;
        height: 13px;
        width: 15px;
        background: #491c12;
        -moz-border-radius: 80%;
        -webkit-border-radius: 80%;
        border-radius: 80%;
    }
    
    /* 维尼的耳朵 */
    .pooh .ear {
        top: -4px;
        height: 20px;
        width: 20px;
        background: #ffe284;
        border: 3px solid #e18853;
        -moz-border-radius: 50% 50% 20% 20%/40% 40% 60% 60%;
        -webkit-border-radius: 50%;
        border-radius: 50% 50% 20% 20%/40% 40% 60% 60%;
        z-index: -1;
    }
    .pooh .ear.left {
        left: 37px;
        -moz-transform: rotate(-33deg);
        -ms-transform: rotate(-33deg);
        -webkit-transform: rotate(-33deg);
        transform: rotate(-33deg);
    }
    .pooh .ear.right {
        left: 123px;
        -moz-transform: rotate(33deg);
        -ms-transform: rotate(33deg);
        -webkit-transform: rotate(33deg);
        transform: rotate(33deg);
    }
    
    /* 维尼的身体 */
    .pooh .tummy {
        top: 120px;
        height: 120px;
        width: 100px;
        background: #ffe284;
        border: 3px solid #e18853;
        left: calc(50% - 50px);
        z-index: -1;
        -moz-border-radius: 60% 60% 45% 45%/80% 80% 45% 45;
        -webkit-border-radius: 60% 60% 45% 45%/80% 80% 45% 45;
        border-radius: 60% 60% 45% 45%/80% 80% 45% 45%;
    }
    /* 维尼的上衣脖子袖子 */
    .pooh .jacket {
        top: 130px;
        background: #F8756D;
        height:82px;
        width: 101px;
        left: calc(50% - 47px);
        z-index: -1;
        --moz-border-radius: 60% 60% 45% 45%/80% 80% 45% 45;
        -webkit-border-radius: 60% 60% 45% 45%/80% 80% 45% 45;
        border-radius: 60% 60% 45% 45%/80% 80% 45% 45%;
    }
    .pooh .neck{
        top: 140px;
        left: calc(50% - 13px);
        border-left:11px solid transparent;
        border-right:11px solid transparent;
        border-top:7px solid #ffe284;
    }
    .pooh .sleeve{
        top: 142px;
        background: #F8756D;
        height:30px;
        width: 30px;
        -moz-border-radius: 50% 50% 20% 20%/40% 40% 60% 60%;
        -webkit-border-radius: 50%;
        border-radius: 50% 50% 20% 20%/40% 40% 60% 60%;
        z-index: 2;
    }
    .pooh .sleeve.left{
        left: 38px;
        -moz-transform: rotate(33deg);
        -ms-transform: rotate(33deg);
        -webkit-transform: rotate(33deg);
        transform: rotate(130deg);
    }
    .pooh .sleeve.right{
        right: 30px;
        -moz-transform: rotate(-33deg);
        -ms-transform: rotate(-33deg);
        -webkit-transform: rotate(-33deg);
        transform: rotate(-130deg);
    }
    /* 维尼的左手右手 */
    .pooh .arm {
        -moz-border-radius: 10px;
        -webkit-border-radius: 10px;
        border-radius: 50px;
        height: 20px;
        width: 50px;
        background: #ffe284;
        border: 3px solid #e18853;
        top: 155px;
    }
    .pooh .arm.right {
        right: 7px;
        -moz-transform: rotate(30deg);
        -ms-transform: rotate(30deg);
        -webkit-transform: rotate(30deg);
        transform: rotate(-40deg);
        -moz-transform-origin: left top;
        -ms-transform-origin: left top;
        -webkit-transform-origin: left top;
        transform-origin: left top;
    }
    .pooh .arm.left {
        left: 13px;
        -moz-transform: rotate(-30deg);
        -ms-transform: rotate(-30deg);
        -webkit-transform: rotate(-30deg);
        transform: rotate(40deg);
        -moz-transform-origin: right top;
        -ms-transform-origin: right top;
        -webkit-transform-origin: right top;
        transform-origin: right top;
    }
    
    /* 维尼的两只脚 */
    .pooh .foot {
        bottom: -73px;
        height: 30px;
        width: 25px;
        background: #ffe284;
        border: 3px solid #e18853;
        border-radius: 100px;
    }
    .pooh .foot.left {
        left: calc(50% - 51px);
        -moz-transform: rotate(-30deg);
        -ms-transform: rotate(-30deg);
        -webkit-transform: rotate(-30deg);
        transform: rotate(-43deg);
    }
    .pooh .foot.right {
        left: calc(50% + 25px);
        -moz-transform: rotate(-30deg);
        -ms-transform: rotate(-30deg);
        -webkit-transform: rotate(-30deg);
        transform: rotate(43deg);
    }
    
    /* 维尼的影子 */
    .pooh .shadow {
        bottom: -83px;
        height: 30px;
        width: 140px;
        background: rgba(0, 0, 0, 0.25);
        -moz-border-radius: 50%;
        -webkit-border-radius: 50%;
        border-radius: 50%;
        z-index: -3;
        left: calc(62% - (180px / 2));
    }
`
writeCode(result);