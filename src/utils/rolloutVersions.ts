// this function injects rollout versions to records based on the rollouts
// {a: asd} -> {a: asd, _site: 1.0.0, @dcl/unity-renderer: 6.0.0}
export function injectVersions<T extends Record<string, any>>(versions: T): T & Record<string, string> {
  var rolloutsInfo = (globalThis as any).ROLLOUTS || {}

  for (let component in rolloutsInfo) {
    if (component === '_site' || component.startsWith('@dcl')) {
      if (rolloutsInfo[component] && rolloutsInfo[component].version) {
        versions[component as keyof T] = rolloutsInfo[component].version
      }
    }
  }

  return versions
}
