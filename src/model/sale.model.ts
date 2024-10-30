export interface ISale {
  id: number
  brand_id: number
  date: DateOptions
}

type DateOptions = 'Jan' | 'Feb' | 'Mar' | 'Apr'