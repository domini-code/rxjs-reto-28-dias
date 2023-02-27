import { OperatorFunction, debounceTime, distinctUntilChanged, Observable, filter } from 'rxjs';
const DEFAULT_TIME = 500;

export function customOperator<T>(
  filterFn: (value: T) => boolean,
  debounceTimeFn: number,
  distinctFn: (value: T, otherValue: T) => boolean): OperatorFunction<T, T>{
  return (source: Observable<T>) =>
    source.pipe(
      filter(filterFn),
      debounceTime(debounceTimeFn || DEFAULT_TIME),
      distinctUntilChanged(distinctFn)
    );
}
