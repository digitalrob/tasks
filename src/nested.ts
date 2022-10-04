import { Answer } from "./interfaces/answer";
import { Question, QuestionType } from "./interfaces/question";
import { duplicateQuestion, makeBlankQuestion } from "./objects";

/**
 * Consumes an array of questions and returns a new array with only the questions
 * that are `published`.
 */
export function getPublishedQuestions(questions: Question[]): Question[] {
    const Arrcopy = questions.filter(
        (element: Question): boolean => element.published === true
    );
    return Arrcopy;
}

/**
 * Consumes an array of questions and returns a new array of only the questions that are
 * considered "non-empty". An empty question has an empty string for its `body` and
 * `expected`, and an empty array for its `options`.
 */
export function getNonEmptyQuestions(questions: Question[]): Question[] {
    const Arrcopy = questions.filter(
        (element: Question): boolean =>
            element.body !== "" ||
            element.expected !== "" ||
            element.options.length !== 0
    );
    return Arrcopy;
}

/***
 * Consumes an array of questions and returns the question with the given `id`. If the
 * question is not found, return `null` instead.
 */
export function findQuestion(
    questions: Question[],
    id: number
): Question | null {
    const find = questions.filter(
        (element: Question): boolean => element.id === id
    );
    if (find[0] !== undefined) {
        return find[0];
    } else {
        return null;
    }
}

/**
 * Consumes an array of questions and returns a new array that does not contain the question
 * with the given `id`.
 */
export function removeQuestion(questions: Question[], id: number): Question[] {
    const find = questions.filter(
        (element: Question): boolean => element.id !== id
    );
    return find;
}

/***
 * Consumes an array of questions and returns a new array containing just the names of the
 * questions, as an array.
 */
export function getNames(questions: Question[]): string[] {
    const copy = questions.map((element: Question): string => element.name);
    return copy;
}

/***
 * Consumes an array of questions and returns the sum total of all their points added together.
 */
export function sumPoints(questions: Question[]): number {
    const copy = questions.map((element: Question): number => element.points);
    const sum = copy.reduce(
        (currentTotal: number, num: number) => currentTotal + num,
        0
    );
    return sum;
}

/***
 * Consumes an array of questions and returns the sum total of the PUBLISHED questions.
 */
export function sumPublishedPoints(questions: Question[]): number {
    const copy = questions.map((element: Question): number => {
        if (element.published === true) {
            return element.points;
        } else {
            return 0;
        }
    });
    const sum = copy.reduce(
        (currentTotal: number, num: number) => currentTotal + num,
        0
    );
    return sum;
}

/***
 * Consumes an array of questions, and produces a Comma-Separated Value (CSV) string representation.
 * A CSV is a type of file frequently used to share tabular data; we will use a single string
 * to represent the entire file. The first line of the file is the headers "id", "name", "options",
 * "points", and "published". The following line contains the value for each question, separated by
 * commas. For the `options` field, use the NUMBER of options.
 *
 * Here is an example of what this will look like (do not include the border).
 *`
id,name,options,points,published
1,Addition,0,1,true
2,Letters,0,1,false
5,Colors,3,1,true
9,Shapes,3,2,false
` *
 * Check the unit tests for more examples!
 */
export function toCSV(questions: Question[]): string {
    const CSV = questions
        .map(
            (element: Question): string =>
                `${element.id},${element.name},${element.options.length},${element.points},${element.published}`
        )
        .join("\n");
    return "id,name,options,points,published\n" + CSV;
}

/**
 * Consumes an array of Questions and produces a corresponding array of
 * Answers. Each Question gets its own Answer, copying over the `id` as the `questionId`,
 * making the `text` an empty string, and using false for both `submitted` and `correct`.
 */
export function makeAnswers(questions: Question[]): Answer[] {
    const newanswer = questions.map(
        (element: Question): Answer => ({
            questionId: element.id,
            text: "",
            submitted: false,
            correct: false
        })
    );
    return newanswer;
}

/***
 * Consumes an array of Questions and produces a new array of questions, where
 * each question is now published, regardless of its previous published status.
 */
export function publishAll(questions: Question[]): Question[] {
    const copy = questions.map((element: Question): Question => {
        if (element.published === true) {
            return element;
        } else {
            return { ...element, published: true };
        }
    });

    return copy;
}

/***
 * Consumes an array of Questions and produces whether or not all the questions
 * are the same type. They can be any type, as long as they are all the SAME type.
 */
export function sameType(questions: Question[]): boolean {
    const copy = [...questions];
    const type = questions.every(
        (element: Question): boolean => element.type === copy[0].type
    );
    return type;
}

/***
 * Consumes an array of Questions and produces a new array of the same Questions,
 * except that a blank question has been added onto the end. Reuse the `makeBlankQuestion`
 * you defined in the `objects.ts` file.
 */
export function addNewQuestion(
    questions: Question[],
    id: number,
    name: string,
    type: QuestionType
): Question[] {
    return [...questions, makeBlankQuestion(id, name, type)];
}

/***
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its name should now be `newName`.
 */
export function renameQuestionById(
    questions: Question[],
    targetId: number,
    newName: string
): Question[] {
    const copy = questions.map((element: Question): Question => {
        if (element.id === targetId) {
            return { ...element, name: newName };
        } else {
            return { ...element };
        }
    });
    return copy;
}
/***
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its `type` should now be the `newQuestionType`
 * AND if the `newQuestionType` is no longer "multiple_choice_question" than the `options`
 * must be set to an empty list.
 */
export function changeQuestionTypeById(
    questions: Question[],
    targetId: number,
    newQuestionType: QuestionType
): Question[] {
    const copy = questions.map((element: Question): Question => {
        if (element.id === targetId) {
            return {
                ...element,
                type: newQuestionType,
                options:
                    newQuestionType !== "multiple_choice_question"
                        ? []
                        : element.options
            };
        } else {
            return element;
        }
    });
    return copy;
}

/**
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its `option` array should have a new element.
 * If the `targetOptionIndex` is -1, the `newOption` should be added to the end of the list.
 * Otherwise, it should *replace* the existing element at the `targetOptionIndex`.
 *
 * Remember, if a function starts getting too complicated, think about how a helper function
 * can make it simpler! Break down complicated tasks into little pieces.
 */

export function editOption(
    questions: Question[],
    targetId: number,
    targetOptionIndex: number,
    newOption: string
): Question[] {
    const copy = questions.map((element: Question): Question => {
        if (element.id === targetId) {
            if (targetOptionIndex === -1) {
                return { ...element, options: [...element.options, newOption] };
            } else {
                const otherOptions = [...element.options];
                otherOptions.splice(targetOptionIndex, 1, newOption);
                return { ...element, options: otherOptions };
            }
        } else {
            return { ...element };
        }
    });
    return copy;
}

/***
 * Consumes an array of questions, and produces a new array based on the original array.
 * The only difference is that the question with id `targetId` should now be duplicated, with
 * the duplicate inserted directly after the original question. Use the `duplicateQuestion`
 * function you defined previously; the `newId` is the parameter to use for the duplicate's ID.
 */
export function duplicateQuestionInArray(
    questions: Question[],
    targetId: number,
    newId: number
): Question[] {
    const arr = [...questions];
    const copy =
        questions[
            questions.findIndex(
                (element: Question): boolean => element.id === targetId
            )
        ];
    arr.splice(
        questions.findIndex(
            (element: Question): boolean => element.id === targetId
        ) + 1,
        0,
        duplicateQuestion(newId, copy)
    );
    return arr;
}
