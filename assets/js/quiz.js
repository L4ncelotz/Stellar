const questions = [
    {
        question: "เมื่อคุณอยู่ในกลุ่มคนจำนวนมาก คุณรู้สึกอย่างไร?",
        choices: [
            "ฉันรู้สึกเป็นศูนย์กลางของทุกคน",
            "ฉันชอบฟังมากกว่าพูด",
            "ฉันชอบอยู่เงียบ ๆ และไม่ค่อยถูกสังเกต",
            "ฉันเข้ากับคนอื่นง่าย แต่ก็รู้สึกห่างเหินในบางครั้ง",
            "ฉันพยายามเข้าหาผู้คน แต่ก็ยังรู้สึกไม่ลงตัว",
            "ฉันมักทำให้บรรยากาศแย่ลงโดยไม่ตั้งใจ"
        ]
    },
    {
        question: "ถ้าคุณเปรียบเทียบตัวเองเป็นแสง คุณคิดว่าเป็นแบบไหน?",
        choices: [
            "แสงที่ส่องสว่าง แม้จะอยู่เพียงลำพัง",
            "แสงที่จางจนบางครั้งไม่มีใครสังเกตเห็น",
            "แสงที่ส่องจ้าเกินไป จนบางครั้งอยากหลบซ่อน",
            "แสงที่เคยอยู่ใกล้ศูนย์กลาง แต่ค่อย ๆ ห่างออกไป",
            "แสงที่มีศักยภาพจะลุกโชนแต่ยังไม่ถึงเวลาของมัน",
            "แสงที่ทำให้โลกร้อนขึ้นเรื่อย ๆ จนทุกอย่างเริ่มพังลง"
        ]
    },
    {
        question: "เวลาคุณต้องการความช่วยเหลือ คุณมักจะทำอย่างไร?",
        choices: [
            "ฉันพยายามจัดการเอง แม้จะหนักแค่ไหนก็ตาม",
            "ฉันไม่ค่อยขอความช่วยเหลือ เพราะคิดว่าไม่มีใครสนใจ",
            "ฉันอยากให้คนอื่นเข้ามาช่วย แต่ฉันไม่อยากบอกออกไป",
            "ฉันเคยได้รับความช่วยเหลือ แต่ตอนนี้ทุกอย่างเปลี่ยนไป",
            "ฉันมีคนที่คอยช่วยเหลือ แต่ฉันยังรู้สึกว่าไม่พอ",
            "ฉันมักทำลายโอกาสที่มี แม้ว่าจะต้องการมันจริง ๆ"
        ]
    },
    {
        question: "ในความสัมพันธ์ คุณมักรู้สึกอย่างไร?",
        choices: [
            "ฉันสามารถอยู่ได้ด้วยตัวเอง แต่ก็ยังรักคนรอบข้าง",
            "ฉันมักถูกลืมหรือไม่ได้รับความสนใจ",
            "ฉันมีเสน่ห์โดยธรรมชาติ แม้บางครั้งฉันจะไม่ต้องการมัน",
            "ฉันเคยอยู่ใกล้บางคน แต่ตอนนี้ความสัมพันธ์เริ่มห่างออกไป",
            "ฉันพยายามทำดีที่สุดแล้ว แต่ดูเหมือนมันยังไม่พอ",
            "ฉันมักพังความสัมพันธ์ที่ดีโดยไม่รู้ตัว"
        ]
    },
    {
        question: "เมื่อเผชิญกับความท้าทาย คุณมักจะ...",
        choices: [
            "สู้ด้วยตัวเองจนกว่าจะสำเร็จ",
            "ถอยห่างและรอให้มันผ่านไป",
            "จัดการมันอย่างเงียบ ๆ โดยไม่ให้ใครรู้",
            "พยายามแก้ไข แม้จะรู้สึกว่าห่างไกลจากความสำเร็จ",
            "พยายามอย่างหนัก แต่ก็ยังไม่ถึงเป้าหมาย",
            "พยายามแก้ไข แต่กลับทำให้แย่ลง"
        ]
    },
    {
        question: "คุณมองอนาคตของตัวเองอย่างไร?",
        choices: [
            "ฉันจะยังคงเป็นแสงสว่างให้กับผู้อื่นเสมอ",
            "ฉันกลัวว่าจะถูกลืมไปตามกาลเวลา",
            "ฉันอาจจะโดดเด่นขึ้นเรื่อย ๆ ทั้งที่ไม่ได้ตั้งใจ",
            "ฉันรู้สึกว่ากำลังถอยห่างจากจุดที่เคยอยู่",
            "ฉันยังมองเห็นความยิ่งใหญ่ที่รอฉันอยู่",
            "ฉันกลัวว่าจะทำลายทุกอย่างในที่สุด"
        ]
    },
    {
        question: "สิ่งที่ทำให้คุณกลัวที่สุดคืออะไร?",
        choices: [
            "การสูญเสียพลังในการเป็นที่พึ่งให้ผู้อื่น",
            "การถูกลืมและไม่มีใครจดจำ",
            "การถูกบังคับให้เป็นจุดสนใจ",
            "การถูกทิ้งให้อยู่ห่างไกล",
            "การไม่ได้เป็นในสิ่งที่ควรจะเป็น",
            "การทำลายทุกสิ่งที่รักโดยไม่ตั้งใจ"
        ]
    },
    {
        question: "เมื่อต้องตัดสินใจสำคัญ คุณมักจะ...",
        choices: [
            "เชื่อมั่นในการตัดสินใจของตัวเอง",
            "ลังเลและไม่กล้าบอกใคร",
            "ตัดสินใจได้ดี แต่ไม่ชอบการถูกชื่นชม",
            "คิดถึงการตัดสินใจในอดีตที่ดีกว่า",
            "พยายามตัดสินใจให้ดีที่สุด แต่ยังไม่มั่นใจ",
            "กลัวว่าการตัดสินใจจะส่งผลเสีย"
        ]
    },
    {
        question: "คุณมองเห็นคุณค่าในตัวเองอย่างไร?",
        choices: [
            "ฉันเป็นแหล่งพลังงานให้กับผู้อื่นเสมอ",
            "ฉันมีคุณค่า แม้จะไม่มีใครเห็น",
            "ฉันมีความพิเศษ แต่ไม่อยากโดดเด่น",
            "ฉันเคยรู้สึกมีค่ามากกว่านี้",
            "ฉันมีศักยภาพที่ยังไม่ได้ปลดปล่อย",
            "ฉันกำลังทำลายคุณค่าของตัวเอง"
        ]
    },
    {
        question: "เมื่อประสบความสำเร็จ คุณรู้สึกอย่างไร?",
        choices: [
            "ภูมิใจที่ทำได้ด้วยตัวเอง",
            "ไม่ค่อยมีใครรับรู้ถึงความสำเร็จของฉัน",
            "อยากให้คนอื่นมองข้ามความสำเร็จนั้นไป",
            "คิดถึงความสำเร็จในอดีตที่ยิ่งใหญ่กว่า",
            "รู้สึกว่ายังทำได้ดีกว่านี้",
            "กลัวว่าจะทำพังในที่สุด"
        ]
    }
];

const starResults = {
    "SUN": "คุณคือดวงอาทิตย์ ผู้ที่ส่องสว่างแม้จะอยู่เพียงลำพัง... เหมือนดวงอาทิตย์ที่ต้องเป็นศูนย์กลางของทุกสิ่ง แม้บางครั้งจะรู้สึกโดดเดี่ยว แต่แสงของคุณก็ยังคงเป็นความหวังให้กับผู้อื่นเสมอ ความแข็งแกร่งของคุณคือการยืนหยัดและส่องสว่างได้ด้วยตัวเอง แม้ในวันที่มืดมิดที่สุด",

    "MERCURY": "คุณคือดาวพุธ ดวงดาวที่มักถูกลืม... แต่กลับซ่อนความพิเศษไว้มากมาย เหมือนดาวที่อยู่ใกล้ดวงอาทิตย์ที่สุด แต่กลับถูกมองข้ามบ่อยครั้ง คุณมีความลึกซึ้งและเข้าใจโลกมากกว่าที่ใครจะรู้ บางครั้งความเงียบของคุณกลับซ่อนปัญญาและความเข้าใจที่ลึกซึ้งไว้ภายใน",

    "SIRIUS": "คุณคือดาวซิริอัส ดาวฤกษ์ที่สว่างที่สุดบนท้องฟ้า... แต่บางครั้งคุณก็ปรารถนาที่จะดับแสงลง ความโดดเด่นของคุณไม่ได้มาจากความตั้งใจ แต่เป็นธรรมชาติที่ไม่อาจหลีกเลี่ยง เหมือนดาวที่ส่องสว่างจนบางครั้งก็รู้สึกเหงาในความเจิดจ้าของตัวเอง",

    "URANUS": "คุณคือดาวยูเรนัส ผู้ที่ค่อยๆ ห่างออกไปจากศูนย์กลาง... เหมือนดาวที่หมุนรอบตัวเองในแนวเอียง แตกต่างจากดาวดวงอื่น คุณเคยอยู่ในจุดที่สำคัญ แต่ชีวิตพาคุณออกห่างจากสิ่งที่เคยเป็น บางครั้งการเดินทางที่ห่างออกไปก็นำมาซึ่งมุมมองใหม่ที่ไม่มีใครเคยเห็น",

    "JUPITER": "คุณคือดาวพฤหัสบดี ดาวที่ควรจะได้เป็นดวงอาทิตย์ดวงที่สอง... แต่กลับไม่มีวันได้ลุกโชน คุณมีศักยภาพมากมายที่ซ่อนอยู่ภายใน เหมือนดาวยักษ์ที่มีพลังมหาศาล แต่ไม่เคยได้เปล่งประกายเต็มที่ บางครั้งการรอคอยโอกาสก็ทำให้เราได้เรียนรู้ว่าความยิ่งใหญ่ไม่จำเป็นต้องอยู่ในรูปแบบที่เราคาดหวัง",

    "EARTH": "คุณคือดาวโลก ดาวเคราะห์ที่กำลังทำลายตัวเองอย่างช้าๆ... เหมือนโลกที่กำลังเผชิญกับการเปลี่ยนแปลง คุณมักจะทำลายสิ่งดีๆ ในชีวิตโดยไม่รู้ตัว แต่เหมือนโลกที่ยังคงหมุนต่อไป คุณก็ยังมีโอกาสที่จะเยียวยาและสร้างสิ่งใหม่ขึ้นมาได้เสมอ บางครั้งการทำลายก็นำมาซึ่งการเริ่มต้นใหม่ที่สวยงามกว่าเดิม"
};

const starIcons = {
    "SUN": "./images/sun.jpg",
    "MERCURY": "./images/mercury.jpg",
    "SIRIUS": "./images/sirius.png",
    "URANUS": "./images/uranus.jpg",
    "JUPITER": "./images/jupiter.jpg",
    "EARTH": "./images/earth.jpg"
};

let currentQuestion = 0;
let answers = new Array(questions.length).fill(null);

function updateProgress() {
    const progress = document.getElementById('progress');
    const percentage = ((currentQuestion + 1) / questions.length) * 100;
    progress.style.width = `${percentage}%`;
}

function updateQuestionNumber() {
    const questionNumber = document.getElementById('question-number');
    questionNumber.textContent = `คำถามที่ ${currentQuestion + 1}/${questions.length}`;
}

function showQuestion() {
    const questionEl = document.getElementById('question');
    const choicesEl = document.getElementById('choices');
    const prevBtn = document.getElementById('prev-btn');
    
    updateProgress();
    updateQuestionNumber();
    
    if (currentQuestion < questions.length) {
        questionEl.textContent = questions[currentQuestion].question;
        choicesEl.innerHTML = '';
        
        questions[currentQuestion].choices.forEach((choice, index) => {
            const button = document.createElement('button');
            button.textContent = choice;
            button.onclick = () => selectAnswer(index);
            if (answers[currentQuestion] === index) {
                button.classList.add('selected');
            }
            choicesEl.appendChild(button);
        });

        prevBtn.style.display = currentQuestion > 0 ? 'block' : 'none';
    } else {
        showResult();
    }
}

function selectAnswer(choiceIndex) {
    answers[currentQuestion] = choiceIndex;
    
    const buttons = document.querySelectorAll('#choices button');
    buttons.forEach(button => button.classList.remove('selected'));
    buttons[choiceIndex].classList.add('selected');
    
    if (currentQuestion < questions.length - 1) {
        setTimeout(() => {
            nextQuestion();
        }, 500);
    } else {
        setTimeout(() => {
            showResult();
        }, 500);
    }
}

function previousQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        showQuestion();
    }
}

function nextQuestion() {
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        showQuestion();
    }
}

function showResult() {
    const quizContainer = document.getElementById('quiz-container');
    const resultContainer = document.getElementById('result');
    const starResultEl = document.getElementById('star-result');
    const starIconEl = document.getElementById('star-icon');
    
    const counts = answers.reduce((acc, val) => {
        if (val !== null) {
            acc[val] = (acc[val] || 0) + 1;
        }
        return acc;
    }, {});
    
    const maxCount = Math.max(...Object.values(counts));
    const mostCommonAnswer = Object.keys(counts).find(key => counts[key] === maxCount);
    
    let result;
    switch(parseInt(mostCommonAnswer)) {
        case 0: result = "SUN"; break;
        case 1: result = "MERCURY"; break;
        case 2: result = "SIRIUS"; break;
        case 3: result = "URANUS"; break;
        case 4: result = "JUPITER"; break;
        case 5: result = "EARTH"; break;
        default: result = "SUN";
    }
    
    quizContainer.style.display = 'none';
    resultContainer.style.display = 'block';
    starResultEl.textContent = starResults[result];
    starIconEl.innerHTML = `<img src="${starIcons[result]}" alt="${result}">`;
}

function restartQuiz() {
    currentQuestion = 0;
    answers = new Array(questions.length).fill(null);
    
    const quizContainer = document.getElementById('quiz-container');
    const resultContainer = document.getElementById('result');
    
    if (quizContainer && resultContainer) {
        quizContainer.style.display = 'block';
        resultContainer.style.display = 'none';
        
        const progress = document.getElementById('progress');
        if (progress) {
            progress.style.width = '10%';
        }
        
        showQuestion();
    }
}

function displayMessage(message, isUser) {
    const chatMessages = document.getElementById('chat-messages');
    const messageDiv = document.createElement('div');
    messageDiv.className = isUser ? 'user-message' : 'bot-message';
    messageDiv.textContent = message;
    chatMessages.appendChild(messageDiv);
    
    if (!isUser) {
        displayUserImage();
    }
}

function displayUserImage() {
    const imageContainer = document.getElementById('user-image-container');
    imageContainer.innerHTML = '';
    
    const img = document.createElement('img');
    img.src = 'path/to/your/image.jpg';
    imageContainer.appendChild(img);
}

function drawImageProp(ctx, img, centerX, centerY, radius) {
    const size = radius * 2;
    const scale = Math.max(size / img.width, size / img.height);
    const width = img.width * scale;
    const height = img.height * scale;
    const x = centerX - radius;
    const y = centerY - radius;
    
    return {
        x: x - (width - size) / 2,
        y: y - (height - size) / 2,
        width: width,
        height: height
    };
}

function drawResult(canvas, ctx, centerX, centerY, radius, result) {
    // วาดดาวประดับ
    const stars = [
        { x: 100, y: 150, size: 3 },
        { x: 200, y: 300, size: 2 },
        { x: 900, y: 200, size: 4 },
        { x: 800, y: 400, size: 3 },
        { x: 150, y: 1700, size: 3 },
        { x: 900, y: 1600, size: 2 },
        // เพิ่มดาวตามต้องการ
    ];

    stars.forEach(star => {
        ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
        
        // เพิ่ม glow effect ให้ดาว
        ctx.shadowColor = 'rgba(255, 255, 255, 0.8)';
        ctx.shadowBlur = 10;
        ctx.fill();
    });
    ctx.shadowBlur = 0;

    // วาดหัวข้อด้วย gradient
    const titleGradient = ctx.createLinearGradient(centerX - 300, 0, centerX + 300, 0);
    titleGradient.addColorStop(0, '#7aa7ff');
    titleGradient.addColorStop(0.5, '#ffffff');
    titleGradient.addColorStop(1, '#7aa7ff');
    
    ctx.textAlign = 'center';
    ctx.fillStyle = titleGradient;
    
    // เพิ่ม glow effect และปรับขนาดหัวข้อ
    ctx.shadowColor = 'rgba(122, 167, 255, 0.5)';
    ctx.shadowBlur = 20;
    
    // หัวข้อแรก
    ctx.font = '500 48px Kanit';
    ctx.fillText('✨ ผลการค้นหา ✨', centerX, 180);
    
    // หัวข้อรอง
    ctx.font = '500 56px Kanit';
    ctx.fillText('ดวงดาวของคุณ', centerX, 280);
    
    // รีเซ็ต shadow
    ctx.shadowBlur = 0;
    
    // วาดข้อความผลลัพธ์
    const maxWidth = canvas.width - 240;  // เพิ่มระยะขอบ
    const lineHeight = 55;  // ลดระยะห่างระหว่างบรรทัด
    let y = centerY + radius + 150;  // เพิ่มระยะห่างจากรูปดาว
    
    ctx.font = '300 34px Kanit';  // ลดขนาดตัวอักษรลง
    ctx.fillStyle = 'rgba(255, 255, 255, 0.95)';
    
    // แบ่งข้อความเป็นบรรทัดๆ และจัดกึ่งกลาง
    const lines = [];
    let currentLine = '';
    const words = result.split(' ');
    
    for (let word of words) {
        const testLine = currentLine + word + ' ';
        const metrics = ctx.measureText(testLine);
        
        if (metrics.width > maxWidth && currentLine !== '') {
            lines.push(currentLine.trim());
            currentLine = word + ' ';
        } else {
            currentLine = testLine;
        }
    }
    if (currentLine.trim()) {
        lines.push(currentLine.trim());
    }

    // คำนวณความสูงทั้งหมดของข้อความ
    const totalTextHeight = lines.length * lineHeight;
    // ปรับตำแหน่ง y เริ่มต้นให้ข้อความอยู่กึ่งกลางพื้นที่ที่เหลือ
    const remainingSpace = canvas.height - (y + totalTextHeight + 150); // 150 คือระยะห่างจากข้อความถึง URL
    y += remainingSpace / 2;

    // วาดแต่ละบรรทัด
    lines.forEach(line => {
        ctx.shadowColor = 'rgba(255, 255, 255, 0.3)';
        ctx.shadowBlur = 8;
        ctx.fillText(line, centerX, y);
        ctx.shadowBlur = 0;
        y += lineHeight;
    });
    
    // URL ด้านล่าง - ปรับให้อยู่ด้านล่างเสมอ
    ctx.font = '300 32px Kanit';
    const urlGradient = ctx.createLinearGradient(centerX - 200, 0, centerX + 200, 0);
    urlGradient.addColorStop(0, 'rgba(255, 255, 255, 0.4)');
    urlGradient.addColorStop(0.5, 'rgba(255, 255, 255, 0.8)');
    urlGradient.addColorStop(1, 'rgba(255, 255, 255, 0.4)');
    ctx.fillStyle = urlGradient;
    ctx.fillText('project-stellar-ecru.vercel.app', centerX, canvas.height - 80);
}

async function generateResultImage() {
    try {
        await document.fonts.ready;
        
        const canvas = document.getElementById('resultCanvas');
        const ctx = canvas.getContext('2d');
        
        canvas.width = 1080;
        canvas.height = 1920;
        
        // เพิ่ม lens flare effect ด้านหลังรูปดาว
        function drawLensFlare(x, y) {
            // วาด main glow
            const mainGlow = ctx.createRadialGradient(x, y, 0, x, y, 400);
            mainGlow.addColorStop(0, 'rgba(255, 255, 255, 0.2)');
            mainGlow.addColorStop(0.5, 'rgba(255, 255, 255, 0.05)');
            mainGlow.addColorStop(1, 'rgba(255, 255, 255, 0)');
            ctx.fillStyle = mainGlow;
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // วาด light streaks
            for (let i = 0; i < 6; i++) {
                const angle = (Math.PI * 2 / 6) * i;
                const length = 300;
                const startX = x + Math.cos(angle) * 50;
                const startY = y + Math.sin(angle) * 50;
                const endX = x + Math.cos(angle) * length;
                const endY = y + Math.sin(angle) * length;

                const gradient = ctx.createLinearGradient(startX, startY, endX, endY);
                gradient.addColorStop(0, 'rgba(255, 255, 255, 0.15)');
                gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');

                ctx.beginPath();
                ctx.strokeStyle = gradient;
                ctx.lineWidth = 20;
                ctx.moveTo(startX, startY);
                ctx.lineTo(endX, endY);
                ctx.stroke();
            }

            // เพิ่ม light dots
            for (let i = 0; i < 3; i++) {
                const angle = Math.random() * Math.PI * 2;
                const distance = Math.random() * 200 + 100;
                const dotX = x + Math.cos(angle) * distance;
                const dotY = y + Math.sin(angle) * distance;
                
                const dotGlow = ctx.createRadialGradient(dotX, dotY, 0, dotX, dotY, 20);
                dotGlow.addColorStop(0, 'rgba(255, 255, 255, 0.2)');
                dotGlow.addColorStop(0.5, 'rgba(255, 255, 255, 0.05)');
                dotGlow.addColorStop(1, 'rgba(255, 255, 255, 0)');
                
                ctx.fillStyle = dotGlow;
                ctx.beginPath();
                ctx.arc(dotX, dotY, 20, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        // วาดพื้นหลัง
        const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
        gradient.addColorStop(0, '#001B44');
        gradient.addColorStop(0.3, '#002B69');
        gradient.addColorStop(0.7, '#002B69');
        gradient.addColorStop(1, '#001B44');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // เพิ่มดาวระยิบระยับในพื้นหลัง
        for (let i = 0; i < 100; i++) {
            const x = Math.random() * canvas.width;
            const y = Math.random() * canvas.height;
            const size = Math.random() * 2;
            
            // วาดดาว
            ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
            ctx.beginPath();
            ctx.arc(x, y, size, 0, Math.PI * 2);
            ctx.fill();
            
            // เพิ่ม glow effect ให้ดาว
            if (Math.random() > 0.8) { // สุ่มให้บางดาวมี glow effect
                const starGlow = ctx.createRadialGradient(x, y, 0, x, y, size * 4);
                starGlow.addColorStop(0, 'rgba(255, 255, 255, 0.3)');
                starGlow.addColorStop(1, 'rgba(255, 255, 255, 0)');
                ctx.fillStyle = starGlow;
                ctx.beginPath();
                ctx.arc(x, y, size * 4, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        const starImg = document.querySelector('#star-icon img');
        if (!starImg) {
            throw new Error('ไม่พบรูปภาพดาว');
        }

        return new Promise((resolve, reject) => {
            const img = new Image();
            img.crossOrigin = "anonymous";
            
            img.onload = () => {
                const centerX = canvas.width / 2;
                const centerY = canvas.height / 2 - 100;
                
                // วาด lens flare ก่อนวาดรูปดาว
                drawLensFlare(centerX, centerY);

                ctx.save();
                ctx.beginPath();
                ctx.arc(centerX, centerY, 250, 0, Math.PI * 2);
                ctx.clip();

                const drawProps = drawImageProp(ctx, img, centerX, centerY, 250);
                ctx.drawImage(
                    img,
                    drawProps.x,
                    drawProps.y,
                    drawProps.width,
                    drawProps.height
                );
                ctx.restore();

                ctx.strokeStyle = 'rgba(255, 255, 255, 0.9)';
                ctx.lineWidth = 3;
                ctx.beginPath();
                ctx.arc(centerX, centerY, 250, 0, Math.PI * 2);
                ctx.stroke();

                ctx.strokeStyle = 'rgba(255, 255, 255, 0.4)';
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.arc(centerX, centerY, 250 + 10, 0, Math.PI * 2);
                ctx.stroke();

                const result = document.getElementById('star-result').textContent;
                
                drawResult(canvas, ctx, centerX, centerY, 250, result);

                canvas.toBlob((blob) => {
                    if (!blob) {
                        reject(new Error('ไม่สามารถสร้างไฟล์ภาพได้'));
                        return;
                    }

                    const url = URL.createObjectURL(blob);
                    const link = document.createElement('a');
                    link.download = 'stellar-result.png';
                    link.href = url;
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                    URL.revokeObjectURL(url);
                    resolve();
                }, 'image/png', 1.0);
            };

            img.onerror = () => {
                reject(new Error('ไม่สามารถโหลดรูปภาพดาวได้'));
            };

            img.src = starImg.src;
        });
    } catch (error) {
        console.error('เกิดข้อผิดพลาด:', error);
        throw error;
    }
}

function saveResult() {
    generateResultImage().catch(error => {
        console.error('เกิดข้อผิดพลาดในการสร้างรูปภาพ:', error);
    });
}

document.addEventListener('DOMContentLoaded', function() {
    const saveButton = document.getElementById('save-result-btn');
    if (saveButton) {
        saveButton.addEventListener('click', saveResult);
    }
});

showQuestion();