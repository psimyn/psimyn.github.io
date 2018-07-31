if (navigator.serviceWorker) {
  navigator.serviceWorker.register('serviceworker.js')
    .then(handleRegisterSuccess)
    .catch(handleRegisterFailure)

  function handleRegisterSuccess(registration) {
    console.log('Service worker registered: ', registration)
  }

  function handleRegisterFailure(error) {
    console.error('Failed to register service worker: ', error)
  }
}
