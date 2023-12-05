import { writable } from 'svelte/store';

interface ReservationType {
  id: number;
  name: string;
  phone: string;
  date: Date;
  guests: number;
  selectTable?: number;
  floor?: number;
  note?: string;
}

const arr: ReservationType[] = [];

const reservationList = writable(arr);

export { reservationList };
