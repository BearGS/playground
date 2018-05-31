const delayLoad = delay => loader => new Promise(resolve => {
  setTimeout(() => {
    resolve(loader())
  }, delay)
})

export default delayLoad
