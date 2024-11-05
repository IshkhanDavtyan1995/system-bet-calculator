import { IOddItem, IOddsData } from "./interface"

export const allWinsCombinationMock: IOddItem[][] = [
    [
        {
            "id": 0,
            "odd": 2,
            "status": "Correct"
        },
        {
            "id": 1,
            "odd": 2,
            "status": "Correct"
        },
        {
            "id": 2,
            "odd": 2,
            "status": "Correct"
        }
    ],
    [
        {
            "id": 0,
            "odd": 2,
            "status": "Correct"
        },
        {
            "id": 1,
            "odd": 2,
            "status": "Correct"
        },
        {
            "id": 3,
            "odd": 2,
            "status": "Correct"
        }
    ],
    [
        {
            "id": 0,
            "odd": 2,
            "status": "Correct"
        },
        {
            "id": 2,
            "odd": 2,
            "status": "Correct"
        },
        {
            "id": 3,
            "odd": 2,
            "status": "Correct"
        }
    ],
    [
        {
            "id": 1,
            "odd": 2,
            "status": "Correct"
        },
        {
            "id": 2,
            "odd": 2,
            "status": "Correct"
        },
        {
            "id": 3,
            "odd": 2,
            "status": "Correct"
        }
    ]
]

export const noWinsCombinationMock: IOddItem[][] = [
    [
        {
            "id": 0,
            "odd": 2,
            "status": "Incorrect"
        },
        {
            "id": 1,
            "odd": 2,
            "status": "Incorrect"
        },
        {
            "id": 2,
            "odd": 2,
            "status": "Incorrect"
        }
    ],
    [
        {
            "id": 0,
            "odd": 2,
            "status": "Incorrect"
        },
        {
            "id": 1,
            "odd": 2,
            "status": "Incorrect"
        },
        {
            "id": 3,
            "odd": 2,
            "status": "Incorrect"
        }
    ],
    [
        {
            "id": 0,
            "odd": 2,
            "status": "Incorrect"
        },
        {
            "id": 2,
            "odd": 2,
            "status": "Incorrect"
        },
        {
            "id": 3,
            "odd": 2,
            "status": "Incorrect"
        }
    ],
    [
        {
            "id": 1,
            "odd": 2,
            "status": "Incorrect"
        },
        {
            "id": 2,
            "odd": 2,
            "status": "Incorrect"
        },
        {
            "id": 3,
            "odd": 2,
            "status": "Incorrect"
        }
    ]
]

export const partialWinsCombinationMock: IOddItem[][] = [
    [
        {
            "id": 0,
            "odd": 2,
            "status": "Correct"
        },
        {
            "id": 1,
            "odd": 2,
            "status": "Void"
        },
        {
            "id": 2,
            "odd": 2,
            "status": "Correct"
        }
    ],
    [
        {
            "id": 0,
            "odd": 2,
            "status": "Correct"
        },
        {
            "id": 1,
            "odd": 2,
            "status": "Void"
        },
        {
            "id": 3,
            "odd": 2,
            "status": "Incorrect"
        }
    ],
    [
        {
            "id": 0,
            "odd": 2,
            "status": "Correct"
        },
        {
            "id": 2,
            "odd": 2,
            "status": "Correct"
        },
        {
            "id": 3,
            "odd": 2,
            "status": "Incorrect"
        }
    ],
    [
        {
            "id": 1,
            "odd": 2,
            "status": "Void"
        },
        {
            "id": 2,
            "odd": 2,
            "status": "Correct"
        },
        {
            "id": 3,
            "odd": 2,
            "status": "Incorrect"
        }
    ]
]

export const mockOdds: IOddsData = {
    "totalStake": 100,
    "allOdds": [
        {
            "id": 0,
            "odd": 2,
            "status": "Correct"
        },
        {
            "id": 1,
            "odd": 2,
            "status": "Correct"
        },
        {
            "id": 2,
            "odd": 2,
            "status": "Correct"
        }
    ]
}
