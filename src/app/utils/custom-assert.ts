import { environment } from '../../environments/environment';

export function customAssert<T>(
  condition: T,
  message: string
): asserts condition {
  if (environment.debug) {
    if (!condition) {
      throw new Error(message);
    }
  }
  // Em produção, não faz nada
}
