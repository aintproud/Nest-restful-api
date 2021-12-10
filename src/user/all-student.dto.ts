export class CreateStudentDto{
    readonly name: string
    readonly isProgrammer: boolean
}

export class UpdateStudentDto{
    readonly name?: string
    readonly isProgrammer?: boolean
}