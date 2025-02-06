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

        // แสดงปุ่มย้อนกลับเท่านั้น
        prevBtn.style.display = currentQuestion > 0 ? 'block' : 'none';
    } else {
        showResult();
    }
}

function selectAnswer(choiceIndex) {
    answers[currentQuestion] = choiceIndex;
    
    // ลบ class selected จากทุกปุ่ม
    const buttons = document.querySelectorAll('#choices button');
    buttons.forEach(button => button.classList.remove('selected'));
    
    // เพิ่ม class selected ให้ปุ่มที่เลือก
    buttons[choiceIndex].classList.add('selected');
    
    // ไปข้อถัดไปโดยอัตโนมัติหลังจากเลือกคำตอบ
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

// ลบ event listener ของปุ่มข้ามคำถาม
document.addEventListener('DOMContentLoaded', function() {
    const prevBtn = document.getElementById('prev-btn');
    const restartButton = document.getElementById('restart-btn');
    
    if (prevBtn) {
        prevBtn.addEventListener('click', previousQuestion);
    }
    
    if (restartButton) {
        restartButton.addEventListener('click', restartQuiz);
    }
});

function showResult() {
    const quizContainer = document.getElementById('quiz-container');
    const resultContainer = document.getElementById('result');
    const starResultEl = document.getElementById('star-result');
    const starIconEl = document.getElementById('star-icon');
    
    // นับคำตอบแต่ละประเภท
    const counts = answers.reduce((acc, val) => {
        if (val !== null) {
            acc[val] = (acc[val] || 0) + 1;
        }
        return acc;
    }, {});
    
    // หาคำตอบที่ถูกเลือกมากที่สุด
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
    // รีเซ็ตค่าทั้งหมด
    currentQuestion = 0;
    answers = new Array(questions.length).fill(null);
    
    // เปลี่ยนการแสดงผลกลับไปที่แบบทดสอบ
    const quizContainer = document.getElementById('quiz-container');
    const resultContainer = document.getElementById('result');
    
    if (quizContainer && resultContainer) {
        quizContainer.style.display = 'block';
        resultContainer.style.display = 'none';
        
        // รีเซ็ต progress bar
        const progress = document.getElementById('progress');
        if (progress) {
            progress.style.width = '10%';
        }
        
        // แสดงคำถามแรก
        showQuestion();
    }
}

function displayMessage(message, isUser) {
    const chatMessages = document.getElementById('chat-messages');
    const messageDiv = document.createElement('div');
    messageDiv.className = isUser ? 'user-message' : 'bot-message';
    messageDiv.textContent = message;
    chatMessages.appendChild(messageDiv);
    
    // หลังจากแสดงข้อความตอบกลับ ให้แสดงรูปภาพ
    if (!isUser) {
        displayUserImage();
    }
}

function displayUserImage() {
    const imageContainer = document.getElementById('user-image-container');
    imageContainer.innerHTML = ''; // ล้างรูปภาพเก่า
    
    const img = document.createElement('img');
    img.src = 'path/to/your/image.jpg'; // เปลี่ยนเป็น path ของรูปภาพที่คุณเตรียมไว้
    imageContainer.appendChild(img);
}

// เริ่มแสดงคำถามแรก
showQuestion(); 