import { BasicResponse } from "./types";
import { IGoodByeController } from "./interfaces";
import { LogSuccess } from "../utils/Logger";

export class GoodByeController implements IGoodByeController{
    public async getMessage(name?: String): Promise<BasicResponse> {
        const d: Date = new Date()
        LogSuccess('[/api/goodbye] GET REQUEST')

        return {'message': `Hello, ${name || 'World!'}, "Date": ${d}`}
    }
}
