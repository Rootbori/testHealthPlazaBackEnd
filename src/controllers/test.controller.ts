import { NextFunction, Request, Response } from 'express'

class TestController {

    public list = async (req: Request, res: Response, next: NextFunction) => {
        try {
            let lists = [
                {
                    "question": "Question 1",
                    "answers": [
                        {
                            "text": "Option 51 for Q1",
                            "correct": true
                        },
                        {
                            "text": "Option 37 for Q1",
                            "correct": false
                        },
                        {
                            "text": "Option 42 for Q1",
                            "correct": false
                        },
                        {
                            "text": "Option 18 for Q1",
                            "correct": false
                        }
                    ]
                },
                {
                    "question": "Question 2",
                    "answers": [
                        {
                            "text": "Option 42 for Q2",
                            "correct": false
                        },
                        {
                            "text": "Option 77 for Q2",
                            "correct": true
                        },
                        {
                            "text": "Option 19 for Q2",
                            "correct": false
                        },
                        {
                            "text": "Option 17 for Q2",
                            "correct": false
                        }
                    ]
                },
                {
                    "question": "Question 3",
                    "answers": [
                        {
                            "text": "Option 34 for Q3",
                            "correct": false
                        },
                        {
                            "text": "Option 96 for Q3",
                            "correct": true
                        },
                        {
                            "text": "Option 33 for Q3",
                            "correct": false
                        },
                        {
                            "text": "Option 41 for Q3",
                            "correct": false
                        }
                    ]
                },
                {
                    "question": "Question 4",
                    "answers": [
                        {
                            "text": "Option 82 for Q4",
                            "correct": true
                        },
                        {
                            "text": "Option 98 for Q4",
                            "correct": false
                        },
                        {
                            "text": "Option 43 for Q4",
                            "correct": false
                        },
                        {
                            "text": "Option 75 for Q4",
                            "correct": false
                        }
                    ]
                },
                {
                    "question": "Question 5",
                    "answers": [
                        {
                            "text": "Option 56 for Q5",
                            "correct": false
                        },
                        {
                            "text": "Option 11 for Q5",
                            "correct": true
                        },
                        {
                            "text": "Option 19 for Q5",
                            "correct": false
                        },
                        {
                            "text": "Option 34 for Q5",
                            "correct": false
                        }
                    ]
                },
                {
                    "question": "Question 6",
                    "answers": [
                        {
                            "text": "Option 6 for Q6",
                            "correct": true
                        },
                        {
                            "text": "Option 65 for Q6",
                            "correct": false
                        },
                        {
                            "text": "Option 34 for Q6",
                            "correct": false
                        },
                        {
                            "text": "Option 57 for Q6",
                            "correct": false
                        }
                    ]
                },
                {
                    "question": "Question 7",
                    "answers": [
                        {
                            "text": "Option 5 for Q7",
                            "correct": true
                        },
                        {
                            "text": "Option 85 for Q7",
                            "correct": false
                        },
                        {
                            "text": "Option 57 for Q7",
                            "correct": false
                        },
                        {
                            "text": "Option 78 for Q7",
                            "correct": false
                        }
                    ]
                },
                {
                    "question": "Question 8",
                    "answers": [
                        {
                            "text": "Option 92 for Q8",
                            "correct": true
                        },
                        {
                            "text": "Option 98 for Q8",
                            "correct": false
                        },
                        {
                            "text": "Option 52 for Q8",
                            "correct": false
                        },
                        {
                            "text": "Option 41 for Q8",
                            "correct": false
                        }
                    ]
                },
                {
                    "question": "Question 9",
                    "answers": [
                        {
                            "text": "Option 74 for Q9",
                            "correct": false
                        },
                        {
                            "text": "Option 65 for Q9",
                            "correct": false
                        },
                        {
                            "text": "Option 23 for Q9",
                            "correct": true
                        },
                        {
                            "text": "Option 89 for Q9",
                            "correct": false
                        }
                    ]
                },
                {
                    "question": "Question 10",
                    "answers": [
                        {
                            "text": "Option 54 for Q10",
                            "correct": false
                        },
                        {
                            "text": "Option 21 for Q10",
                            "correct": true
                        },
                        {
                            "text": "Option 34 for Q10",
                            "correct": false
                        },
                        {
                            "text": "Option 77 for Q10",
                            "correct": false
                        }
                    ]
                },
                {
                    "question": "Question 11",
                    "answers": [
                        {
                            "text": "Option 87 for Q11",
                            "correct": true
                        },
                        {
                            "text": "Option 32 for Q11",
                            "correct": false
                        },
                        {
                            "text": "Option 45 for Q11",
                            "correct": false
                        },
                        {
                            "text": "Option 68 for Q11",
                            "correct": false
                        }
                    ]
                },
                {
                    "question": "Question 12",
                    "answers": [
                        {
                            "text": "Option 29 for Q12",
                            "correct": false
                        },
                        {
                            "text": "Option 14 for Q12",
                            "correct": false
                        },
                        {
                            "text": "Option 76 for Q12",
                            "correct": true
                        },
                        {
                            "text": "Option 59 for Q12",
                            "correct": false
                        }
                    ]
                },
                {
                    "question": "Question 13",
                    "answers": [
                        {
                            "text": "Option 66 for Q13",
                            "correct": false
                        },
                        {
                            "text": "Option 23 for Q13",
                            "correct": true
                        },
                        {
                            "text": "Option 48 for Q13",
                            "correct": false
                        },
                        {
                            "text": "Option 35 for Q13",
                            "correct": false
                        }
                    ]
                },
                {
                    "question": "Question 14",
                    "answers": [
                        {
                            "text": "Option 38 for Q14",
                            "correct": true
                        },
                        {
                            "text": "Option 21 for Q14",
                            "correct": false
                        },
                        {
                            "text": "Option 53 for Q14",
                            "correct": false
                        },
                        {
                            "text": "Option 69 for Q14",
                            "correct": false
                        }
                    ]
                },
                {
                    "question": "Question 15",
                    "answers": [
                        {
                            "text": "Option 40 for Q15",
                            "correct": true
                        },
                        {
                            "text": "Option 85 for Q15",
                            "correct": false
                        },
                        {
                            "text": "Option 22 for Q15",
                            "correct": false
                        },
                        {
                            "text": "Option 78 for Q15",
                            "correct": false
                        }
                    ]
                },
                {
                    "question": "Question 16",
                    "answers": [
                        {
                            "text": "Option 53 for Q16",
                            "correct": false
                        },
                        {
                            "text": "Option 68 for Q16",
                            "correct": true
                        },
                        {
                            "text": "Option 19 for Q16",
                            "correct": false
                        },
                        {
                            "text": "Option 34 for Q16",
                            "correct": false
                        }
                    ]
                },
                {
                    "question": "Question 17",
                    "answers": [
                        {
                            "text": "Option 91 for Q17",
                            "correct": false
                        },
                        {
                            "text": "Option 74 for Q17",
                            "correct": true
                        },
                        {
                            "text": "Option 52 for Q17",
                            "correct": false
                        },
                        {
                            "text": "Option 65 for Q17",
                            "correct": false
                        }
                    ]
                },
                {
                    "question": "Question 18",
                    "answers": [
                        {
                            "text": "Option 56 for Q18",
                            "correct": false
                        },
                        {
                            "text": "Option 92 for Q18",
                            "correct": true
                        },
                        {
                            "text": "Option 33 for Q18",
                            "correct": false
                        },
                        {
                            "text": "Option 47 for Q18",
                            "correct": false
                        }
                    ]
                },
                {
                    "question": "Question 19",
                    "answers": [
                        {
                            "text": "Option 79 for Q19",
                            "correct": false
                        },
                        {
                            "text": "Option 42 for Q19",
                            "correct": true
                        },
                        {
                            "text": "Option 58 for Q19",
                            "correct": false
                        },
                        {
                            "text": "Option 21 for Q19",
                            "correct": false
                        }
                    ]
                },
                {
                    "question": "Question 20",
                    "answers": [
                        {
                            "text": "Option 47 for Q20",
                            "correct": true
                        },
                        {
                            "text": "Option 54 for Q20",
                            "correct": false
                        },
                        {
                            "text": "Option 31 for Q20",
                            "correct": false
                        },
                        {
                            "text": "Option 82 for Q20",
                            "correct": false
                        }
                    ]
                }
            ]

            const _lists = lists.map((e, index) => ({ ...e, id: index.toString() }));

            return res.status(200).json({lists: _lists, success: true});
        } catch (error) {
            return res.status(400).json({success: false});
        }
    }

}

export default TestController
