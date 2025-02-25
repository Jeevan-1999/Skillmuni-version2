export interface AnswerOption {
    text: string;
    isCorrect: number;
}

export interface QuestionItem {
    text: string;
    options: AnswerOption[];
    selectedOption: string;
    answerStatus?: string;
}