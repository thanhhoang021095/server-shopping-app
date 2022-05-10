import {
    GraphQLID,
    GraphQLObjectType,
    GraphQLString,
    GraphQLSchema,
    GraphQLBoolean,
    GraphQLList,
    GraphQLInt
} from 'graphql'
import { Highlight } from '../model/index'

const HighlightType = new GraphQLObjectType({
    name: 'Highlight',
    fields: () => ({
        id: {
            type: GraphQLInt
        },

        title: {
            type: GraphQLString
        }
        ,
        image: {
            type: GraphQLString
        }
        ,
        linkHref: {
            type: GraphQLString
        }

    })
})

const queryType = new GraphQLObjectType({
    name: 'query',
    fields: () => ({
        highlights: {
            type: new GraphQLList(HighlightType),
            resolve: async () => {
                return await new Promise((resolve, reject) => {
                    return Highlight.find({}, (err: boolean, highlights: any) => {
                        console.error(err)
                        if (err) reject(err)
                        else resolve(highlights)
                    })
                })
            }
        }
    })
})

const HighlightSchema = new GraphQLSchema({
    query: queryType
})

export default HighlightSchema
