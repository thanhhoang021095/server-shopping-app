import { Response, Request } from 'express'
import { Highlight } from '../model'
import { IHighlight } from '../interfaces'
// import { getStorage, saveStorage } from '../common/function'
// import redis from "redis"

interface ReponseType {
  success: boolean
  data: any
}

export default class SearchServices {
  static async get (
    req: Request,
    res: Response<ReponseType>
  ): Promise<Response<ReponseType>> {
    try {
        const payload: any = await Highlight.find({});
        return res.json({ success: true, data: payload })
    } catch (error) {
      return res.status(500)
    }
  }

  static async post (
    req: Request,
    res: Response<ReponseType>
  ): Promise<Response<ReponseType>> {
    try {
        return res.json({ success: true, data: [] })
    } catch (error) {
      return res.status(500)
    }
  }
}
