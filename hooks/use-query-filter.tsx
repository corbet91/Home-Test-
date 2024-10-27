import { removeEmptyAndUndefined } from "@/lib/utils";
import { TFilter, TQueryFilterProps } from "@/types";
import { useQueryClient } from "@tanstack/react-query";
import { useState } from "react";

export function useQueryFilter({
  key,
  queryFn,
  defaultParams,
  ...rest
}: TQueryFilterProps) {
  const queryClient = useQueryClient();
  const [filterValue, setFilterValue] = useState<TFilter>({
    ...defaultParams,
  });

  const fetchData = async (params: TFilter) => {
    setFilterValue((p: TFilter) => ({ ...p, page: 1, ...params }));
    try {
      const data = await queryClient.fetchQuery({
        queryKey: [key],
        queryFn: () =>
          queryFn({
            page: 0,
            limit: filterValue.limit,
            ...defaultParams,
            ...removeEmptyAndUndefined(params),
          }),
      });
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  return {
    fetchData,
  };
}
