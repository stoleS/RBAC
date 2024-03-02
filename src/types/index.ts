export type ACLRulesMap = Record<string, Fn>;
export type Rule = {
  readonly rules: string | readonly string[];
  readonly requirement: Fn;
};
export type Rules = NonEmptyArray<Rule>;
export type ACLRules = {
  readonly permissions: Rules;
  readonly roles?: Rules;
};
type NonEmptyArray<T> = readonly [T, ...(readonly T[])];
/* eslint-disable  @typescript-eslint/no-explicit-any */
export type Fn = (...args: readonly any[]) => any;
export type RuleArgs = readonly any[];
export type User = {
  readonly [key: string]: any;
};
export type ACLState<U = User> = {
  user: U | null;
  readonly rulesMap: ACLRulesMap;
};