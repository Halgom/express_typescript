interface ServiceResult {
  rowCount?: number,
  rows?: {[key: string]: any}[]
  error?: Error
}

export function exampleService(someParam: any): ServiceResult {
  return {
    rowCount: 1,
    rows: [
      {
        id: 1
      }
    ]
  };
}
