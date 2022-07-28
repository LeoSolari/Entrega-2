import { BasicResponse } from '../types'

export interface IGoodByeController{
    getMessage(name?: String): Promise<BasicResponse>
  }