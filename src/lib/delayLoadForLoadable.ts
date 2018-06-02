const delayLoad = delay => (loader): Promise<any> => new Promise(resolve => {
  setTimeout(() => resolve(loader()), delay)
})

export default delayLoad

export class Abc {
  b?: string

  constructor () {
    this.b = 'sdf'
  }
  a (): string {
    return this.b
  }
}
export interface A {}

export function a (params: { name: string }) {
  return params
}
