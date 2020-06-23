// In src/prismic-configuration.js
export const linkResolver = (doc) => {


  if (doc.type === 'pedals') {
    return `/pedals/${doc.uid}`
  }

  if (doc.type === 'wheels') {
    return `/wheels/${doc.uid}`
  }

  if (doc.type === 'cranksets') {
    return `/cranksets/${doc.uid}`
  }

  if (doc.type === 'handle-bars') {
    return `/handle-bars/${doc.uid}`
  }
  // Backup for all other types
  return '/'
}
