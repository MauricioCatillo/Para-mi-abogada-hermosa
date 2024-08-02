const questions = [
    // Dificultad 1
    [
        {
            question: "¿Cuál es el principio fundamental del derecho penal que establece que nadie puede ser sancionado por una conducta que no estaba previamente tipificada como delito?",
            answers: [
                "Principio de legalidad",
                "Principio de culpabilidad",
                "Principio de proporcionalidad",
                "Principio de intervención mínima",
                "Principio de presunción de inocencia"
            ],
            correct: 0,
            explanation: "El principio de legalidad es fundamental en el derecho penal y se resume en la frase latina 'nullum crimen, nulla poena sine praevia lege' (no hay crimen ni pena sin ley previa). Este principio garantiza la seguridad jurídica al establecer que solo se pueden castigar las conductas que estaban previamente definidas como delitos en la ley.",
            hint: "Este principio se relaciona con la necesidad de que los delitos estén definidos en la ley antes de que se cometan."
        },
        {
            question: "¿Qué elemento del delito se refiere a la acción u omisión voluntaria que realiza el sujeto?",
            answers: [
                "Conducta",
                "Tipicidad",
                "Antijuridicidad",
                "Culpabilidad",
                "Punibilidad"
            ],
            correct: 0,
            explanation: "La conducta es el primer elemento del delito y se refiere a la acción u omisión voluntaria realizada por el sujeto. Es el componente físico o externo del delito, sin el cual no puede hablarse de un hecho delictivo.",
            hint: "Este elemento es el aspecto objetivo y observable del delito."
        },
        {
            question: "¿Qué función cumple principalmente la pena en el derecho penal moderno?",
            answers: [
                "Prevención general y especial",
                "Retribución",
                "Venganza social",
                "Compensación a la víctima",
                "Eliminación del delincuente"
            ],
            correct: 0,
            explanation: "En el derecho penal moderno, la pena cumple principalmente una función de prevención general (dirigida a toda la sociedad) y especial (dirigida al delincuente en particular). Busca disuadir la comisión de delitos y facilitar la reinserción social del infractor, más allá de la mera retribución o castigo.",
            hint: "Esta función busca evitar futuros delitos y no solo castigar los ya cometidos."
        },
        {
            question: "Caso: Un individuo entra en una tienda y toma un artículo sin pagarlo, ocultándolo entre su ropa. ¿Qué delito comete?",
            answers: [
                "Hurto",
                "Robo",
                "Estafa",
                "Apropiación indebida",
                "Fraude"
            ],
            correct: 0,
            explanation: "Este caso constituye un hurto. El hurto se define como el apoderamiento ilegítimo de una cosa mueble ajena sin usar fuerza en las cosas ni violencia o intimidación en las personas. Se diferencia del robo en que este último implica el uso de fuerza o violencia.",
            hint: "Este delito implica tomar algo sin permiso, pero sin usar fuerza o amenazas."
        },
        {
            question: "¿Qué es la tentativa en derecho penal?",
            answers: [
                "Comienzo de ejecución de un delito sin llegar a consumarlo",
                "Planificación de un delito",
                "Delito consumado",
                "Colaboración en un delito",
                "Encubrimiento de un delito"
            ],
            correct: 0,
            explanation: "La tentativa es el comienzo de ejecución de un delito que no llega a consumarse por causas ajenas a la voluntad del autor. Es punible porque representa un peligro para el bien jurídico protegido, aunque generalmente con una pena menor que la del delito consumado.",
            hint: "Se refiere a cuando alguien intenta cometer un delito pero no lo logra completar."
        }
    ],
    // Dificultad 2
    [
        {
            question: "¿Qué es el concurso de delitos?",
            answers: [
                "Comisión de varios delitos por un mismo sujeto",
                "Colaboración entre delincuentes",
                "Competencia entre tribunales",
                "Acumulación de penas",
                "Conflicto entre leyes penales"
            ],
            correct: 0,
            explanation: "El concurso de delitos se produce cuando un mismo sujeto comete varios delitos. Puede ser real (varios hechos constituyen varios delitos) o ideal (un solo hecho constituye varios delitos). Es relevante para la determinación de la pena aplicable.",
            hint: "Se relaciona con la situación en que una persona es responsable de más de un delito."
        },
        {
            question: "¿Qué es el error de tipo en derecho penal?",
            answers: [
                "Desconocimiento o error sobre un elemento del tipo penal",
                "Error en la calificación jurídica del delito",
                "Equivocación en la identidad de la víctima",
                "Fallo en la ejecución del delito",
                "Confusión sobre la pena aplicable"
            ],
            correct: 0,
            explanation: "El error de tipo es el desconocimiento o la equivocación sobre alguno de los elementos que integran el tipo penal. Si es invencible, excluye la responsabilidad penal; si es vencible, puede dar lugar a la punición por imprudencia si el delito lo admite.",
            hint: "Se refiere a una equivocación sobre los hechos que constituyen el delito."
        },
        {
            question: "¿Qué es la alevosía como circunstancia agravante?",
            answers: [
                "Empleo de medios que aseguran el delito sin riesgo para el autor",
                "Cometer el delito por motivos racistas",
                "Abusar de superioridad jerárquica",
                "Cometer el delito con premeditación",
                "Ejecutar el hecho con ensañamiento"
            ],
            correct: 0,
            explanation: "La alevosía es una circunstancia agravante que implica el empleo de medios, modos o formas en la ejecución del delito que tienden a asegurarlo, sin riesgo para el autor que proceda de la defensa que pudiera hacer el ofendido. Aumenta la pena por la mayor reprochabilidad de la conducta.",
            hint: "Esta circunstancia se relaciona con la forma de cometer el delito que busca evitar la defensa de la víctima."
        },
        {
            question: "Caso: Un médico, por negligencia grave, administra un medicamento equivocado causando la muerte del paciente. ¿Qué delito comete?",
            answers: [
                "Homicidio imprudente",
                "Homicidio doloso",
                "Asesinato",
                "Lesiones graves",
                "Denegación de auxilio"
            ],
            correct: 0,
            explanation: "Este caso constituye un homicidio imprudente. Se produce cuando la muerte es causada por una acción negligente o imprudente, sin intención de matar. En el ámbito médico, la negligencia grave que resulta en la muerte del paciente típicamente se clasifica como homicidio imprudente.",
            hint: "Este delito implica causar la muerte sin intención, pero por una falta grave de cuidado o atención."
        },
        {
            question: "¿Qué es la omisión impropia o comisión por omisión?",
            answers: [
                "No evitar un resultado estando obligado a hacerlo",
                "Incumplir una orden judicial",
                "Olvidar denunciar un delito",
                "Abstenerse de prestar auxilio",
                "Negarse a declarar como testigo"
            ],
            correct: 0,
            explanation: "La omisión impropia o comisión por omisión se produce cuando el sujeto, teniendo una posición de garante, no evita la producción de un resultado típico que estaba obligado a evitar. Se equipara a la causación activa del resultado.",
            hint: "Se refiere a situaciones donde no hacer algo es tan grave como hacerlo activamente."
        }
    ],
    // Dificultad 3
    [
        {
            question: "¿Qué es la teoría de la imputación objetiva?",
            answers: [
                "Criterio para atribuir un resultado a una conducta",
                "Método para determinar la culpabilidad subjetiva",
                "Técnica de investigación criminal",
                "Doctrina sobre la responsabilidad civil derivada del delito",
                "Teoría sobre la personalidad del delincuente"
            ],
            correct: 0,
            explanation: "La teoría de la imputación objetiva es un criterio normativo para atribuir un resultado a una conducta. Va más allá de la mera causalidad natural, exigiendo que la conducta haya creado o aumentado un riesgo jurídicamente desaprobado y que ese riesgo se haya concretado en el resultado típico.",
            hint: "Esta teoría se relaciona con cómo se determina si una acción es legalmente responsable de un resultado específico."
        },
        {
            question: "¿Qué es el principio de ne bis in idem en el derecho penal?",
            answers: [
                "Prohibición de sancionar dos veces por el mismo hecho",
                "Obligación de juzgar todos los delitos",
                "Derecho a un juicio rápido",
                "Principio de legalidad procesal",
                "Garantía de imparcialidad judicial"
            ],
            correct: 0,
            explanation: "El principio de ne bis in idem (no dos veces por lo mismo) prohíbe que una persona sea juzgada o sancionada dos veces por el mismo hecho. Es una garantía fundamental del derecho penal y procesal que evita la duplicidad de sanciones y procedimientos por los mismos hechos.",
            hint: "Este principio protege contra el doble castigo o proceso por la misma acción."
        },
        {
            question: "¿Qué es la autoría mediata en derecho penal?",
            answers: [
                "Utilizar a otro como instrumento para cometer el delito",
                "Ser cómplice secundario en un delito",
                "Actuar bajo órdenes de un superior",
                "Cometer un delito por medio de una persona jurídica",
                "Participar indirectamente en la ejecución del delito"
            ],
            correct: 0,
            explanation: "La autoría mediata se produce cuando el autor utiliza a otra persona como instrumento para cometer el delito. El autor mediato domina la voluntad del ejecutor material, ya sea por coacción, error, o utilizando una estructura organizada de poder. Se le considera autor aunque no ejecute directamente el hecho.",
            hint: "Se refiere a cometer un delito 'a través' de otra persona, que actúa como una herramienta."
        },
        {
            question: "Caso: Una empresa vierte residuos tóxicos en un río, causando graves daños al ecosistema. ¿Qué tipo de responsabilidad penal puede aplicarse?",
            answers: [
                "Responsabilidad penal de la persona jurídica",
                "Responsabilidad individual del CEO",
                "Responsabilidad civil exclusivamente",
                "Sanción administrativa",
                "Inmunidad corporativa"
            ],
            correct: 0,
            explanation: "En este caso, puede aplicarse la responsabilidad penal de la persona jurídica. Muchos sistemas jurídicos modernos reconocen que las empresas pueden ser penalmente responsables por delitos cometidos en su nombre o por su cuenta, y en su beneficio directo o indirecto. Esto es particularmente relevante en delitos medioambientales.",
            hint: "Esta forma de responsabilidad permite sancionar a la entidad corporativa, no solo a individuos específicos."
        },
        {
            question: "¿Qué es la teoría del dominio del hecho en la autoría del delito?",
            answers: [
                "Criterio para determinar quién es autor del delito",
                "Doctrina sobre el control mental en delitos",
                "Teoría sobre la premeditación criminal",
                "Principio de responsabilidad objetiva",
                "Concepto sobre la finalidad del autor"
            ],
            correct: 0,
            explanation: "La teoría del dominio del hecho es un criterio para determinar la autoría en el delito. Según esta teoría, es autor quien tiene el dominio del hecho delictivo, es decir, quien decide el sí y el cómo de su realización. Puede manifestarse como dominio de la acción, de la voluntad o funcional.",
            hint: "Esta teoría se centra en quién tiene el control real sobre la comisión del delito."
        }
    ]
];

let currentQuestionIndex = 0;
let currentDifficulty = 1;
let startTime;

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function startQuiz(difficulty) {
    currentDifficulty = difficulty;
    currentQuestionIndex = 0;
    startTime = new Date();
    document.getElementById('menu-container').style.display = 'none';
    document.getElementById('quiz-container').style.display = 'block';
    displayQuestion();
}

function displayQuestion() {
    const questionContainer = document.getElementById('question-container');
    const questionData = questions[currentDifficulty - 1][currentQuestionIndex];
    const shuffledAnswers = [...questionData.answers];
    shuffle(shuffledAnswers);
    questionContainer.innerHTML = `
        <div class="question">${questionData.question}</div>
        ${shuffledAnswers.map(answer => `
            <div class="answer" onclick="selectAnswer('${answer}', ${shuffledAnswers.indexOf(answer)})">${answer}</div>
        `).join('')}
    `;
    document.getElementById('feedback').innerText = '';
    document.getElementById('explanation').style.display = 'none';
    updateControls();
}

function updateControls() {
    document.getElementById('prev-btn').disabled = currentQuestionIndex === 0;
    document.getElementById('next-btn').disabled = currentQuestionIndex === questions[currentDifficulty - 1].length - 1;
    document.getElementById('hint-btn').disabled = false;
}

function selectAnswer(selectedAnswer, selectedIndex) {
    const questionData = questions[currentDifficulty - 1][currentQuestionIndex];
    const answers = document.querySelectorAll('.answer');
    const correctAnswer = questionData.answers[questionData.correct];
    answers.forEach((answer, index) => {
        if (answer.innerText === correctAnswer) {
            answer.classList.add('correct');
        } else if (index === selectedIndex) {
            answer.classList.add('incorrect');
        }
        answer.onclick = null;  // Deshabilitar clics adicionales
    });
    if (selectedAnswer === correctAnswer) {
        document.getElementById('feedback').innerText = '¡Correcto!';
    } else {
        document.getElementById('feedback').innerText = 'Incorrecto. La respuesta correcta está marcada en verde.';
    }
    document.getElementById('explanation').innerText = questionData.explanation;
    document.getElementById('explanation').style.display = 'block';
    document.getElementById('hint-btn').disabled = true;
}

document.getElementById('prev-btn').addEventListener('click', () => {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        displayQuestion();
    }
});

document.getElementById('next-btn').addEventListener('click', () => {
    if (currentQuestionIndex < questions[currentDifficulty - 1].length - 1) {
        currentQuestionIndex++;
        displayQuestion();
    } else {
        showResult();
    }
});

document.getElementById('hint-btn').addEventListener('click', () => {
    const hint = questions[currentDifficulty - 1][currentQuestionIndex].hint;
    document.getElementById('feedback').innerText = `Pista: ${hint}`;
});

function goBack() {
    document.getElementById('quiz-container').style.display = 'none';
    document.getElementById('menu-container').style.display = 'block';
    document.getElementById('feedback').innerText = '';
}

function showResult() {
    const endTime = new Date();
    const timeTaken = Math.floor((endTime - startTime) / 1000);
    const minutes = Math.floor(timeTaken / 60);
    const seconds = timeTaken % 60;
    document.getElementById('quiz-container').innerHTML = `
        <h2>¡Has completado el quiz!</h2>
        <p>Tiempo tomado: ${minutes} minutos y ${seconds} segundos.</p>
        <button onclick="goBack()">Regresar al Menú</button>
    `;
}

// Inicializar el quiz
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('quiz-container').style.display = 'none';
});