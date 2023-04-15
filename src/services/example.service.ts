import { ServiceResult } from "../models/serviceResult.model";

export function exampleServiceFunction(someParam: any): ServiceResult {
  return {
    rowCount: 1,
    rows: [
      {
        id: 1
      }
    ]
  };
}
