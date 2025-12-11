import { inject, provide, type InjectionKey } from 'vue'

export function createContext<T>(contextName: string): [() => T, (value: T) => void] {
  const key: InjectionKey<T> = Symbol(contextName)

  function injectContext(): T {
    const context = inject(key)
    if (context === undefined) {
      throw new Error(`${contextName} context not provided`)
    }
    return context
  }

  function provideContext(value: T): void {
    provide(key, value)
  }

  return [injectContext, provideContext]
}
