import sjson from 'secure-json-parse';
import { CookieQuantityItem } from '../app/components/CookieQuantityItem';

export function parseJson(
  stringifiedJson: string,
): undefined | CookieQuantityItem[] {
  if (!stringifiedJson) return undefined;

  try {
    return sjson(stringifiedJson);
  } catch {
    return undefined;
  }
}
