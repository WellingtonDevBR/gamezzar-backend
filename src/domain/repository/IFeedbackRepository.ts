import { Feedback } from "../entities/Feedback"


export interface IFeedbackRepository {
    create(feedback: Feedback): Promise<any>
    findAllByUserId(userId: string): Promise<any>
}