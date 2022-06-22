import launch from '#src/launch'
import app from '#src/app'

const port = process.argv?.[2]

launch(app, port)
