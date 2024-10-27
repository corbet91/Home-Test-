import { UseQueryOptions } from "@tanstack/react-query";

export type TFilter = {
  key?: string;
  limit?: number;
  sort?: "sort" | "desc";
  page?: number;
};

export type TQueryFilterProps = UseQueryOptions & {
  key: string;
  limit?: number;
  defaultParams?: TFilter;
  queryFn: (value?: any) => void;
};
