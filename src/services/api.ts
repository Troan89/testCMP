import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {CreateUpdateRowList, DeleteRow, GetListRowId, ListRow} from "./types.ts";

export const testApi = createApi({
    reducerPath: 'testApi',
    baseQuery: fetchBaseQuery({
        baseUrl: '/api',
        credentials: 'include',
        prepareHeaders: (headers) => {
            headers.set('Content-Type', 'application/json');
            headers.append('x-auth-skip', 'true');
            return headers;
        },
    }),
    tagTypes: ['ListRow'],
    endpoints: builder => {
        return {
            getListRow: builder.query<ListRow, GetListRowId>({
                providesTags: ['ListRow'],
                query: ({eID}) => `v1/outlay-rows/entity/${eID}/row/list`,
            }),
            createRow: builder.mutation<ListRow, CreateUpdateRowList>({
                invalidatesTags: ['ListRow'],
                query: (data) => ({
                    url: `v1/outlay-rows/entity/${data.eID}/row/create`,
                    method: 'POST',
                    body: data,
                }),
            }),
            deleteRow: builder.mutation<ListRow, DeleteRow>({
                invalidatesTags: ['ListRow'],
                query: ({eID, rID}) => ({
                    method: 'DELETE',
                    url: `v1/outlay-rows/entity/${eID}/row/${rID}/delete`,
                })
            }),
            updateRow: builder.mutation<ListRow, CreateUpdateRowList>({
                invalidatesTags: ['ListRow'],
                query: (data) => ({
                    url: `v1/outlay-rows/entity/${data.eID}/row/${data.parentId}/update`,
                    method: 'POST',
                    body: data,
                })
            }),
        }
    },
})

export const {
    useGetListRowQuery,
    useCreateRowMutation,
    useDeleteRowMutation,
    useUpdateRowMutation} = testApi