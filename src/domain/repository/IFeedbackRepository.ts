import { Feedback } from "../entities/Feedback"


export interface IFeedbackRepository {
    create(feedback: Feedback): Promise<any>
    findAllByUserName(userGame: string): Promise<any>
}