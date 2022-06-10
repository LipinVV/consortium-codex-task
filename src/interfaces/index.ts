export interface TaskInterface {
    id: number,
    text: string
    answer: string,
}

export interface PaginationInterface {
    handleClickDecrease: () => void,
    handleClickIncrease: () => void,
    currentPage: number,
    questions: TaskInterface[],
    indexOfLastItem: number,
}
