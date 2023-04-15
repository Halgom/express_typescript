export class ServiceResult {
  rowCount?: number;
  rows?: Array<{[key: string]: any}>;
  error?: Error
}
