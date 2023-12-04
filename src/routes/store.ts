import { writable } from 'svelte/store';

interface ReservationType {
  name: string;
  phone: string;
  date: Date;
  guests: number;
  selectTable: number;
  note: string;
}

const arr:ReservationType[] = [];

const reservationList = writable(arr);

export {reservationList};