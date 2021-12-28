const init = (callback: () => void): void => {
  console.log('default initialzation finished')
  callback()
  console.log('all initialization finished.')
}

init(() => console.log('custom initialization finished.'))