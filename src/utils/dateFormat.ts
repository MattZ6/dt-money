export default function dateFormat(date: Date) {
  return new Intl.DateTimeFormat('pt-br').format(date);
}