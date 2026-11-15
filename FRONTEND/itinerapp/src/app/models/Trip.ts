export interface Trip{
    trip_id: string;
    title: string;
    start_date: string;
    end_date: string;
    total_budget: number;
    currency: 'EUR' | 'RON';
    created_by: string;
}