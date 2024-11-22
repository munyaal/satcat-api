export type PagingResponse<Entity> = {
  page: number;
  limit: number;
  records: number;
  totalPage: number;
  data: Entity[];
};
